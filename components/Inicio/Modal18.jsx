import Link from "next/link"

import { Poppins } from "next/font/google";

const quick = Poppins({ subsets: ['latin'], weight: "400" })

const Modal18 = ({setOpenModal18}) => {
  return (

    <div className='z-[1000] fixed flex items-center justify-center min-h-screen w-screen overflow-hidden bg-[#000000e3]'>
           <div className='flex flex-col gap-2 py-6 px-4 items-center justify-center bg-white rounded-sm sm:w-[350px] h-fit'>

           <img width="64" height="64" src="https://img.icons8.com/external-bearicons-gradient-bearicons/64/external-18+-alert-and-warning-bearicons-gradient-bearicons.png" alt="external-18+-alert-and-warning-bearicons-gradient-bearicons" className="text-orange-500"/>

                <div className={quick.className}>
                <h1 className='text-normal mx-4 lg:text-[18px] leading-5 text-center text-slate-600 font-bold'>
                Por favor lee esta advertencia antes de continuar
                </h1>
                </div>

                <div className={quick.className}>
                <p className='text-slate-600 text-center mx-8'><strong>Soy mayor de 18 años</strong> y acepto el visionado de textos e imágenes explícitos destinados a un <strong>público adulto.</strong></p>
                </div>

                <div className="flex flex-col gap-0 items-center justify-center"> 
                <p className='text-slate-400 font-light sm:mx-4 text-center'>He leído y acepto los</p>
                <Link target="_blank" href={'https://drive.google.com/file/d/1H1T-qnLR4bL4JWBkqTff3pnf8qfCqUA_/view?usp=drive_link'} className={`text-sm text-orange-500 hover:text-orange-700 transition-all duration-300 ease-in-out`}>Términos y condiciones</Link>
                </div>

                <section className="w-full mt-4 flex flex-col gap-2 items-center justify-center">
                    <button className='text-center bg-orange-500 hover:bg-orange-600 text-normal text-white transition-all duration-300 ease-linear py-1 font-bold rounded-full px-10' onClick={() => setOpenModal18(false)}>Aceptar</button>
                    <Link href={'https://www.google.com.pe/?hl=es'} className='text-center transition-all duration-300 ease-linear text-normal text-orange-500 font-bold rounded-lg'>Rechazar</Link>
                </section>
            </div> 
    </div>

  )
}

export default Modal18