import React from 'react'
import classNames from 'classnames';
import { useFormContext } from 'react-hook-form';
import styles from './FormField.module.scss'

const FormField = ({label, type, name, id, placeholder, onChange, ...rest}) => {

  const {
    register, watch, formState: { errors, touchedFields },
  } = useFormContext();

  const errorText = errors[name]?.message;

  const value = watch(name);

  console.log(value)

  const getInputNumberValue = (input) => {
    return input.value.replace(/\D/g, '');
  };

  const handlePhoneChange = (event) => {
    let input = event.target;
    let inputNumberValue = getInputNumberValue(input);
    let formattedInputValue = ''; 
    let rusStartDigits = ['7', '8', '9'];

    console.log(inputNumberValue)

    if (!inputNumberValue) {
      return input.value = '';
    }

    if (rusStartDigits.includes(inputNumberValue[0])) {

      let firstSymbol = (inputNumberValue[0] === '8') ? '8' : '+7';
      if (inputNumberValue[0] === '9') {
        return input.value = '7' + inputNumberValue;
      }
      formattedInputValue = firstSymbol + ' ';

      if (inputNumberValue.length > 1) {
        formattedInputValue += '(' + inputNumberValue.substring(1, 4);
      }

      if (inputNumberValue.length >= 5) {  
        formattedInputValue += ') ' + inputNumberValue.substring(4, 7);
      }

      if (inputNumberValue.length >= 8) {
        formattedInputValue += '-' + inputNumberValue.substring(7, 9);
      }

      if (inputNumberValue.length >= 10) {
        formattedInputValue += '-' + inputNumberValue.substring(9, 11);
      }
    } else {
      formattedInputValue = '+' + inputNumberValue;
    }

    input.value = formattedInputValue;
  }

  const handlePhoneKeyDown = (event) => {
    if (event.key === 'Backspace' && getInputNumberValue(event.target).length === 1) {
      event.target.value = '';
    }
  }

  const labelClass = classNames(styles.formField__label, {
    [styles.formField__label_error]: errorText,
  });

  const inpClass = classNames(styles.formField__input, {
    [styles.formField__input_error]: errorText,
  });

  return (
    <div className={styles.formField}>
        <label htmlFor={name} className={labelClass}>{label}*</label> 
        {
          type === 'tel' ? 
            <input type={type} name={name} id={id} placeholder={placeholder} className={inpClass} {...register(name)} required onKeyDown={handlePhoneKeyDown} onChange={handlePhoneChange} {...rest}/> 
            : 
            <input type={type} name={name} id={id} placeholder={placeholder} className={inpClass} {...register(name)} required onChange={onChange} {...rest}/>
        }
        {errorText &&  touchedFields[name] && <p className={styles.error}>{errorText}</p>}
    </div>
  )
}

export default FormField; 