import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, Pagination, Autoplay } from 'swiper/modules';
import PropTypes from 'prop-types';
import CarWhite from '../../images/white.jpg'
import CarGrean from '../../images/grean.jpg';
import CarBlack from '../../images/black.jpg';

import './styles.css';

export default function SwiperList() {
    return (
      <>
          <Swiper
            effect="cube"
            grabCursor
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination
            modules={[EffectCube, Pagination, Autoplay]}
            className="mySwiper"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            >
              
            <SwiperSlide>
              <img src={CarWhite} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CarGrean} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CarBlack} />
            </SwiperSlide>
          </Swiper>
      
      </>
    );
}

SwiperList.propTypes = {
  catalogData: PropTypes.array.isRequired,
};
