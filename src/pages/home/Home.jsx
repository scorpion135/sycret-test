import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from "swiper/modules";

import 'swiper/css';

import styles from "./Home.module.scss";
import "./../../sass/app.scss";

import Certificate from "../../components/certificate/Certificate";


const Home = () => {

  const swiperRef = useRef(null);

  const updateButtonState = (swiper) => {
      const prevButton = document.querySelector('.swiper-button-prev');
      const nextButton = document.querySelector('.swiper-button-next');

      if (swiper.isBeginning) {
          prevButton.classList.add('disabled');
      } else {
          prevButton.classList.remove('disabled');
      }

      if (swiper.isEnd) {
          nextButton.classList.add('disabled');
      } else {
          nextButton.classList.remove('disabled');
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
            <div className="swiper-button-prev">
              <img src="./icons/back.svg" alt="" />
            </div>
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
            <SwiperSlide className="swiper-slide">
                <Certificate amount={5000}/>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <Certificate amount={10000}/>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <Certificate amount={15000}/>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <Certificate amount={20000}/>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <Certificate amount={25000}/>
            </SwiperSlide>
            
          </Swiper>
          <div className="swiper-button-next" onClick={() => swiperRef.current.slideNext()}>
              <img src="./icons/next.svg" alt=""/>
          </div>
        </div>
       
        
      </div>
    </main>
  );
};

export default Home;
