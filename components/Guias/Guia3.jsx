import React from "react";

const Guia3 = () => {
  return (
    <div className="mx-auto pl-4 sm:mt-60 sm:mx-0">
      <div className="">
        <h3 className="text-[16px]">Paso 2</h3>
        <h1 className="font-bold text-4xl w-[280px] sm:w-full">
          Elegiste Frontend Developer
        </h1>
      </div>

      <div className="mt-10 mr-10 ">
        <h1 className="text-xl sm:w-full font-light">
          Las tecnologías que debes saber son{" "}
          <strong className="font-bold">React</strong> o{" "}
          <strong className="font-bold">Next</strong> (12 o 13) y para lo
          estilos <strong  className="font-bold">CSS</strong> o algún framework como <strong className="font-bold">Tailwind CSS.</strong>
        </h1>

        <div className="grid sm:grid-cols-3 gap-4">
          <div className="mt-10 text-[16px] flex flex-col items-center rounded-md p-2 bg-violet-200 border-2 border-[#6f01ffd4] max-w-[280px]">
            <h1 >
              De <strong>React</strong><h3 className="text-[12px]">(opcional si sabes Next):</h3>
            </h1>

            <ul className="mt-4">
              <li>a. React router</li>
              <li>b. Hooks</li>
              <li>c. Fetch o axios y sus métodos</li>
              <li>D. Crear y validar formularios</li>
            </ul>
          </div>

          <div className="mt-4 sm:mt-10 text-[16px] flex flex-col items-center rounded-md p-2 bg-violet-200 border-2 border-[#6f01ffd4] max-w-[280px]">
            <h1 >
              De <strong>Next</strong> deberás dominar:{" "}
              <h3 className="text-[12px]">(opcional si sabes React)</h3>
            </h1>
            <ul className="mt-4">
              <li>a. Next Router</li>
              <li>b. Hooks</li>
              <li>c. Fetch o axios y sus métodos</li>
              <li>D. Crear y validar formularios</li>
            </ul>
          </div>

          <div className="mt-4 sm:mt-10 text-[16px] flex flex-col items-center rounded-md p-10 bg-violet-200 border-2 border-[#6f01ffd4] max-w-[280px]">
            <h1>
              De <strong>CSS</strong>, <strong>Tailwind</strong> o algún otro framework, deberás dominar lo básico ya que puedes ir
              aprendiendo sobre la marcha.
            </h1>
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
          >
            <h1 className="text-2xl ">Si</h1>
          </div>
          <div
            className="  rounded-md my-auto py-2 px-4 border-b-2 border-[#6f01ffd4] outline-none
            font-bold cursor-pointer hover:bg-[#6f01ffd4] hover:text-white hover:scale-[1.05] active:scale-[0.95] transition-all  ease"
          >
            <h1 className="text-2xl ">No</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guia3;
