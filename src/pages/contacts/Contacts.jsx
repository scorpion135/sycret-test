import React from 'react'

import styles from './Contacts.module.scss'
import ContactForm from '../../components/contacts-form/ContactForm'

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <h2 className={styles.contacts__title}>Заполните контакты</h2>
      <p className={styles.contacts__description}>Пожалуйста, укажите свои данные для оформления сертификата.</p>
      {/* <ContactForm /> */}
    </div>
  )
}

export default Contacts