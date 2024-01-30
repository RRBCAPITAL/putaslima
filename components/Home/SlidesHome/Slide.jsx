"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { FaLongArrowAltRight } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import axios from 'axios';
import { useEffect } from 'react';

import Link from 'next/link';

import { FaUserCheck  } from 'react-icons/fa'

export default function Slide() {



    useEffect(() => {

    }, [])

  return (
    <>
      <div className='overflow-hidden w-screen min-h-fit border-none dark:bg-white bg-dark-l'>
        <h1 className='w-[80%] text-center text-3xl sm:text-5xl font-bold dark:text-slate-600 text-white mb-4 border-b-4 pb-2 lg:w-fit mx-auto border-bor-red uppercase'>Tenemos a las mejores escorts del Perú</h1>
        <h2 className='mx-auto w-[80%] sm:w-[85%] lg:w-[50%] mb-10 text-2xl sm:text-2xl dark:text-slate-500 text-white text-left sm:text-center'>Si estás en busca de una hermosa escort o kinesióloga para vivir momentos increíbles, aquí la encontrarás. Y si eres tú la hermosa escort, no dudes en crear tu anuncio para que tu chat se llene de mensajes de futuros clientes.</h2>
      <Swiper
      slidesPerView={1}
        spaceBetween={0}
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mx-40 rounded-[10px] shadow-md shadow-slate-700 dark:shadow-black sm:w-full"
        breakpoints = {{
            600: {
                slidesPerView: 4
            },
            1024: {
                slidesPerView: 6
            }
        }}
        loopedSlides={true}
      >
        <SwiperSlide ><img src="/assets/slide1.jpg" alt="" className='w-fit h-[500px]'/></SwiperSlide>
        <SwiperSlide ><img src="/assets/slide2.jpg" alt="" className='w-fit h-[500px]'/></SwiperSlide>
        <SwiperSlide ><img src="/assets/slide3.jpg" alt="" className='w-fit h-[500px]'/></SwiperSlide>
        <SwiperSlide ><img src="/assets/slide4.jpg" alt="" className='w-fit h-[500px]'/></SwiperSlide>
        <SwiperSlide ><img src="/assets/slide5.jpg" alt="" className='w-fit h-[500px]'/></SwiperSlide>
        <SwiperSlide ><img src="/assets/slide1.jpg" alt="" className='w-fit h-[500px]'/></SwiperSlide>
        <SwiperSlide ><img src="/assets/slide2.jpg" alt="" className='w-fit h-[500px]'/></SwiperSlide>
        <SwiperSlide ><img src="/assets/slide3.jpg" alt="" className='w-fit h-[500px]'/></SwiperSlide>
        <SwiperSlide ><img src="/assets/slide4.jpg" alt="" className='w-fit h-[500px]'/></SwiperSlide>
      </Swiper>

      {/* <buttons className='mx-auto w-[80%] sm:w-[85%] lg:w-[50%] flex flex-col items-center justify-center sm:flex-row gap-4 mt-10 mb-2'>
      <Link href='/crear-anuncio' className="w-full lg:w-fit px-6 text-center py-4 rounded-[50px] duration-200 transition-all ease-linear bg-back-red hover:bg-[#ff9f51] text-yellow-100 shadow-p4 hover:shadow text-xl font-bold">Crea tu anuncio aquí <FaLongArrowAltRight className='w-[26px] h-[26px] inline-block'/></Link>
    </buttons> */}

<buttons className=' mx-auto w-[80%] sm:w-[85%] lg:w-[50%] flex flex-col items-center justify-center sm:flex-row gap-4 mt-8'>
<Link href='/sign-in' className="w-full lg:w-fit px-6 text-center py-4 rounded-[50px] duration-200 transition-all ease-linear bg-back-red hover:bg-[#ff9f51] text-yellow-100 shadow-p4 hover:shadow text-xl font-bold">Registrarme ahora <FaUserCheck className="h-6 w-6 inline-block mb-1"/></Link>
</buttons>
      </div>
    </>
  );
}
