import React from 'react'
import {Link} from 'react-router-dom'
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { contactsSchema } from '../../validation/contacts';
import FormField from '../form-field/FormField';
import styles from './ContactsForm.module.scss'

const ContactsForm = () => {

    const form = useForm({
        resolver: zodResolver(contactsSchema),
        defaultValues: {
            name: '',
            phone: '',
            email: '',
        },
        mode: 'onBlur',
    });

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <FormProvider {...form}>
            <form action="#" method='post' className={styles.form} onSubmit={form.handleSubmit(onSubmit)}>
                <FormField label="Имя" type="text" name="name" id="name" placeholder="Ваше имя"/>
                <FormField label="Телефон" type="tel" name="phone" id="phone" placeholder="Ваш телефон" />
                <FormField label="Почта" type="email" name="email" id="email" placeholder="Ваша почта"/>
                <div className={styles.buttons}>
                    <Link to="/">
                        <button className={styles.button}>Назад</button>
                    </Link>
                    <button type ="submit" className={styles.button}>Оплатить</button>  
                </div>
            </form>
        </FormProvider>
    )
}

export default ContactsForm