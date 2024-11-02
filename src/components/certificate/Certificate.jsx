import React from 'react'
import {Link} from "react-router-dom"
import styles from './Certificate.module.scss'

const Certificate = ({amount}) => {
  return (
    <div className={styles.certificate}>
        <button className={styles.certificate__price}>{amount} руб.</button>
        <div className={styles.certificate__info}>
            <h2 className={styles.certificate__title}>Сертификат</h2>
            <p className={styles.certificate__description}>Подарочный сертификат на сумму {amount} руб.</p>
        </div>
        <Link to="/contacts">
          <button className={styles.certificate__order} >Оформить</button>
        </Link>
        
    </div>
  )
}

export default Certificate