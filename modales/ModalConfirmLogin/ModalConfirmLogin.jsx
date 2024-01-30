"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const ModalConfirmLogin = ({ modalIsOpen, onClose }) => {

    if(!modalIsOpen) return
  
    const handleClose = () => {
      showActive(false) // Cambia show a false primero
      onClose();      // Luego cierra el modal
    };
  
    
    return (
        <div className="z-100 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center mt-[60px] sm:mt-[0px] sm:items-center">
            <div className="flex flex-col sm:flex-row h-[500px]">
                <div className="mt-1 w-[340px] mx-auto sm:w-[280px] shadow-lg bg-[#421c77] h-[310px] py-[10px] sm:py-4 px-4 flex flex-col justify-center my-auto items-center">
                <div className=" p-2 text-white rounded font-bold">
                    <h1 className="text-center text-2xl sm:text-3xl font-bold">¡Inscripción exitosa! 😊</h1>
                    {/* <h6 className="text-center font-extralight mt-2">✅La información de tu inscripción estará en tu panel de usuario.</h6> */}
                    <p className="text-center font-extralight mt-2">✅Paga ahora o en cualquier momento por única vez y empezaremos a buscar el equipo el ideal para ti.</p>
                </div>
                </div>

                
                <div className="sm:w-[400px] bg-[#e1c9ff] border-y-8 border-bor-light rounded-md  flex flex-col">
                <button className="mr-2 font-extrabold text-xl place-self-end hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease" onClick={handleClose}>X</button>
                
                <h1 className="p-2 bg-back-light w-[280px] text-center mx-auto text-white font-bold">Mr Developer Program</h1>
                <img src="/assets/promodeveloper.jpg" alt="" className=" w-[70%] h-[70%] mx-auto"/>

                <botones className='flex flex-col gap-1 m-4'>
                <Link href={'/metodos-de-pago'} className="p-2 text-center bg-back-light rounded-md text-white font-bold text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease">Métodos de pago</Link>
                <Link href={'/'} className="p-2 text-center bg-back-dark rounded-md text-white font-bold text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease">Pagar después</Link>
                    
                </botones>
            </div>
            </div>
        </div>
        )
}

export default ModalConfirmLogin;