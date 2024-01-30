"use client"

import Guia4 from "./Guia4"
import { useState } from "react"

const Guia22 = () => {

  const [ showYes, setShowYes ] = useState(false)
  const [ showNo, setShowNo ] = useState(false)
  return (
    <div className="mx-auto pl-4 sm:mt-60 sm:mx-0">
      <div className={`${ showYes? "hidden" : "" }`}>
        
      <div className="">
        <h3 className="text-[16px]">Paso 222</h3>
        <h1 className="font-bold text-4xl w-[280px] sm:w-full">
          Elegiste Backend Developer
        </h1>
      </div>

      <div className="mt-10 mr-10 ">
        <h1 className="text-xl sm:w-full font-light">
          Las tecnologías que debes saber son{" "}
          <strong className="font-bold">Node.js</strong>{" "}
          para el back, 
          <strong className="font-bold"> Sequelize o Prisma</strong> de ORM y para la base de datos 
          <strong className="font-bold"> Postgres.</strong>
        </h1>

        <div className="grid sm:grid-cols-3 gap-4">
          <div className="mt-10 text-[16px] flex flex-col items-center rounded-md p-2 border-2 border-[#6f01ffd4] bg-violet-200 max-w-[280px]">
            <h1>
              De <strong>Node.js</strong> :<h3 className="text-[12px]"></h3>
            </h1>

            <ul className="mt-4">
              <li>a. React router</li>
              <li>b. Hooks</li>
              <li>c. Fetch o axios y sus metodos</li>
              <li>D. Crear y validar formularios</li>
            </ul>
          </div>

          <div className="mt-4 sm:mt-10 text-[16px] flex flex-col items-center rounded-md p-2 border-2 border-[#6f01ffd4] bg-violet-200 max-w-[280px]">
            <h1>
              De <strong>Sequelize</strong> o <strong>Prisma</strong>:{" "}
            </h1>
            <ul className="mt-4">
              <li>a. Next Router</li>
              <li>b. Hooks</li>
              <li>c. Fetch o axios y sus metodos</li>
              <li>D. Crear y validar formularios</li>
            </ul>
          </div>

          <div className="mt-4 sm:mt-10 text-[16px] flex flex-col items-center rounded-md p-2 border-2 border-[#6f01ffd4] bg-violet-200 max-w-[280px]">
            <h1>
              De <strong>Postgres</strong>:{" "}
            </h1>
            <ul className="mt-4">
              <li>a. Next Router</li>
              <li>b. Hooks</li>
              <li>c. Fetch o axios y sus metodos</li>
              <li>D. Crear y validar formularios</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 flex items-center gap-2">
        <h1 className="font-bold text-2xl">
            ¿Dominas lo mencionado?{" "}
        </h1>

        <div className="flex pr-2 gap-2">
          <div
            className="  rounded-md my-auto py-2 px-4 border-b-2 border-[#6f01ffd4] outline-none
            font-bold cursor-pointer hover:bg-[#6f01ffd4] hover:text-white hover:scale-[1.05] active:scale-[0.95] transition-all  ease"
            onClick={() => setShowYes(!showYes)}
            >
            <h1 className="text-2xl ">Si</h1>
          </div>
          <div
            className="  rounded-md my-auto py-2 px-4 border-b-2 border-[#6f01ffd4] outline-none
            font-bold cursor-pointer hover:bg-[#6f01ffd4] hover:text-white hover:scale-[1.05] active:scale-[0.95] transition-all  ease"
            onClick={() => setShowNo(!showNo)}
          >
            <h1 className="text-2xl ">No</h1>
          </div>
        </div>
      </div>
      </div>

      {
      showYes ? <Guia4 /> : ""
      }

    </div>
  )
}

export default Guia22