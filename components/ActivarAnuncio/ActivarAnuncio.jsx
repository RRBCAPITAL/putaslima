"use client"

const ActivarAnuncio = () => {

  return (
    <div className='flex'>

        <containerall className='flex flex-col items-center  gap-4 min-h-screen w-screen py-[100px] dark:bg-dark-d bg-whitet'>
            <div className='flex gap-1 items-center justify-center'>
            {/* <h1 className="my-auto text-red-600 font-bold bg-red-100 p-2 rounded-[20px]">DESCUENTOS por lanzamiento</h1> */}
                <h1 className='text-center dark:text-slate-200 text-slate-600 text-2xl sm:text-3xl font-bold'><strong className="text-t-red">Elige</strong> tu plan de anuncio</h1>       
                {/* <h2 className='text-xl text-red-500 font-bold'>Por lanzamiento: 70% de descuento en todos los planes!</h2> */}
            </div>

            <containeniveles className='grid sm:grid-cols-2 lg:grid-cols-3 mx-2 lg:mx-10 items-center gap-2 lg:gap-4 justify-center'>


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
              <nav className={`text-2xl rounded-[20px] text-center font-extrabold text-slate-200 bg-slate-700 p-2 mx-4`}>SIMPLE</nav>
              </div>
              
              <beneficios className='shadow p-2 my-2 rounded w-full'>
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
                src='/assets/modosimple.jpg'
                alt="Imagen de la anfitriona"
                className={` object-cover border-[10px]`}
              />
            </card>

            <precio className='flex flex-col py-2 items-center bg-slate-600 border-4 rounded-b-[14px]  border-slate-500  justify-center'>
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
                      <p className="text-[18px] text-slate-200 relative z-10 font-light">S/120.00</p>
                      <div className="absolute w-full h-0.5 bg-slate-200 bottom-1/2 transform translate-y-1/2"></div>
                    </preciotachado>

                    <h1 className="text-blue-600 font-bold bg-blue-100 p-2 rounded-[20px]">AHORRA 100%</h1>
                </div>
               <h1 className='text-4xl font-bold text-center rounded-b-[20px] text-slate-200 p-2 '>Gratis</h1>
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
              <nav className={`text-2xl rounded-[20px] text-center font-extrabold text-blue-200 bg-blue-700 p-2 mx-4`}>MOTOMAMI</nav>
              </div>
              <beneficios className='shadow p-2 rounded w-full'>
                <h1>Visibilidad destacada.</h1>
                <h1>Posicionamiento intermedio.</h1>
                <h1>Más cantidad de interesados.</h1>
                <h1>Publicidad en nuestras redes.</h1>
              </beneficios>
            </div>
            
            <card>
              <img
                src='/assets/modomotomami.jpg'
                alt="Imagen de la anfitriona"
                className={` object-fill border-[10px] w-[500px]`}
              />
            </card>

            <precio className='flex flex-col py-2 items-center bg-blue-700 border-4 border-blue-500 rounded-b-[14px]  justify-center'>
                <div>
                <div className="flex gap-1 items-center justify-center">
                    <preciotachado className="text-center relative">
                      <p className="text-[18px] text-slate-200 relative z-10 font-light">S/160.00</p>
                      <div className="absolute w-full h-0.5 bg-slate-200 bottom-1/2 transform translate-y-1/2"></div>
                    </preciotachado>

                    <h1 className="text-red-600 font-bold bg-red-100 p-2 rounded-[20px]">AHORRA 70%</h1>
                </div>
                </div>
                <h1 className='text-4xl font-bold text-center rounded-b-[20px] text-slate-200 p-2 '>S/48.00<strong className="text-sm font-normal">(mes)</strong></h1>
            </precio>

            </containcard>


            <containcard
            className={`shadow-custom1 border-bor-red border-[10px] w-[280px] sm:w-[360px] rounded-[28px] relative transition-opacity bg-opacity-100 duration-[3s] ease`}
                >
            <div className="flex flex-col gap-2 px-5 py-2 bg-slate-200 shadow-2xl rounded-t-[20px]">
              {/* <activo className='flex gap-2 items-center justify-center'>
              <nav className="text-2xl sm:text-3xl font-extrabold text-slate-700">BICHOTA</nav>
              <img width="64" height="64" src="https://img.icons8.com/cute-clipart/64/ok.png" alt="ok"/>
              </activo> */}
              <div className="flex flex-col gap-1">
                <p className="text-sm mx-4">Modo</p>
              <nav className={`text-2xl rounded-[20px] text-center font-extrabold text-yellow-100 bg-back-red p-2 mx-4`}>BICHOTA</nav>
              </div>
              
              <beneficios className='shadow p-2 rounded w-full'>
              <h1>Máxima exposición.</h1>
                <h1>Posicionamiento en primera fila.</h1>
                <h1>Mayor cantidad de interesados.</h1>
                <h1>Publicidad en nuestras redes.</h1>
              </beneficios>

            </div>
            
            <card>
              <img
                src='/assets/modobichota.jpg'
                alt="Imagen de la anfitriona"
                className={`object-fill border-[10px]`}
              />
            </card>

            <precio className='flex flex-col py-2 items-center bg-back-red border-4 border-yellow-100 rounded-b-[14px]  justify-center'>
                <div>
                <div className="flex gap-1 items-center justify-center">
                    <preciotachado className="text-center relative">
                      <p className="text-[18px] text-slate-200 relative z-10 font-light">S/220.00</p>
                      <div className="absolute w-full h-0.5 bg-slate-200 bottom-1/2 transform translate-y-1/2"></div>
                    </preciotachado>

                    <h1 className="text-red-600 font-bold bg-red-100 p-2 rounded-[20px]">AHORRA 70%</h1>
                </div>
                </div>
                <h1 className='text-4xl font-bold text-center rounded-b-[20px] text-yellow-50 p-2 '>S/66.00<strong className="text-sm font-normal">(mes)</strong></h1>
            </precio>

            </containcard>

            </containeniveles>


            <div className='mt-10'>
                <h1 className='text-center dark:text-slate-200 text-slate-600 text-2xl sm:text-3xl font-bold'><strong className="text-t-red">Métodos</strong> de pago</h1>
            </div>


            <metodospago className="mx-2 flex flex-col gap-4 items-center mb-[40px]">

          <div className="w-[98%] dark:text-white text-black p-5 border-bor-light border-4 rounded-lg gap-2">
            <h1 className="text-center font-bold text-2xl">Cuentas bancarias (Perú)</h1>
            <h3 className="text-center mb-8"><strong>Titular:</strong> RRB CAPITAL E.I.R.L</h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center">
              <section className="flex gap-2 justify-center items-center rounded-lg">
                <img src="https://res.cloudinary.com/dvaiww9ri/image/upload/v1694015210/bcpp_jpbbp1.png" alt="" className="h-[100px] w-[100px] my-auto"/>
                <infocta className='dark:text-white text-black'>
                <h1 className="text-center font-bold text-2xl mb-2">Bcp</h1>
                  <contain className='flex lg:flex-row flex-col lg:gap-2'>
                    <p className="font-bold">Cuenta: </p>
                    <p className="lg:text-[16px] my-auto text-sm"> 193-9974125-0-35</p>
                  </contain>
                  <contain className='flex lg:flex-row flex-col lg:gap-2'>
                    <p className="font-bold">CCI: </p>
                    <p className="lg:text-[16px] my-auto text-sm">002-193-009974125035-13</p>
                  </contain>
                </infocta>
              </section>

              <section className="flex gap-2 justify-center items-center">
              <img src="/assets/logointerbank.png" alt="" className="h-[100px] w-[100px]"/>
              <infocta>
              <h1 className="text-center font-bold text-2xl mb-1">Interbank</h1>
                  <contain className='flex lg:flex-row flex-col lg:gap-2'>
                  <p className="font-bold">Cuenta: </p>
                    <p className="lg:text-[16px] my-auto text-sm"> 200-3005394560</p>
                  </contain>
                  <contain className='flex lg:flex-row flex-col lg:gap-2'>
                  <p className="font-bold">CCI: </p>
                    <p className="lg:text-[16px] my-auto text-sm">003-200-003005394560-33</p>
                  </contain>
                </infocta>
              </section>

              <section className="flex gap-2 justify-center items-center">
              <img src="https://res.cloudinary.com/dvaiww9ri/image/upload/v1694449318/yapep_dh6iav.png" alt="" className="h-[100px] w-[100px]"/>
              <infocta>
              <h1 className="text-center font-bold text-2xl mb-2">Yape</h1>
              <contain className='flex lg:flex-row flex-col lg:gap-2'>
                  <p className="font-bold">Número: </p>
                    <p className="lg:text-[16px] my-auto text-sm">+51 989752208</p>
                  </contain>
                </infocta>
              </section>

            </div>
          </div>

         <div className="w-full flex flex-col  items-center justify-center sm:flex-row p-1 gap-4">
         <div className="w-full flex flex-col justify-center items-center dark:text-white text-black p-4 border-bor-light border-4 rounded-lg gap-2">
          
          <h1 className="text-center font-bold text-3xl">Yape</h1>
          <h3 className="text-center">Escanea el qr desde tu yape</h3>
          <div className="mt-4 grid items-center justify-center">
            <section className="flex gap-2 justify-center items-center">
              <img src="/assets/qryape.jpg" alt="" className="h-[300px] w-[300px] rounded-[10px]"/>
              {/* <infocta>
                <p>+51 924169968</p>
              </infocta> */}
            </section>
          </div>
          </div>

        <whatsapp className='w-full h-full flex flex-col justify-center items-center text-white dark:text-t-dark p-5 border-bor-light border-4 rounded-lg gap-2'>
          <a href={`https://api.whatsapp.com/send?phone=+51989752208&text=Hola%2C%20me%20interesa%20comprar%20un%20plan%20para%20mi%20anuncio%20en%20Papayahub.pe`}
        target="_blank"
        rel="noopener noreferrer"
         className='px-10 py-[12px] font-bold text-xl bg-green-500 hover:bg-green-600 duration-200 transition-all ease-linear text-white rounded-lg w-fit'>
                <img width="32" height="32" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1" className='my-auto mb-2 inline-block'/> WhatsApp 
            </a>
            <div className='dark:text-white text-black text-center text-[16px] sm:text-base mx-10'>
                <h1 className="">Envíanos un WhatsApp indicando el nivel de suscripción, código ID, nombre y activaremos tu perfil.</h1>
    
            </div>
          </whatsapp>
         </div>

        </metodospago>


             
        </containerall>
            
    </div>
  )
}

export default ActivarAnuncio