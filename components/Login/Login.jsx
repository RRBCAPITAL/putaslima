"use client"

import style from "./Login.module.css"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { HiFingerPrint, HiAtSymbol } from "react-icons/hi";

const Login = () => {

    const [show, setShow] = useState(false)

    // const handleGoogleSignin = async () => {

    //     await signIn("google", { callbackUrl: "http://localhost:3000"})
    // }

  return (
    <div className='z-20 flex flex-col w-screen items-center justify-center min-h-screen'>
     <div className="mx-auto rounded bg-slate-50 w-11/12 h-full sm:w-3/5 sm:h-3/4 grid lg:grid-cols-2">
      <div className={style.containImg}>
        <div className={style.detailImg}></div>
        <Link href={'/'} className="hidden lg:block bg-[#26074e] hover:bg-[#370c70] hover:border-2 hover:border-[#26074e]
        text-white rounded-[10px] z-50 p-[0.5rem] my-2 w-[180px] text-center mx-auto text-xl font-bold">Volver al inicio</Link>
      </div>
      <div className="right flex flex-col justify-evenly bg-gray-50">
        <div className="text-center py-10">
            <section className="w-3/4 mx-auto flex flex-col gap-10">
                <div className="title">
                    <h1 className="text-gray-800 text-4xl font-bold py-4">Mr Developer</h1>
                </div>
                <form action="" className="flex flex-col gap-5">
                    <div className={style.inputGroup}>
                        <input
                        type="email"
                        name="email"
                        placeholder="correo"
                        className={style.inputText}
                        />
                        <span className="icon flex items-center bg-slate-100 px-4">
                            <HiAtSymbol size={25} />
                        </span>
                    </div>
                    <div className={style.inputGroup}>
                        <input
                        type={ show ? "text" : "password"}
                        name="password"
                        placeholder="contraseña"
                        className={style.inputText}
                        />
                        <span className="icon flex items-center bg-slate-100 px-4"
                            onClick={() => setShow(!show)}
                        >
                            <HiFingerPrint size={25}/>
                        </span>
                    </div>
                    <div >
                        <button type="submit" className={style.inputButton}>
                            Iniciar sesión
                        </button>
                    </div>
                    <div >
                        <button type="button" className={style.customButton}
                        >
                            Iniciar Sesión Con Google <Image src="/assets/logogoogle.png" alt="google" width={20} height={20}/>
                        </button>
                    </div>
                    <div >
                        <button type="button" className={style.customButton}>
                            Iniciar Sesión Con Github <Image src="/assets/logogithub.png" alt="github" width={20} height={20}/>
                        </button>
                    </div>
                </form>

                    <p className="text-center text-gray-400">
                    ¿No tienes una cuenta? <Link href={'/register'} className="text-blue-700">Regístrate</Link>
                    </p>

            </section>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Login