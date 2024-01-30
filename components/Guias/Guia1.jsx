"use client"

import React, { useState } from "react";
import Guia2 from "./Guia2";
import Guia3 from "./Guia3";
import { RiArrowGoBackFill } from 'react-icons/ri'
import Guia22 from "./Guia22";
import Guia33 from "./Guia33";
import MConfirmTest from "../Modales/MConfirmTest";

const Guia1 = () => {

  const [ paso2, setPaso2 ] = useState(false)
  const [ paso3, setPaso3 ] = useState(false)
  const [ selectData, setSelectData ] = useState({
    Developer: "",
    Tech: "",
    Requisitos: false
  })

  return (
    <div className="rounded-md w-full sm:h-screen flex px-10 bg-back-dark dark:bg-white text-black py-10 sm:py-40 sm:pt-0 sm:items-center">
      
      
      <div className={`mx-auto sm:mx-0 ${ (paso2 || paso3) && "hidden"}`}>
        <div className="">
          <h3 className="text-[16px] text-white dark:text-t-dark">Paso 1</h3>
          <h1 className="font-bold text-3xl sm:text-4xl w-[280px] sm:w-full text-white dark:text-t-dark">Quiero unirme a un equipo como:</h1>
        </div>
        <div className="mt-10 w-[280px] rounded-md p-4 bg-[#6f01ff] text-white border-none outline-none
                        text-[16px] font-bold cursor-pointer hover:bg-[#6f01ffd4] hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease"
                          onClick={() => (setPaso2(true), setSelectData((prev) => {
                            return {
                              ...prev,
                              Developer: "Fronted Developer"
                            }
                          } ))}
                        >
          
          <h1 className=" text-2xl">Fronted Developer</h1>
        </div>
        <div className="mt-4 w-[280px] rounded-md p-4 bg-[#6f01ff] text-white border-none outline-none
                        text-[16px] font-bold cursor-pointer hover:bg-[#6f01ffd4] hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease"
                        onClick={() => (setPaso3(true), setSelectData((prev) => {
                          return {
                            ...prev,
                            Developer: "Backend Developer"
                          }
                        } ))}
                        >
          <h1 className="text-2xl">Backend Developer</h1>
        </div>
      </div>



      {
        paso3 ? <Guia22 selectDataBack={selectData} /> : ""     
      }
      {/* <Guia22 /> */}

      {
        paso2 ? <Guia33 selectDataFront={selectData} /> : ""     
      }

    </div>
  );
};

export default Guia1;
