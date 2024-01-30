import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Poppins } from "next/font/google";
import HEslogan from "./HEslogan";

import "./stylePortada.css";

const dancing = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const HPortada = () => {
  return (
    <div className="flex border-none">
      <div className="min-h-screen relative w-screen overflow-hidden shadow-lg shadow-slate-400 border-none flex flex-col gap-6 text-white items-center">
        
        <div className="flex justify-center h-[50%]">
          <div className="flex flex-col mt-[120px]">
            <img
              src="/assets/phlogo.jpeg"
              alt=""
              className="z-[50] mx-auto shadow-lg rounded-[20px] h-[100px] sm:h-[200px] w-[280px] sm:w-[600px]"
            />
            <div className="z-30 w-full flex flex-col items-center justify-center mt-6">
              <div className={dancing.className}>
                <div className=" wrapper flex flex-col sm:flex-row gap-0 sm:gap-[10px]">
                  {/* <div style={{ textShadow: `2px 2px 4px rgba(0, 0, 0, 0.5)` }} className=" static-text px-10 mx-auto sm:w-[90%] lg:w-[70%] 2xl:w-[60%] font-extrabold text-[28px] sm:text-[36px] 2xl:text-[48px] leading-[28px] lg:leading-[36px] 2xl:leading-[40px] "></div> */}
                  <ul
                    style={{ textShadow: `2px 2px 4px rgba(0, 0, 0, 0.5)` }}
                    className="dynamic-txts flex flex-col w-full items-center mx-auto text-white font-extrabold text-[28px] sm:text-[36px] 2xl:text-[52px] leading-[28px] lg:leading-[36px] 2xl:leading-[40px] "
                  >
                    <li>
                      <span className=""> La web más completa</span>
                    </li>
                    <li>
                      <span> Servicios presenciales</span>
                    </li>
                    <li>
                      <span> Contenido virtual</span>
                    </li>
                    <li>
                      <span> Variedad y exclusividad</span>
                    </li>
                  </ul>
                </div>
              </div>

              <strong className="z-30 mt-6 font-normal flex items-center mx-auto justify-center px-10 text-center sm:w-[80%] lg:w-[70%] 2xl:w-[60%] text-[16px] sm:text-[22px] 2xl:text-[20px] leading-[28px] lg:leading-[36px] 2xl:leading-[32px] ">
                <h1 className={dancing.className}>
                  Genera más ingresos a través de servicios adicionales y
                  exclusivos, contenido virtual o presencial, tú decides.
                </h1>
              </strong>
            </div>

            <Link
              href={"/"}
              className="font-medium mx-auto text-slate-100 lg:text-xl  hover:shadow-md hover:shadow-orange-400 transition-all duration-200 ease-linear flex z-30 my-8 w-fit text-center px-4 py-2 rounded-full bg-orange-500 gap-2"
            >
              <nav>Ver servicios</nav>
              <FaArrowRight className="my-auto lg:text-xl" />
            </Link>

            <Link
          href={"https://t.me/+kRPGKNx2eNZlNmQ5"}
          target="_blank"
          className="z-30 shadow-2xl hover:shadow-none transition-all duration-300 ease-linear py-1 rounded absolute top-[55px] right-[2px] mt-2 font-normal flex items-center justify-center px-10 text-center w-fit text-[16px] sm:text-[22px] 2xl:text-[20px] leading-[18px] lg:leading-[36px] 2xl:leading-[32px] "
        >
          <h1 className={dancing.className}>
            Únete al club! Novedades y sorteos hot
          </h1>
          <img src="/assets/logotelegram.png" alt="" className="h-8 w-8 ml-2" />
        </Link>


          </div>
        </div>

        <img
          src="/assets/bannerfulla.jpg"
          alt=""
          className="opacity-90 z-10 absolute top-0 right-0 left-0 
                      m-auto bg-no-repeat object-top object-cover w-full h-full"
        />

        {/* <HEslogan />

<div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 mx-1 sm:mx-10 lg:w-[60%] mt-10 mb-20">
  <div className="rounded-[20px] border-2 border-bor-red p-4 shadow dark:shadow-orange-500 shadow-black dark:bg-transparent bg-dark-d dark:text-slate-600 text-slate-100">
    <h1 className="font-bold text-2xl">Servicio presencial</h1>
    <h2 className="text-xl">Elige a la mejor escort o kinesióloga para pasar momentos agradables.</h2>
  </div>

  <div className="rounded-[20px] border-2 border-bor-red p-4 shadow dark:shadow-orange-500 shadow-black dark:bg-transparent bg-dark-d dark:text-slate-600 text-slate-100">
    <h1 className="font-bold text-2xl">Servicio virtual</h1>
    <h2 className="text-xl">Elige el mejor contenido hot que deseas ver: fotos de pies, videollamadas, chats eróticos, consejos, entre otros.</h2>
  </div>

  <div className="rounded-[20px] border-2 border-bor-red p-4 shadow dark:shadow-orange-500 shadow-black dark:bg-transparent bg-dark-d dark:text-slate-600 text-slate-100">
    <h1 className="font-bold text-2xl">Servicio exclusivo</h1>
    <h2 className="text-xl">Consulta los servicios exclusivos que tenemos para ti: trío, fetiches, anal, oral, natural, eyaculación corporal, entre otros.</h2>
  </div>

  <div className="rounded-[20px] border-2 border-bor-red p-4 shadow dark:shadow-orange-500 shadow-black dark:bg-transparent bg-dark-d dark:text-slate-600 text-slate-100">
    <h1 className="font-bold text-2xl">Atención</h1>
    <h2 className="text-xl">Selecciona un servicio normal o específico, llega a un acuerdo en la tarifa y agenda una cita.</h2>
  </div>

  <div className="rounded-[20px] border-2 border-bor-red p-4 shadow dark:shadow-orange-500 shadow-black dark:bg-transparent bg-dark-d dark:text-slate-600 text-slate-100">
    <h1 className="font-bold text-2xl">Nacionalidades</h1>
    <h2 className="text-xl">Encontrarás hermosas escorts y kinesiólogas de diferentes nacionalidades.</h2>
  </div>

  <div className="rounded-[20px] border-2 border-bor-red p-4 shadow dark:shadow-orange-500 shadow-black dark:bg-transparent bg-dark-d dark:text-slate-600 text-slate-100">
    <h1 className="font-bold text-2xl">Idioma</h1>
    <h2 className="text-xl">En nuestra plataforma encontrarás bellas escorts que te atenderán en tu propio idioma.</h2>
  </div>

</div> */}
        {/* <div className="absolute opacity-10 lg:opacity-20 z-[800] top-0 right-0 left-0 m-auto bg-black min-h-screen w-screen"></div> */}
      </div>
    </div>
  );
};

export default HPortada;
