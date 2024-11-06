import React from 'react'

import styles from './Contacts.module.scss'
import ContactsForm from '../../components/contacts-form/ContactsForm'

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <h2 className={styles.contacts__title}>Заполните контакты</h2>
      <p className={styles.contacts__description}>Пожалуйста, укажите свои данные для оформления сертификата.</p>
      <ContactsForm />
    </div>
  )
}

export default Contacts