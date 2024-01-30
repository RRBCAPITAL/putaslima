"use client"

import Link from "next/link"
import { useState, useEffect, useCallback, useReducer } from "react";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { FaUserCheck } from 'react-icons/fa'
import { useUser, UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { MdNightlight } from 'react-icons/md'
import { MdOutlineLightMode } from 'react-icons/md'
import SignOutButton from "./SignOutButton";
import { MdCreateNewFolder } from "react-icons/md";

import { HiOutlineLogout } from "react-icons/hi";

import { Button, ButtonGroup, Stack } from '@chakra-ui/react'

import { motion } from "framer-motion"
import { fadeIn } from '@/utils/motionTransitions'

import { useClerk } from "@clerk/clerk-react";

import { Poppins } from 'next/font/google'
import Inicio from "../Inicio/Inicio";
import BannerAnuncios from "../BannerAnuncios/BannerAnuncios";

const quick = Poppins({ subsets: ['latin'], weight: ["400", "600"] })

export const changeNabvar = (changeNabvarF) => {
  console.log(changeNabvarF);
  if(typeof changeNabvar === "undefined"){
    const changeNabvarF = true
    return changeNabvarF
  }
  return changeNabvarF
}

const Navbar = ({ currentUserR }) => {

    const pathname = usePathname()
    const [ show, setShow ] = useState(false)
    const [ changeNabvarF, setChangeNabvarF ] = useState(false)

    changeNabvar(changeNabvarF)


    // const [ currentUserR, setCurrentUserR] = useState()

    const userR = useUser()
    const id = currentUserR?.id

    const openModal = () => {
        setModalIsOpen(true);
      };
      
      const closeModal = () => {
        setModalIsOpen(false);
      };

    const handleModal = () => {
        setShowActive(true)
        openModal()
    }

  if (typeof window !== 'undefined'){
    // Recuperar el estado del tema desde el almacenamiento local si está disponible
    const initialTheme = localStorage?.getItem('theme') || (
        window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        );
  
  var [theme, setTheme] = useState(initialTheme);

  // Cambiar el tema
  var handleChangeTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    // Guardar el nuevo tema en el almacenamiento local
    localStorage?.setItem('theme', newTheme);
    handleNavbarPhone()
  };
  

  // Aplicar la clase 'dark' al cuerpo del documento según el estado del tema
  useEffect(() => {
    const bodyElement = document.querySelector('body');
    if (theme === 'dark') {
      bodyElement.classList.add('dark');
    } else {
      bodyElement.classList.remove('dark');
    }
  }, [theme]);
}

const [isLoadingAnuncio, setIsLoadingAnuncio] = useState(false);

  const handleClick = () => {
    // Inicia la carga
    setIsLoadingAnuncio(true);

    // Simula alguna operación asincrónica, como una solicitud HTTP
    setTimeout(() => {
      // Finaliza la carga después de un tiempo de simulación
      setIsLoadingAnuncio(false);
    }, 2000); // Simulación de 2 segundos
  };

    const handleNavbarPhone = () => setShow(!show)

    return (
    <div className={quick.className}>

    {/* {
      (pathname === '/' || pathname === '/videos' || pathname === '/cositas') && <BannerAnuncios />
    } */}

    <header className="z-[300] w-screen fixed  dark:bg-[#000000] shadow-custom1 bg-white py-0 px-[2rem]">
        <motion.div className=" h-[50px] w-[90%] mx-auto flex items-center justify-between"
         variants={fadeIn("left", 0)} initial='hidden' animate="show" exit="hidden"
        >
            
            <menu className="flex gap-10">
            <div className="text-[1rem] font-bold">
            <Link href={'/'} onClick={() => {
              setShow(false)
              setChangeNabvarF(!changeNabvarF)
            }} className="font-extrabold">
                    <img src="/assets/phlogo.jpeg" alt="" className="h-10 w-auto rounded-md shadow-sm"/>
            </Link>
            </div>
            <div className="hidden lg:block dark:text-white text-slate-800">
                <ul className="my-auto flex gap-[2rem] h-full font-bold text-[14px]">
                <Link
                    href={'/inicio'}
                    className={`my-auto ${pathname === ('/inicio') ? "font-extrabold  text-t-red transition-all duration-300 ease-in-out" : "transition-all duration-300 ease-in-out dark:text-white text-slate-800"}`}
                >Inicio</Link>
                <Link
                    href={'/'}
                    className={`my-auto ${pathname === ('/') ? "font-extrabold  text-t-red transition-all duration-300 ease-in-out" : "transition-all duration-300 ease-in-out dark:text-white text-slate-800"}`}
                >Mujeres</Link>
                <Link
                    href={'/videos'}
                    className={`my-auto ${pathname === ('/videos') ? "font-extrabold  text-t-red transition-all duration-300 ease-in-out" : "transition-all duration-300 ease-in-out dark:text-white text-slate-800"}`}>
                Videos</Link>
                <Link
                    href={'/cositas'}
                    className={`my-auto ${pathname === ('/cositas') ? "font-extrabold  text-t-red transition-all duration-300 ease-in-out" : "transition-all duration-300 ease-in-out dark:text-white text-slate-800"}`}>
                Cositas</Link>
                {/* <Link
                    href={'/vip'}
                    className={`my-auto ${pathname === ('/vip') ? "font-extrabold  text-t-red transition-all duration-300 ease-in-out" : "transition-all duration-300 ease-in-out dark:text-white text-slate-800"}`}>
                Vip</Link>
                <Link
                    href={'/soporte'}
                    className={`my-auto ${pathname === ('/soporte') ? "font-extrabold  text-t-red transition-all duration-300 ease-in-out" : "transition-all duration-300 ease-in-out dark:text-white text-slate-800"}`}>
                Soporte</Link> */}
                
                {

                }
                </ul>
            </div>
            </menu>

            <div className="hidden lg:block">
                <div className="flex gap-[0.8rem]">
                
               <Link 
      href={`/dashboard-de-usuario/${id}`} 
      className={`${pathname === `/dashboard-de-usuario/${id}` && "bg-back-red-l"} transition-all duration-200 ease-linear flex gap-[4px] border-2 border-bor-red  text-white py-[0.3rem] px-[0.8rem]
                    rounded-[20px] text-[14px] font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] scale-[1] ease`}
    >
      <h3 className="my-auto text-t-red">Mis anuncios</h3>  
      <FaUserCheck className="my-auto text-t-red"/>       
    </Link>

                {
                   currentUserR && (currentUserR?.role === 'ADMIN' || currentUserR?.role === 'SUPER_ADMIN') && 
                   <>
                   <Link href={'/dashboard'} className={`${pathname === '/dashboard' && "bg-[#dcd7ff]"} transition-all duration-200 ease-linear flex gap-[4px] border-2 border-[#794cff]  text-white py-[0.3rem] px-[0.8rem]
                    rounded-[20px] text-[14px] font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] scale-[1] ease`}>
                           <h3 className="my-auto text-[#794cff]">Dashboard</h3>
                        <FaUserCheck className="my-auto text-[#794cff]"/>  
                        
                    </Link>

                    <Link href={'/crear-videos'} className={`${pathname === '/crear-videos' && "bg-[#dcd7ff]"} transition-all duration-200 ease-linear flex gap-[4px] border-2 border-[#794cff]  text-white py-[0.3rem] px-[0.8rem]
                    rounded-[20px] text-[14px] font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] scale-[1] ease`}>
                           <MdCreateNewFolder className="my-auto w-4 h-4 text-[#794cff]"/>  
                           <h3 className="my-auto text-[#794cff]">Videos</h3>                        
                    </Link>

                    <Link href={'/crear-cositas'} className={`${pathname === '/crear-cositas' && "bg-[#dcd7ff]"} transition-all duration-200 ease-linear flex gap-[4px] border-2 border-[#794cff]  text-white py-[0.3rem] px-[0.8rem]
                    rounded-[20px] text-[14px] font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] scale-[1] ease`}>
                           <MdCreateNewFolder className="my-auto w-4 h-4 text-[#794cff]"/> 
                           <h3 className="my-auto text-[#794cff]">Cositas</h3>
                    </Link>
                    </>
                }

               {!currentUserR ? 
                  <Link href={'/sign-in'} className="bg-back-red-l border-2 border-bor-red transition-all duration-200 ease-linear flex gap-[4px] text-[#fff7d3] py-[0.3rem] px-[0.8rem] outline-none
                  rounded-[20px] text-[14px] font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] scale-[1]">
                <nav className="inline-block text-t-red">Iniciar</nav> Sesión
                </Link>
                : <div className="my-auto border-2 scale-[1.1] border-bor-red rounded-full">
                <UserButton afterSignOutUrl="/sign-in"/>

                </div>
                }

                {
                  currentUserR ? <Link
                  href={'/crear-anuncio'}
                  className={`bg-back-red shadow-p4 hover:shadow transition-all duration-200 ease-linear flex gap-[4px] text-[#fff7d3] py-[0.3rem] px-[0.8rem] border-none outline-none
                  rounded-[20px] text-[14px] font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] scale-[1]`}
                  
                  >
              <Button 
              variant="outline"
              isLoading={isLoadingAnuncio} // Utiliza el estado de isLoading de Chakra UI
              loadingText="Cargando"
              onClick={handleClick} // Llama a la función cuando se hace clic
              >
                  Crear anuncio
              </Button>
          </Link> : <Link
                href={'/sign-in'}
                className={`bg-back-red shadow-p4 hover:shadow transition-all duration-200 ease-linear flex gap-[4px] text-[#fff7d3] py-[0.3rem] px-[0.8rem] border-none outline-none
                rounded-[20px] text-[14px] font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] scale-[1]`}
                
                >
            <Button 
            variant="outline"
            isLoading={isLoadingAnuncio} // Utiliza el estado de isLoading de Chakra UI
            loadingText="Cargando"
            onClick={handleClick} // Llama a la función cuando se hace clic
            >
                Crear anuncio
            </Button>
        </Link>
                }

            { theme === "dark" ?
            <button onClick={handleChangeTheme} className=" rounded-full px-[10px] transition-all duration-300 ease-in-out">
                  <MdOutlineLightMode className="text-t-red w-6 h-6 transition-all duration-300 ease-in-out"/>
            </button>
            :
            <button onClick={handleChangeTheme} className="rounded-full px-[10px] transition-all duration-300 ease-in-out">       
                 <MdNightlight className="text-t-red w-6 h-6 transition-all duration-300 ease-in-out"/>
            </button>  
            }
                </div>
            </div>
            <div className=" lg:hidden"
            onClick={handleNavbarPhone}
            >
                <div className="dark:text-[#fff] text-black text-[1.5rem] cursor-pointer flex-none">
                    { show ? <MdOutlineClose /> : <FiMenu />}
                </div>
            </div>
        </motion.div>
        
        {
            show ? <motion.div className="z-50 lg:hidden fixed left-[0rem] h-screen w-screen dark:bg-[#131313] bg-white dark:text-t-dark backdrop:blur-[15px]
            overflow-hidden transition-nicetransition"
            variants={fadeIn("left", 0)} initial='hidden' animate="show" exit="hidden"
            >
                <div className="flex flex-col justify-between gap-1 my-2">
                    <ul className="flex flex-col text-2xl gap-0 p-[0.1rem] my-4 ">
                    {!currentUserR ?
                <div className="flex flex-col gap-1 ">
                  <h2 className="py-[0.1rem] px-[1rem] font-bold dark:text-white text-slate-600">¡Hola!</h2>
                  <h2 className="text-sm  py-[0.1rem] px-[1rem] text-slate-600">Regístrate o ingresa para empezar a publicar gratis.</h2>
                  <div className="flex gap-1 items-center justify-center">
                  <Link href={'/sign-up'} onClick={handleNavbarPhone} className="w-full text-t-red border-2 border-bor-red transition-all duration-200 ease-linear flex items-center justify-center gap-[4px] py-[0.3rem] px-[1rem] outline-none
                rounded-[20px] text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] scale-[1]">
                Registrarse
                </Link>

                  <Link href={'/sign-in'} onClick={handleNavbarPhone} className="w-full bg-back-red border-2 border-bor-red transition-all duration-200 ease-linear flex items-center justify-center gap-[4px] text-white py-[0.3rem] px-[1rem] outline-none
                rounded-[20px] text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] scale-[1]">
                Ingresar
                </Link>
                </div>
                </div> :
                <>
                <div className="flex gap-2 dark:text-white text-slate-600 py-[0.1rem] px-[1rem]" >Hola {currentUserR?.firstname} <UserButton afterSignOutUrl="/sign-in"/> </div>
                <div className="flex flex-col gap-1 dark:text-slate-400 text-slate-600">
                  <h2 className="text-sm  py-[0.1rem] px-[1rem]">Publica gratis y empieza a recibir mensajes.</h2>
                <Link href={'/crear-anuncio'} onClick={handleNavbarPhone} className={` ${pathname === ('/crear-anuncio') && "bg-[#361e09]" } w-[90%] flex mx-4 items-center justify-center gap-2 text-white bg-back-red py-[0.3rem] px-[0.5rem] border-2 border-bor-red outline-none
                    rounded-[20px] text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease`}>
                        
                        <h3 className="my-auto">Publicar gratis</h3>
                        <FaUserCheck className="my-[4px] h-6 w-6"/>       
                        
                    </Link>
                </div>
                </>        
                }
                  
                  <Link href={'/inicio'} onClick={handleNavbarPhone} className={` ${pathname === ('/inicio') ? "text-t-red" : "dark:text-white text-slate-600"} mt-4 my-auto text-xl w-full flex gap-2 py-[0.1rem] px-[1rem] outline-none
                    rounded-[20px] text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease`}>Inicio</Link>
                        <Link href={'/'} onClick={handleNavbarPhone} className={` ${pathname === ('/') ? "text-t-red" : "dark:text-white text-slate-600"} my-auto text-xl w-full flex gap-2 py-[0.1rem] px-[1rem] outline-none
                    rounded-[20px] text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease`}>Mujeres</Link>
                     <Link href={'/videos'} onClick={handleNavbarPhone} className={` ${pathname === ('/videos') ? "text-t-red" : "dark:text-white text-slate-600"} my-auto text-xl w-full flex gap-2 py-[0.1rem] px-[1rem] outline-none
                    rounded-[20px] text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease`}>Videos</Link>
                    <Link href={'/cositas'} onClick={handleNavbarPhone} className={` ${pathname === ('/cositas') ? "text-t-red" : "dark:text-white text-slate-600"} my-auto text-xl w-full flex gap-2 py-[0.1rem] px-[1rem] outline-none
                    rounded-[20px] text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease`}>Cositas</Link>
                    <Link href={`/dashboard-de-usuario/${id}`} onClick={handleNavbarPhone} className={` ${pathname === `/dashboard-de-usuario/${id}` ? "text-t-red" : "dark:text-white text-slate-600"} my-auto text-xl w-full flex gap-2 py-[0.1rem] px-[1rem] outline-none
                    rounded-[20px] text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease`}>Mis anuncios</Link>
                    
                    { userR?.isSignedIn &&
                    (currentUserR?.role === 'ADMIN' || currentUserR?.role === 'SUPER_ADMIN') && 
                    <>
                    <Link href={`/dashboard`} onClick={handleNavbarPhone} className={` ${pathname === ('/dashboard') ? "text-t-red" : "dark:text-white text-slate-600"} my-auto text-xl w-full flex gap-2 py-[0.1rem] px-[1rem] outline-none
                    rounded-[20px] text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease`}>Dashboard</Link> 
                    
                    <Link href={`/crear-videos`} onClick={handleNavbarPhone} className={`${pathname === ('/crear-videos') ? "text-t-red" : "dark:text-white text-slate-600 " } my-auto text-xl w-full flex gap-2 py-[0.1rem] px-[1rem] outline-none
                    rounded-[20px] text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease`}>Crear videos</Link>
        
                    
                    <Link href={`/crear-cositas`} onClick={handleNavbarPhone} className={`${pathname === ('/crear-cositas') ? "text-t-red" : "dark:text-white text-slate-600 " } my-auto text-xl w-full flex gap-2 py-[0.1rem] px-[1rem] outline-none
                    rounded-[20px] text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease`}>Crear cositas</Link>
                    </>
                    }
                    
                    {
                      currentUserR ?
                    <Link href={`/crear-anuncio`} onClick={handleNavbarPhone} className={`${pathname === ('/crear-anuncio') ? "text-t-red" : "dark:text-white text-slate-600 " } my-auto text-xl w-full flex gap-2 py-[0.1rem] px-[1rem] outline-none
                    rounded-[20px] text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease`}>Crear anuncio</Link> :
                    <Link href={`/sign-in`} onClick={handleNavbarPhone} className={` ${pathname === ('/crear-anuncio') ? "text-t-red" : "dark:text-white text-slate-600 "} my-auto text-xl w-full flex gap-2  py-[0.1rem] px-[1rem] outline-none
                    rounded-[20px] text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease`}>Crear anuncio</Link>
                    }
                    
                    { theme === "dark" ?
            <div className="flex gap-2 dark:text-white text-slate-600 py-[0.1rem] px-[1rem] hover:scale-[1.05] transition-all scale-[1] ease">
                <p className="my-auto text-[16px]"></p>
            <button onClick={handleChangeTheme} className="rounded-full transition-all duration-300 ease">    
                 <MdNightlight className="text-t-red w-6 h-6 transition-all duration-300 ease"/> 
            </button>    
            </div>
            :
            <div className="flex gap-2 dark:text-white text-slate-600 py-[0.1rem] px-[1rem] hover:scale-[1.05] transition-all scale-[1] ease">
                <p className="my-auto text-[16px]"></p>
            <button onClick={handleChangeTheme} className="rounded-full transition-all duration-300 ease">
                 <MdOutlineLightMode className="text-t-red w-6 h-6 transition-all duration-300 ease"/>
            </button>  
            </div>
            }

                    </ul>
    
            {
              currentUserR && <SignOutButton handleNavbarPhone={handleNavbarPhone}/>  
            }
                    
                </div>
                    </motion.div> : ""
        }

    </header>

        {/* <ModalConfirmLogin showActive={showActive} modalIsOpen={modalIsOpen} onClose={closeModal}/> */}
    </div>
  )
}

export default Navbar;