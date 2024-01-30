"use client"

import Link from 'next/link'
import React from 'react'

const VipPage = () => {
  return (
    
  <>
  <div className='flex'>
        <containreportar className='z-10 flex flex-col gap-1 min-h-screen overflow-hidden items-center justify-center w-screen relative'>
        
        <containcuadrito className='flex flex-col gap-4 p-6 w-[95%] lg:w-[450px] rounded-lg dark:bg-dark-d bg-white border-4 border-bor-red shadow-custom1'>
        <div className='flex flex-col gap-2 items-center justify-center dark:text-white text-black'>
        <h1 className='font-extrabold text-2xl sm:text-[30px] dark:text-white text-black'>Papaya <nav className='bg-back-red p-2 inline-block rounded-[10px]'>Vip</nav></h1>

        <p className='text-center text-[12px] sm:text-sm'>
        Si deseas brindar servicios exclusivos y discretos con tarifas desde S/. 500 a más, escríbenos y consulta los requisitos para ser parte de este segmento papayahubvip@gmail.com</p>
        </div>


        <whatsapp className='w-full h-full flex flex-col justify-center items-center text-white dark:text-blackt rounded-lg gap-2'>
          <a href={`https://api.whatsapp.com/send?phone=+51931550980&text=Hola,%20me%20gustaría%20pertenecer%20a%20Papayahubvip.`}
        target="_blank"
        rel="noopener noreferrer"
         className='px-8 py-[10px] font-bold text-xl bg-back-red hover:bg-yellow-600 duration-200 transition-all ease-linear text-white rounded-lg w-fit'>
                <img width="32" height="32" src="/assets/logowtsp1.png" alt="whatsapp--v1" className='my-auto mb-1 inline-block text-yellow-500'/> WhatsApp 
            </a>
            {/* <div className='text-white dark:text-black text-center text-[16px] sm:text-base mx-10'>
                <h1 className="">Envíanos un WhatsApp indicando el nivel de suscripción, código ID, nombre y activaremos tu perfil.</h1>
    
            </div> */}
          </whatsapp>
  
        </containcuadrito>

        </containreportar>
        
    </div>
    <img
    src="/assets/bannerfulla.jpg"
    alt=""
    className="fixed z-0 top-0 left-0 w-screen h-screen object-cover object-right"
  />
  </>
  )
}

export default VipPage