import style from './GaleriaIMG.module.css'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const GaleriaVIDEO = ({ galeriaVIDEO }) => {
  return (
    
    <section className='bg-dark-d py-10 text-txt-dark-l dark:bg-white px-10 rounded-[10px] shadow-custom1 overflow-hidden relative mb-[5rem] w-[90%] lg:w-[60%] mx-20'>
        <div className='flex items-center justify-center'>
            <div className='items-center inline-block'>
            <h2 className='text-center text-4xl mx-4 font-light dark:text-black text-white'><strong className='font-extrabold'>Galeria</strong> de videos</h2>
            </div>
        </div>
        <Swiper
        slidesPerView={1}
        spaceBetween={0}
        // pagination={{
        //   clickable: true,
        // }}
        pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        className="mySwiper max-w-[1400px]"
        breakpoints = {{
            600: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }}
      >

            { galeriaVIDEO && galeriaVIDEO?.map(g => (
                <SwiperSlide style={{background: "transparent"}}>
                <article className='p-4 text-white rounded-md'>
                    <div className='overflow-hidden my-0 mx-auto'>
                        <video src={g} alt="imagen de la chica" className='rounded-[10px]' controls/>
                    </div>
                    
                </article>
                </SwiperSlide>
            ))}
            

            
  
    </Swiper>
    </section>
  )
}

export default GaleriaVIDEO;