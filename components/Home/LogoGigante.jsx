import React from 'react'
import { Quicksand } from 'next/font/google'

const quick = Quicksand({ subsets: ['latin'] })

const LogoGigante = () => {
  return (
    <div className={quick.className}>
      <div className='overflow-hidden min-h-fit w-screen bg-white dark:bg-dark-l'>
        {/* <div className='w-fit flex mx-auto px-6 py-4 h-full text-[60px] lg:text-[120px] bg-[#FEBD57] rounded-[10px] items-center justify-center'>
            <h2 className='text-black'><strong>Papaya</strong></h2>
            <h2 className='text-white p-2 bg-black rounded'><strong>hub</strong></h2>
        </div> */}

      <img src="/assets/phlogo.jpeg" alt="" className="w-[300px] h-fit sm:h-[280px] mx-auto sm:mx-auto sm:w-fit rounded-md shadow-sm"/>

        <h1 className='mx-auto w-[80%] sm:w-[85%] lg:w-[70%] mt-6 text-3xl sm:text-4xl font-extrabold text-[#ffac3f] text-center'>Conectamos escorts y kinesiólogas a nivel nacional</h1>
        <h2 className='mx-auto w-[80%] sm:w-[85%] lg:w-[50%] mt-4 text-2xl sm:text-2xl text-slate-500 dark:text-white text-left sm:text-center'>Contamos con hermosas colombianas, peruanas y venezolanas en Lima Metropolitana, teens +18, y chicas universitarias que ofrecen servicios de forma ocasional, discreta y casual. Están listas y esperando tu mensaje.</h2>

    </div>
    </div>
  )
}

export default LogoGigante