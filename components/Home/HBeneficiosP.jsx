import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Quicksand } from 'next/font/google'

const quick = Quicksand({ subsets: ['latin'] })

const HBeneficiosP = () => {
  return (
    <div className="overflow-hidden flex border-none"> 
      <div className={quick.className}>
      <div className="min-h-fit border-none py-20 px-6 sm:px-10 lg:px-[160px] w-screen overflow-hidden grid sm:grid-cols-2 gap-4 bg-[#FFFFFF] dark:bg-dark-l justify-center">
        {/* <h1 className="border-b-4 pb-4 border-bor-red z-30 w-[30%] font-extrabold mx-20 text-[16px] text-center sm:text-[40px] text-slate-600 dark:text-white leading-[45px]">
          Dicen que la felicidad no tiene precio, pero puedes venir a vernos.
        </h1> */}

<section className="px-4 py-4 h-full border-l-4 border-bor-red shadow-custom2 shadow-violet-500 dark:shadow-black bg-transparent dark:bg-dark-d text-slate-600 dark:text-slate-100 rounded-[10px] rounded-r-[60px]">
            <div className="flex gap-2">
            <h1 className="font-extrabold text-2xl sm:text-3xl ml-4 my-auto">Servicio presencial</h1>
            <img width="50" height="50" src="https://img.icons8.com/cotton/64/panties--v1.png" alt="panties--v1" className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px]"/>
            </div>
            <h2 className="text-xl mx-4 mt-4">Selecciona a la escort o kinesióloga ideal para vivir momentos inolvidables.
</h2>
        </section>

        <section className="px-4 py-4 h-full border-r-4 border-bor-red  shadow-custom2 shadow-violet-500 dark:shadow-black bg-transparent dark:bg-dark-d text-slate-600 dark:text-slate-100 rounded-[10px]  rounded-l-[60px]">
            <div className="flex gap-2">
            <h1 className="font-extrabold text-2xl sm:text-3xl ml-4 my-auto">Servicio virtual</h1>
            <img width="50" height="50" src="https://img.icons8.com/cotton/64/sexy-woman.png" alt="sexy-woman" className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px]"/>
            </div>
            <h2 className="text-xl mx-4 mt-4">Explora el contenido más sensual que desees disfrutar: desde fotos de pies hasta videollamadas, chat erótico, consejos y mucho más. Tú eliges, nosotros lo hacemos posible.</h2>
        </section>

        <section className="px-4 py-4 h-full border-l-4 border-bor-red  shadow-custom2 shadow-violet-500 dark:shadow-black bg-transparent dark:bg-dark-d text-slate-600 dark:text-slate-100 rounded-[10px]  rounded-r-[60px]">
            <div className="flex gap-2">
            <h1 className="font-extrabold text-2xl sm:text-3xl ml-4 my-auto">Servicio Exclusivo</h1>
            <img width="50" height="50" src="https://img.icons8.com/cotton/64/sexy-body.png" alt="sexy-body" className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px]"/>
            </div>
            <h2 className="text-xl mx-4 mt-4">Descubre los servicios exclusivos que ofrecemos: tríos, fetiches, anal, oral natural, eyaculación corporal y muchos más. Explora tus deseos y déjanos hacerlos realidad.</h2>
        </section>

        <section className="px-4 py-4 h-full border-r-4 border-bor-red  shadow-custom2 shadow-violet-500 dark:shadow-black bg-transparent dark:bg-dark-d text-slate-600 dark:text-slate-100 rounded-[10px]  rounded-l-[60px]">
            <div className="flex flex-col lg:flex-row gap-2">
            <h1 className="font-extrabold text-2xl sm:text-3xl ml-4 my-auto">Nacionalidades</h1>
            <images className='flex mx-4 lg:mx-0'>
                  <img width="40" height="16" src="https://img.icons8.com/color/48/peru.png" alt="peru" className="h-fit my-auto"/>
                  <img width="40" height="16" src="https://img.icons8.com/color/48/colombia.png" alt="colombia" className="h-fit my-auto"/>
                  <img width="40" height="16" src="https://img.icons8.com/color/48/argentina.png" alt="argentina" className="h-fit my-auto"/>
            </images>
            </div>
            <h2 className="text-xl mx-4 mt-4">En <strong>Papayahub Perú</strong>, encontrarás hermosas escorts y kinesiólogas de diferentes países, tales como Colombia, Venezuela, Ecuador, Argentina y Chile.</h2>
        </section>

        <section className="px-4 py-4 h-full border-l-4 border-bor-red  shadow-custom2 shadow-violet-500 dark:shadow-black bg-transparent dark:bg-dark-d text-slate-600 dark:text-slate-100 rounded-[10px]  rounded-r-[60px]">
            <div className="flex gap-2 mx-4">
            <h1 className="font-extrabold text-2xl sm:text-3xl text-center mt-2">Atención</h1>
            <img width="40" height="40" src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/external-hotel-vacation-vitaliy-gorbachev-blue-vitaly-gorbachev.png" alt="external-hotel-vacation-vitaliy-gorbachev-blue-vitaly-gorbachev" className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px]"/>
            </div>
            <h2 className="text-xl mx-4 mt-4">Tendrás la libertad de elegir cómo deseas ser atendido. Ofrecemos servicios de atención en hoteles de tu elección, servicio a domicilio tipo delivery, así como atención en departamentos privados.</h2>
        </section>

        <section className="px-4 py-4 h-full border-r-4 border-bor-red  shadow-custom2 shadow-violet-500 dark:shadow-black bg-transparent dark:bg-dark-d text-slate-600 dark:text-slate-100 rounded-[10px]  rounded-l-[60px]">
            <div className="flex gap-1 mx-4">
            <h1 className="font-extrabold text-2xl sm:text-3xl  text-center my-auto">Idioma</h1>
            <img width="64" height="64" src="https://img.icons8.com/nolan/64/language.png" alt="language" className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px]"/>
            </div>
            <h2 className="text-xl mx-4 mt-4">En nuestra plataforma encontrarás bellas escorts que te atenderán en tu propio idioma.</h2>
        </section>

        
      </div>
      </div>
    </div>
  );
};

export default HBeneficiosP;
