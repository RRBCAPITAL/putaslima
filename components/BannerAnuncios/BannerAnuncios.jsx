'use client'

import React, { useState, useEffect } from 'react';

const BannerAnuncios = () => {

    const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Función para manejar el evento de scroll
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const threshold = 10; // Puedes ajustar este valor según sea necesario

      // Actualiza el estado basado en la posición de scroll
      setIsVisible(scrolled < threshold);
    };

    // Agrega el evento de scroll al montar el componente
    window.addEventListener('scroll', handleScroll);

    // Limpia el evento al desmontar el componente para evitar fugas de memoria
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // El segundo 

  return (
    <div className='w-screen bg-white dark:bg-black'>
    {isVisible &&
    <div className={`z-[999] h-fit lg:h-[90px] w-fit lg:w-[980px] mx-auto transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
     {/* <img src="/assets/bann1.png" alt="" className='border-2' />a */}
     <video autoPlay loop muted playsInline src="/assets/videoanuncio.mp4" className=''></video>
  </div>
}
</div>
  )
}

export default BannerAnuncios