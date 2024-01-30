import React from 'react'
import { BsInstagram, BsFacebook, BsTelegram, BsTiktok} from 'react-icons/bs'
import { motion } from "framer-motion"
import { fadeIn } from '@/utils/motionTransitions'

const Banner = () => {
  return (
    // <div>
    //   <img src="/assets/1icon-scort" alt="scort" className='h-[100px] w-[100px] mt-10' />
    // </div>
    // <motion.div className="mt-10 z-9 flex flex-col  text-white"
    // variants={fadeIn("right", 0)} initial='hidden' animate="show" exit="hidden"
    // >
    //     <bannercontainer className=" overflow-hidden w-full mt-10 bg-transparent rounded-xl flex items-center justify-center relative scale-[0.9]"  >
    //       <textbanner className="z-30 my-10 w-screen leading-0 rounded-[20px] flex flex-col items-center justify-center">
    //       <h2 className="mx-6 text-[16px] sm:text-3xl text-white text-center font-extrabold font-mono">
    //       DICEN QUE LA FELICIDAD NO TIENE PRECIO
    //       </h2>
    //       <h2 className="mx-6 text-[16px] sm:text-3xl text-white text-center font-extrabold font-mono">
    //             PERO PUEDES VENIR A VERNOS.
    //       </h2>
    //       </textbanner>

    //       <div>
    //         <img
    //           src="/assets/bannerfulla.jpg"
    //           alt="teamdev"
    //           className=" z-10 absolute top-0 right-0 left-0 
    //                   m-auto bg-no-repeat object-cover w-full h-full rounded-[20px]"
              
    //         />
    //         <div className='absolute z-50 bottom-1 right-2 flex gap-4 text-4xl p-[4px] rounded-[10px] w-fit items-center justify-center'>
    //           <h1 className='text-sm lg:text-[18px]'>¡Únete a la comunidad!</h1>
    //           <a target='_blank' href="https://t.me/+582ZqhG3W_g2YzYx" className=""><img src='/assets/logotelegram.png' className='w-4 h-4 sm:w-[25px] sm:h-[25px]  hover:scale-125 transition-all ease-linear duration-300'/></a>
    //           <a target='_blank' href="https://www.instagram.com/papayahub_pe" className=" text-white"><BsInstagram className='w-4 h-4 sm:w-6 sm:h-6  hover:scale-125 transition-all ease-linear duration-300'/></a>
    //           <a target='_blank' href="https://www.tiktok.com/@papayahub_pe" className=" text-white"><BsTiktok className='w-4 h-4 sm:w-6 sm:h-6  hover:scale-125 transition-all ease-linear duration-300'/></a>
    //           {/* <a target='_blank' href="" className="text-white"><BsTiktok className='w-4 h-4 sm:w-6 sm:h-6 hover:scale-125 transition-all ease-linear duration-300'/></a> */}
              

    //       </div>
    //          {/* <img
    //           src="/assets/newbannerpro12.jpg"
    //           alt="teamdev"
    //           className=" z-10 absolute top-0 right-0 left-0 
    //                   m-auto bg-no-repeat scale-[1] sm:scale-[1.2] lg:scale-100 object-cover w-full h-full rounded-[20px]"
              
    //         /> */}
    //       </div>
    //     </bannercontainer>
    //   </motion.div>

    <motion.div className="z-[999] dark:bg-dark-l bg-white flex flex-col fixed text-black"
    variants={fadeIn("right", 0)} initial='hidden' animate="show" exit="hidden"
    >
        {/* <bannercontainer className=" overflow-hidden w-full mt-24 mb-6 bg-transparent flex items-center justify-center relative"  >
        <iconos className="z-30 w-screen flex gap-10 items-center justify-center">
          
        <div className='flex flex-col text-sm items-center justify-center gap-2 border-b-4 pb-2 border-transparent'>
          <img src="/assets/1icon-scort.png" alt="scort" className='h-[40px] w-[40px] hover:opacity-80' />
          <h1 className='text-white dark:text-slate-400'>Scorts</h1>
          </div>
          
          <div className='flex flex-col items-center justify-center gap-2 border-b-4 pb-2 border-transparent'>
          <img src="/assets/3icon-cel.png" alt="scort" className='h-[40px] w-[40px] hover:opacity-80' />
          <h1 className='text-white dark:text-slate-400'>Imagenes y videos</h1>
          </div>

          <div className='flex flex-col items-center justify-center gap-2 border-b-4 pb-4 border-white dark:border-slate-400 hover:border-slate-400 cursor-pointer'>
          <img src="/assets/2icon-telf.png" alt="scort" className='h-[40px] w-[40px]' />
          <h1 className='text-white dark:text-slate-400'>Videollamada hot</h1>
          </div>


          <div className='flex flex-col items-center justify-center gap-2 border-b-4 pb-2 border-transparent'>
          <img src="/assets/4icon-pies.png" alt="scort" className='h-[40px] w-[40px] hover:opacity-80' />
          <h1 className='text-white dark:text-slate-400'>Fotos de pies</h1>
          </div>


          <div className='flex flex-col items-center justify-center gap-2 border-b-4 pb-2 border-transparent'>
          <img src="/assets/5icon-masajes.png" alt="scort" className='h-[40px] w-[40px] hover:opacity-80' />
          <h1 className='text-white dark:text-slate-400'>Masajes</h1>
          </div>

          <div className='flex flex-col items-center justify-center gap-2 border-b-4 pb-2 border-transparent'>
          <img src="/assets/6icon-phone.png" alt="scort" className='h-[40px] w-[40px] hover:opacity-80' />
          <h1 className='text-white dark:text-slate-400'>Conversar y consejos</h1>
          </div>

          <div className='flex flex-col items-center justify-center gap-2 border-b-4 pb-2 border-transparent'>
          <img src="/assets/icon-audio.png" alt="scort" className='h-[40px] w-[70px] hover:opacity-80' />
          <h1 className='text-white dark:text-slate-400'>Audios hot</h1>
          </div>

          <div className='flex flex-col items-center justify-center gap-2 border-b-4 pb-2 border-transparent'>
          <img src="/assets/icon-chat.png" alt="scort" className='h-[40px] w-[50px] hover:opacity-80' />
          <h1 className='text-white dark:text-slate-400'>Chat erotico</h1>
          </div>

          <div className='flex flex-col items-center justify-center gap-2 border-b-4 pb-2 border-transparent'>
          <img src="/assets/icon-anal.png" alt="scort" className='h-[40px] w-[40px] hover:opacity-80' />
          <h1 className='text-white dark:text-slate-400'>Anal</h1>
          </div>

          <div className='flex flex-col items-center justify-center gap-2 border-b-4 pb-2 border-transparent'>
          <img src="/assets/icon-69.png" alt="scort" className='h-[40px] w-[40px] hover:opacity-80' />
          <h1 className='text-white dark:text-slate-400'>69</h1>
          </div>

          </iconos>  
                
        </bannercontainer> */}

      </motion.div>

  )
}

export default Banner