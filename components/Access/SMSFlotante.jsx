"use client"

import { useState } from "react"
import ModalSms from "./ModalSms"

const SMSFlotante = () => {

  const [modalSmsOpen, setModalSmsOpen] = useState(false)

  console.log(modalSmsOpen);

  const closeModal = () => {

    setModalSmsOpen(false)
  }
  
  
  return (
    <>
    <div
    onMouseEnter={() => setModalSmsOpen(true)} // Muestra el modal al hacer hover
    // onMouseLeave={() => setModalSmsOpen(false)} // Oculta el modal al quitar el hover

    className="z-50 bottom-4 right-4 fixed transition-all ease-in-out duration-300">
      <div className={` bg-[#ffb35c] shadow-normal transition-all ease-in-out duration-300 hover:bg-[#22193e] rounded-full w-fit cursor-pointer z-50`}>
        {/* <a
          href={`https://api.whatsapp.com/send?phone=+51924169968&text=Hola%2C%20estoy%20interesad@%20en%20unirme%20a%20un%20equipo%20de%20desarrollo.`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/logowtsp2.png"
            alt="logowtsp"
            className="absolute right-[5px] bottom-[5px] sm:bottom-[7px] sm:right-[13px] h-[4rem] w-[4rem] sm:h-[3rem] sm:w-[3rem] z-50 hover:w-[3.5rem] hover:h-[3.5rem] durantion-300 transition-all ease-in-out"
          />
          
        </a> */}
        <div className="flex text-slate-100 font-bold w-fit py-1 px-2 sm:px-[6px] durantion-300 transition-all ease-in-out">
        
        
        <img src="/assets/sms.png" alt="" className="scale-[0.6]"/>
        {/* <button  className="my-auto hidden sm:block hover:block text-[14px] pr-2">Ayúdanos a mejorar!</button> */}
        </div>
      </div>
      {modalSmsOpen && <ModalSms setModalSmsOpen={setModalSmsOpen} closeModal={closeModal}/>}
      </div>

      
    </>
  )
}

export default SMSFlotante;