import React from 'react'
import classNames from 'classnames';
import { useFormContext } from 'react-hook-form';

import styles from './FormField.module.scss'

const FormField = ({label, type, name, id, placeholder}) => {

  const {
    formState: { errors, touchedFields },
  } = useFormContext();

  const errorText = errors[name]?.message;

  const labelClass = classNames(styles.formField__label, {
    [styles.formField__label_error]: errorText,
  });

  const inputClass = classNames(styles.formField__input, {
    [styles.formField__input_error]: errorText,
  });

  return (
    <div className={styles.formField}>
        <label htmlFor="name" className={labelClass}>{label}*</label>
        <input type={type} name={name} required id={id} placeholder={placeholder} className={inputClass}/>
        {errorText &&  touchedFields[name] && <p className={styles.error}>{errorText}</p>}
    </div>
  )
}

export default FormField; 