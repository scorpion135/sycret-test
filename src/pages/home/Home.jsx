import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from "swiper/modules";
import {useSelector, useDispatch} from 'react-redux';

import {fetchCertificates} from "../../redux/slices/certificates.js";

import 'swiper/css';

import styles from "./Home.module.scss";
import "./../../sass/app.scss";

import Certificate from "../../components/certificate/Certificate";


const Home = () => {

  const swiperRef = useRef(null);
  const dispatch = useDispatch();

  const prevButton = useRef(null);
  const nextButton = useRef(null);

  const {items, status} = useSelector((state) => state.certificates);

  console.log(status)

  useEffect(() => {
    dispatch(fetchCertificates());
  }, []);

  const updateButtonState = (swiper) => {
    if (prevButton.current && nextButton.current) {
      // Скрываем или показываем кнопки в зависимости от положения слайдера
      if (swiper.isBeginning) {
        prevButton.current.style.display = 'none';
      } else {
        prevButton.current.style.display = 'block';
      }

      if (swiper.isEnd) {
        nextButton.current.style.display = 'none';
      } else {
        nextButton.current.style.display = 'block';
      }
    }
  };



  return (
    <main className="wrapper">
      <div className="container">
        <h1 className={styles.title}>Подарочные сертификаты</h1>
        <p className={styles.description}>
          Выберите свой идеальный сертификат и сделайте подарок, который
          запомнится!
          <br /> У нас есть сертификаты на любой вкус и кошелек!
        </p>
        
        <div className="swiper-outer">
            {
              status === 'loading' ? (
                null
              ) : <div className="swiper-button-prev" ref={prevButton} onClick={() => swiperRef.current.slidePrev()}>
              <img src="./icons/back.svg" alt="" />
            </div>
            }
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            className='swiper-container'
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              updateButtonState(swiper);
            }}
            onSlideChange={(swiper) => updateButtonState(swiper)}


            >   
            
              { (status === 'loading' ? [...Array(3)] : items).map((item, index) => (
                  <SwiperSlide className="swiper-slide" key={index}>
                    <Certificate price={item?.PRICE} summa={item?.SUMMA} isLoading={status}/>
                  </SwiperSlide>
                ))
              }         
          </Swiper>
          {
            status === 'loading' ? (
              null
            ) : <div className="swiper-button-next" onClick={() => swiperRef.current.slideNext()} ref={nextButton}>
            <img src="./icons/next.svg" alt=""/>
        </div>
          }
          
        </div>
       
        
      </div>
    </main>
  );
};

export default Home;
