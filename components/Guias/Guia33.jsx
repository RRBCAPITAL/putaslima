"use client"

import { useState } from "react";
import ReactPage from "./TechFronted/ReactPage";
import Link from "next/link";
import MConfirmTest from "../Modales/MConfirmTest";

const Guia33 = ({ selectDataFront }) => {

  console.log(selectDataFront);

  return (
    <div className="z-1 w-full flex mx-2 my-auto bg-back-dark dark:bg-white dark:text-t-dark text-white sm:py-40 sm:items-center">
      <div className={``}>
      <div className="">  
        <h3 className="text-[16px]">Paso 2: Fronted Developer</h3>
        <h1 className="font-bold text-4xl w-[280px] sm:w-full">
          Elige el framework o librería que más domines.
        </h1>
      </div>

      <div className="mt-10">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* <Link href={`/guia/${"react"}`}
          className="mt-2 text-[16px] flex flex-col items-center rounded-md p-2 font-mono text-slate-600 bg-[#ced5ff]
          hover:text-white hover:bg-[#373f6d] border-2 border-[#6f01ffd4] max-w-[280px] transition-all ease duration-300  hover:scale-110"
              
          > */}
            <Link href={`/guia/${'react'}`} onClick={() => {
              return {
                ...selectDataFront, Tech: "React"
              }
            }} className="mt-2 text-[16px] flex flex-col items-center rounded-md p-2 font-mono text-slate-600 bg-[#ced5ff]
          hover:text-white hover:bg-[#373f6d] border-2 border-[#6f01ffd4] max-w-[280px] transition-all ease duration-300  hover:scale-110"
          >
               
              <h1 className="text-4xl font-bold ">React</h1>
              <img src="https://res.cloudinary.com/dvaiww9ri/image/upload/v1694015218/react_irujcy.png" alt="react" className="h-[10rem] w-[10rem] p-4" />
            </Link>
            
          {/* </Link> */}
          <Link href={`/guia/${"vue"}`}
          className="mt-2 text-[16px] flex flex-col items-center rounded-md p-2 font-mono text-slate-600 bg-[#ceffe0]
          hover:text-white hover:bg-[#366547] border-2 border-[#6f01ffd4] max-w-[280px] transition-all ease duration-300 hover:scale-110"
              
          > 
            <h1 className="text-4xl font-bold">Vue</h1>
            <img src="https://res.cloudinary.com/dvaiww9ri/image/upload/v1694449317/vue_uoymzn.png" alt="vue" className="h-[10rem] w-[10rem] p-4" />
          </Link>
          <Link href={`/guia/${"angular"}`}
          className="mt-2 text-[16px] flex flex-col items-center rounded-md p-2 font-mono text-slate-600 bg-[#ffcece]
          hover:text-white hover:bg-[#703232] border-2 border-[#6f01ffd4] max-w-[280px] transition-all ease duration-300  hover:scale-110"
              
          >
            <h1 className="text-4xl font-bold">Angular</h1>
            <img src="https://res.cloudinary.com/dvaiww9ri/image/upload/v1694015206/angular_tj4qx6.png" alt="angular" className="h-[10rem] w-[10rem]" />
          </Link>
          <Link href={`/guia/${"svelte"}`}
          className="mt-2 text-[16px] flex flex-col items-center rounded-md p-2 font-mono text-slate-600 bg-[#ffedce]
          hover:text-white hover:bg-[#673c21] border-2 border-[#6f01ffd4] max-w-[280px] transition-all ease duration-300  hover:scale-110"
              
          >
            <h1 className="text-4xl font-bold">Svelte</h1>
            <img src="https://res.cloudinary.com/dvaiww9ri/image/upload/v1694449316/svelte_tuc5a0.png" alt="svelte" className="h-[10rem] w-[10rem] p-4" />
          </Link>
          
        </div>
      </div>

      </div>

    </div>
  );
};

export default Guia33;
