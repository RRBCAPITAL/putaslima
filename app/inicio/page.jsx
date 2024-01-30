import HEslogan from "@/components/Home/HEslogan";
import HBeneficiosP from "@/components/Home/HBeneficiosP";
import HPortada from "@/components/Home/HPortada";
import LogoGigante from "@/components/Home/LogoGigante";
import Slide from "@/components/Home/SlidesHome/Slide";
import Link from "next/link";
import { FaUserCheck } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { Quicksand } from "next/font/google";

const quick = Quicksand({ subsets: ["latin"] });

const InicioPage = () => {
  return (
    <div className={quick.className}>
      <div className="overflow-hidden bg-white dark:bg-dark-l flex flex-col gap-0 border-none">
        <HPortada />

        <HBeneficiosP />

        {/* <Slide /> */}

        <div className="flex">
          <containerall className="flex flex-col items-center  gap-4 min-h-screen w-screen py-20 dark:bg-dark-l bg-white">
            <div className="flex flex-col gap-2 items-center justify-center mb-6">
              {/* <h1 className="my-auto text-red-600 font-bold bg-red-100 p-2 rounded-[20px]">DESCUENTOS por lanzamiento</h1> */}
              <h1 className="mx-auto w-[80%] sm:w-[85%] lg:w-fit text-center dark:text-slate-200 text-slate-600 text-3xl sm:text-5xl font-bold border-b-4 pb-2 border-bor-red">
                LOS MEJORES PLANES PARA TU ANUNCIO
              </h1>
              <h2 className="mx-auto w-[80%] sm:w-[85%] lg:w-[60%] mt-4 text-2xl sm:text-2xl text-slate-500 dark:text-white text-left sm:text-center">
                En PapayaHub, pensamos en ti. Por eso, creamos planes
                superpersonalizados y exclusivos adaptados específicamente a tus
                necesidades. Elige tu plan y descubre una experiencia única con
                nosotros.
              </h2>
              {/* <h2 className='text-xl text-red-500 font-bold'>Por lanzamiento: 70% de descuento en todos los planes!</h2> */}
            </div>

            <containeniveles className="grid sm:grid-cols-2 lg:grid-cols-3 mx-2 lg:mx-10 items-center gap-2 lg:gap-4 justify-center">
              <containcard
                className={`shadow-custom1 border-slate-600 border-[10px] w-[280px] sm:w-[360px] rounded-[28px] relative transition-opacity bg-opacity-100 duration-[3s] ease`}
              >
                <div className="flex flex-col gap-2 px-5 py-2 bg-slate-200 shadow-2xl rounded-t-[20px]">
                  {/* <activo className='flex gap-2 items-center justify-center'>
<nav className="text-2xl sm:text-3xl font-extrabold text-slate-700">SIMPLE</nav>
<img width="64" height="64" src="https://img.icons8.com/cute-clipart/64/ok.png" alt="ok"/>
</activo> */}
                  <div className="flex flex-col gap-1">
                    <p className="text-sm mx-4">Modo</p>
                    <nav
                      className={`text-2xl rounded-[20px] text-center font-extrabold text-slate-200 bg-slate-700 p-2 mx-4`}
                    >
                      SIMPLE
                    </nav>
                  </div>

                  <beneficios className="shadow p-2 my-2 rounded w-full">
                    {/* <linea className='flex gap-1'>
<img width="24" height="24" src="https://img.icons8.com/emoji/48/check-mark-button-emoji.png" alt="check-mark-button-emoji"/>
  <nav className="text-center text-sm font-bold text-slate-700 my-auto">Chica económica.</nav>
</linea>
<linea className='flex gap-1'>
<img width="22" height="22" src="https://img.icons8.com/fluency/48/cancel-2.png" alt="cancel-2"/>
  <nav className="text-center text-sm font-bold text-slate-700 mt-1">Visibilidad básica.</nav>
</linea>
<linea className='flex gap-1'>
<img width="22" height="22" src="https://img.icons8.com/fluency/48/cancel-2.png" alt="cancel-2"/>
  <nav className="text-center text-sm font-bold text-slate-700 mt-1">Posicionamiento bajo.</nav>
</linea> */}
                    <h1>Visibilidad estándar.</h1>
                    <h1>Posicionamiento bajo.</h1>
                    <h1>El más económico para publicar.</h1>
                  </beneficios>
                </div>

                <card>
                  <img
                    src="/assets/modosimple.jpg"
                    alt="Imagen de la anfitriona"
                    className={` object-cover border-[10px]`}
                  />
                </card>

                <precio className="flex flex-col py-2 items-center bg-slate-600 border-4 rounded-b-[14px]  border-slate-500  justify-center">
                  {/* <div>
<div className="flex gap-1 items-center justify-center">
  <preciotachado className="text-center relative">
    <p className="text-[18px] text-slate-200 relative z-10 font-light">S/120.00</p>
    <div className="absolute w-full h-0.5 bg-slate-200 bottom-1/2 transform translate-y-1/2"></div>
  </preciotachado>

  <h1 className="text-red-600 font-bold bg-red-100 p-2 rounded-[20px]">AHORRA 70%</h1>
</div>
</div>
<h1 className='text-4xl font-bold text-center rounded-b-[20px] text-slate-200 p-2 '>S/36.00<strong className="text-sm font-normal">(mes)</strong></h1> */}
                  <div className="flex gap-1 items-center justify-center">
                    <preciotachado className="text-center relative">
                      <p className="text-[18px] text-slate-200 relative z-10 font-light">
                        S/120.00
                      </p>
                      <div className="absolute w-full h-0.5 bg-slate-200 bottom-1/2 transform translate-y-1/2"></div>
                    </preciotachado>

                    <h1 className="text-blue-600 font-bold bg-blue-100 p-2 rounded-[20px]">
                      AHORRA 100%
                    </h1>
                  </div>
                  <h1 className="text-4xl font-bold text-center rounded-b-[20px] text-slate-200 p-2 ">
                    Gratis
                  </h1>
                </precio>
              </containcard>

              <containcard
                className={`shadow-custom1 border-blue-600 border-[10px] w-[280px] sm:w-[360px] rounded-[28px] relative transition-opacity bg-opacity-100 duration-[3s] ease`}
              >
                <div className="flex flex-col gap-2 px-5 py-2 bg-slate-200 shadow-2xl rounded-t-[20px]">
                  {/* <activo className='flex gap-2 items-center justify-center'>
<nav className="text-2xl sm:text-3xl font-extrabold text-slate-700">MOTOMAMI</nav>
<img width="64" height="64" src="https://img.icons8.com/cute-clipart/64/ok.png" alt="ok"/>
</activo> */}
                  <div className="flex flex-col gap-1">
                    <p className="text-sm mx-4">Modo</p>
                    <nav
                      className={`text-2xl rounded-[20px] text-center font-extrabold text-blue-200 bg-blue-700 p-2 mx-4`}
                    >
                      MOTOMAMI
                    </nav>
                  </div>
                  <beneficios className="shadow p-2 rounded w-full">
                    <h1>Visibilidad destacada.</h1>
                    <h1>Posicionamiento intermedio.</h1>
                    <h1>Más cantidad de interesados.</h1>
                    <h1>Publicidad en nuestras redes.</h1>
                  </beneficios>
                </div>

                <card>
                  <img
                    src="/assets/modomotomami.jpg"
                    alt="Imagen de la anfitriona"
                    className={` object-fill border-[10px] w-[500px]`}
                  />
                </card>

                <precio className="flex flex-col py-2 items-center bg-blue-700 border-4 border-blue-500 rounded-b-[14px]  justify-center">
                  <div>
                    <div className="flex gap-1 items-center justify-center">
                      <preciotachado className="text-center relative">
                        <p className="text-[18px] text-slate-200 relative z-10 font-light">
                          S/160.00
                        </p>
                        <div className="absolute w-full h-0.5 bg-slate-200 bottom-1/2 transform translate-y-1/2"></div>
                      </preciotachado>

                      <h1 className="text-red-600 font-bold bg-red-100 p-2 rounded-[20px]">
                        AHORRA 70%
                      </h1>
                    </div>
                  </div>
                  <h1 className="text-4xl font-bold text-center rounded-b-[20px] text-slate-200 p-2 ">
                    S/48.00
                    <strong className="text-sm font-normal">(mes)</strong>
                  </h1>
                </precio>
              </containcard>

              <containcard
                className={`shadow-custom1 border-bor-red border-[10px] w-[280px] sm:w-[360px] rounded-[28px] relative transition-opacity bg-opacity-100 duration-[3s] ease`}
              >
                <div className="flex flex-col gap-2 px-5 py-2 bg-slate-200 shadow-2xl rounded-t-[20px]">
                  
                  <div className="flex flex-col gap-1">
                    <p className="text-sm mx-4">Modo</p>
                    <nav
                      className={`text-2xl rounded-[20px] text-center font-extrabold text-yellow-100 bg-back-red p-2 mx-4`}
                    >
                      BICHOTA
                    </nav>
                  </div>

                  <beneficios className="shadow p-2 rounded w-full">
                    <h1>Máxima exposición.</h1>
                    <h1>Posicionamiento en primera fila.</h1>
                    <h1>Mayor cantidad de interesados.</h1>
                    <h1>Publicidad en nuestras redes.</h1>
                  </beneficios>
                </div>

                <card>
                  <img
                    src="/assets/modobichota.jpg"
                    alt="Imagen de la anfitriona"
                    className={`object-fill border-[10px]`}
                  />
                </card>

                <precio className="flex flex-col py-2 items-center bg-back-red border-4 border-yellow-100 rounded-b-[14px]  justify-center">
                  <div>
                    <div className="flex gap-1 items-center justify-center">
                      <preciotachado className="text-center relative">
                        <p className="text-[18px] text-slate-200 relative z-10 font-light">
                          S/220.00
                        </p>
                        <div className="absolute w-full h-0.5 bg-slate-200 bottom-1/2 transform translate-y-1/2"></div>
                      </preciotachado>

                      <h1 className="text-red-600 font-bold bg-red-100 p-2 rounded-[20px]">
                        AHORRA 70%
                      </h1>
                    </div>
                  </div>
                  <h1 className="text-4xl font-bold text-center rounded-b-[20px] text-yellow-50 p-2 ">
                    S/66.00
                    <strong className="text-sm font-normal">(mes)</strong>
                  </h1>
                </precio>
              </containcard>
            </containeniveles>

            <div className="mx-auto mt-6 flex flex-col gap-4 dark:text-slate-200 text-slate-600">
              {/* <h1 className='text-center  text-3xl sm:text-5xl font-bold '>Más fácil, imposible!</h1> */}
              <h2 className="w-[80%] sm:w-full text-center text-2xl sm:text-3xl mx-auto">
                Paga con BCP, INTERBANK o YAPE.
              </h2>
              {/* <h2>Envíanos un WhatsApp indicando el nivel de suscripción, código ID, nombre y activaremos tu perfil.</h2> */}
            </div>

            {/* <buttons className='mx-auto w-[80%] sm:w-[85%] lg:w-[50%] flex flex-col items-center justify-center sm:flex-row gap-4 mt-2'>
<Link href='/activar-anuncio' className="w-full lg:w-fit px-6 text-center py-4 rounded-[50px] duration-200 transition-all ease-linear bg-violet-500 hover:bg-violet-600 text-violet-100 shadow-p1 hover:shadow text-xl font-bold">Métodos de pago <RiSecurePaymentFill  className="h-6 w-6 inline-block mb-1"/></Link>
</buttons> */}

            {/* <buttons className='mx-auto w-[80%] sm:w-[85%] lg:w-[50%] flex flex-col items-center justify-center sm:flex-row gap-4 mt-6 mb-2'>
      <Link href='/crear-anuncio' className="w-full lg:w-fit px-6 text-center py-4 rounded-[50px] duration-200 transition-all ease-linear bg-back-red hover:bg-[#ff9f51] text-yellow-100 shadow-p4 hover:shadow text-xl font-bold">Crea tu anuncio aquí <FaLongArrowAltRight className='w-[26px] h-[26px] inline-block'/></Link>
    </buttons> */}

            <buttons className=" mx-auto w-[80%] sm:w-[85%] lg:w-[50%] flex flex-col items-center justify-center sm:flex-row gap-4 mt-4">
              <Link
                href="/sign-in"
                className="w-full lg:w-fit px-6 text-center py-4 rounded-[50px] duration-200 transition-all ease-linear bg-back-red hover:bg-[#ff9f51] text-yellow-100 shadow-p4 hover:shadow text-xl font-bold"
              >
                Registrarme ahora{" "}
                <FaUserCheck className="h-6 w-6 inline-block mb-1" />
              </Link>
            </buttons>
          </containerall>
        </div>

        <LogoGigante />

        <div className="darkbg-dark-l :bg-white flex flex-col gap-2 items-center justify-center pt-20 pb-6">
          <h1 className="mx-auto w-[80%] sm:w-[85%] lg:w-fit text-center dark:text-slate-200 text-slate-600 text-3xl sm:text-5xl font-bold border-b-4 pb-2 border-bor-red uppercase">
            ¿Aún no te has registrado?
          </h1>
          <h2 className="mx-auto w-[80%] sm:w-[85%] lg:w-[50%] mt-4 text-2xl sm:text-2xl text-slate-500 dark:text-white text-left sm:text-center">
            No te tomará ni un minuto; registrarse es tan fácil como iniciar
            sesión. Nosotros nos encargamos del resto.
          </h2>

          <buttons className=" mx-auto w-[80%] sm:w-[85%] lg:w-[50%] flex flex-col items-center justify-center sm:flex-row gap-4 mt-4 pb-20">
            <Link
              href="/sign-in"
              className="w-full lg:w-fit px-6 text-center py-4 rounded-[50px] duration-200 transition-all ease-linear bg-back-red hover:bg-[#ff9f51] text-yellow-100 shadow-p4 hover:shadow text-xl font-bold"
            >
              Registrarme ahora{" "}
              <FaUserCheck className="h-6 w-6 inline-block mb-1" />
            </Link>
          </buttons>
        </div>
      </div>
    </div>
  );
};

export default InicioPage;
