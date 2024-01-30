import React from 'react'

const Beneficios = () => {
  return (
    <section className='w-screen flex overflow-hidden p-10 mb-6'>
        <section className='grid mx-auto w-full overflow-hidden gap-2'>

            <div className='flex flex-col dark:text-t-dark text-white items-center justify-center gap-6 '>
                <div className='p-[0.5rem] flex flex-col sm:flex-row text-center gap-4 border-b-2 border-[#6f01ff]'>
                    <h3 className='text-3xl sm:my-auto'>¿Por qué Mr Developer?</h3>
                    <h1 className='text-4xl font-extrabold mb-2'>Somos únicos.</h1>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6'>
                    {/* <div className='border-2 border-[#6f01ff] rounded'>
                        <div className='flex flex-col max-w-[300px] gap-6 m-4 p-[1rem]'>
                            <h1 className='text-2xl font-extrabold'>Experiencia práctica</h1>
                            <p className='text-xl'>
                            Mediante un entorno simulado de trabajo con supervision y exigencia nuestros developers ganarán experiencia práctica y
                            fortalecerán sus habilidades técnicas para el mundo laboral.</p>
                        </div>
                    </div>
                    <div className='border-2 border-[#6f01ff] rounded'>
                        <div className='flex flex-col max-w-[300px] gap-6 m-4 p-[1rem]'>
                            <h1 className='text-2xl font-extrabold'>Trabajo en equipo</h1>
                            <p className='text-xl'>
                             Se les enseñara a trabajar colaborativamente con herramientas tecnologicas como git y github, contaran con
                             un tutor que realizara supervisiones diarias y sprints semanales.</p>
                        </div>
                    </div>
                    <div className='border-2 border-[#6f01ff] rounded '>
                        <div className='flex flex-col max-w-[300px] gap-6 m-4 p-[1rem]'>
                            <h1 className='text-2xl font-extrabold'>Desarrollo de habilidades</h1>
                            <p className='text-xl'>
                            Los jóvenes mediante la constante exigencia mejoraran exponencialmente las habilidades en las tecnologías que ya conocen.</p>
                        </div>
                    </div>
                    <div className='border-2 border-[#6f01ff] rounded'>
                        <div className='flex flex-col max-w-[300px] gap-6  m-4 p-[1rem]'>
                            <h1 className='text-2xl font-extrabold'>Un equipo de por vida</h1>
                            <p className='text-xl'>
                        Brindamos a los jóvenes la oportunidad de conocer a otros desarrolladores quiza con los mismos objetivos que el y conectarlos para un crecimiento mutuo.</p>
                        </div>
                    </div> */}
                    
                    <div>
                        <div className='border-2 border-[#6f01ff] dark:bg-[#eae0ff] rounded flex flex-col gap-2 m-4 p-[1rem]'>
                            <h1 className='text-2xl font-extrabold'>Experiencia práctica</h1>
                            <p>Desarrolla, consolida y aprende nuevas tecnologías con proyectos desafiantes.</p>
                        </div>
                    </div>
                    <div >
                        <div className='border-2 border-[#6f01ff] dark:bg-[#eae0ff] rounded flex flex-col gap-2 m-4 p-[1rem]'>
                            <h1 className='text-2xl font-extrabold'>Trabajo colaborativo</h1>
                            <p>Prepárate para simular un entorno de trabajo real en equipo.</p>
                        </div>
                    </div>
                    <div >
                        <div className='border-2 border-[#6f01ff] dark:bg-[#eae0ff] rounded flex flex-col  gap-2 m-4 p-[1rem]'>
                            <h1 className='text-2xl font-extrabold'>Feedbacks diarios</h1>
                            <p>Cuenta con un Tutor que orientará al equipo para que logren sus objetivos.</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='border-2 border-[#6f01ff] dark:bg-[#eae0ff] rounded flex flex-col gap-2 m-4 p-[1rem]'>
                            <h1 className='text-2xl font-extrabold'>Conexión profesional</h1>
                            <p>Conoce a talentos como tú y expande tu red profesional.</p>
                        </div>
                    </div>

                    
                </div>
            </div>
            
        </section>
    </section>
  )
}

export default Beneficios