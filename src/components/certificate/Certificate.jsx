import React from 'react'
import {Link} from "react-router-dom"
import styles from './Certificate.module.scss'
import Skeleton from './Skeleton.jsx'

const Certificate = ({price, summa, isLoading}) => {

  console.log(isLoading)
  return (
    <>
      {
          isLoading === 'loading' ? (
            <Skeleton/>
          ) : (
            <div className={styles.certificate}>
              <button className={styles.certificate__price}>{Math.trunc(summa)} руб.</button>
              <div className={styles.certificate__info}>
                  <h2 className={styles.certificate__title}>Сертификат</h2>
                  <p className={styles.certificate__description}>Подарочный сертификат на сумму {Math.trunc(price)} руб.</p>
              </div>
              <Link to="/contacts">
                <button className={styles.certificate__order} >Оформить</button>
              </Link>
            </div>
          )
      }
    </>
  )
}

export default Certificate