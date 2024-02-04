"use client";

import { useState } from "react";
import Link from "next/link";
import { MdDelete } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";
import Back from "../Back";

const CardDeAnuncio = ({
  id,
  idFrontend,
  userId,
  estado,
  imagenPrincipal,
  nivel,
  views,
  name,
  nacionalidad,
  lugar,
  edad,
  tarifaxhr,
  region,
  setModalDeleteOpen,
  setIsDeleted,
  setIdAnuncio,
  whatsapp,
}) => {
  const shortId = id?.substring(0, 7);
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div>
      <container className="bg-white dark:bg-dark-d flex flex-col items-center justify-center gap-2 p-4 shadow-custom1 rounded-[10px]">
        <containinfo className=" flex flex-col lg:flex-row gap-10 p-2 sm:p-5 m-5">
          <sectionactions className="flex flex-col items-center justify-center gap-4">
            <titulo className="flex">
              {nivel === "NOTHING" ? (
                <div className="flex flex-col gap-2 bg-slate-200 shadow-2xl p-5 rounded-[20px]">
                  <activo className="flex gap-2 w-full items-center justify-center  p-4">
                    <nav className="text-3xl font-extrabold">
                      Anuncio Inactivo
                    </nav>
                    <img
                      width="48"
                      height="40"
                      src="https://img.icons8.com/color/48/high-priority.png"
                      alt="high-priority"
                    />
                  </activo>
                  <Link
                    href={"/activar-anuncio"}
                    className="flex gap-1 mx-10 items-center justify-center bg-violet-500 text-white px-4 py-2 rounded-[20px] text-2xl text-center font-extrabold hover:bg-violet-600"
                  >
                    <MdNotificationsActive className="h-6 w-6" />
                    <nav className=" mt-1">Activar</nav>
                  </Link>
                  <nav className="text-center text-xl font-bold text-slate-700">
                    ID: {idFrontend}
                  </nav>
                </div>
              ) : (
                <div className="flex flex-col gap-2 p-5 bg-slate-200 shadow-2xl rounded-[20px]">
                  <activo className="flex gap-2 w-full items-center justify-center">
                    <nav className="text-2xl sm:text-3xl font-extrabold text-slate-700">
                      Anuncio Activo
                    </nav>
                    <img
                      width="64"
                      height="64"
                      src="https://img.icons8.com/cute-clipart/64/ok.png"
                      alt="ok"
                    />
                  </activo>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm mx-4">Nivel</p>
                    <nav
                      className={`text-2xl rounded-[20px] text-center font-extrabold ${
                        nivel === "MOTOMAMI"
                          ? "text-blue-200 bg-blue-700"
                          : nivel === "BICHOTA"
                          ? "text-t-red-l bg-back-red"
                          : "text-slate-200 bg-slate-700"
                      } p-2 mx-4`}
                    >
                      {nivel}
                    </nav>
                  </div>
                  <nav className="text-center text-xl font-bold text-slate-700">
                    ID: {idFrontend}
                  </nav>
                </div>
              )}
            </titulo>

            <buttons className="flex flex-col gap-1 w-full items-center justify-center p-5 bg-slate-200 shadow-2xl rounded-[20px]">
              <h1 className="text-xl font-bold text-slate-700 mb-5">
                Acciones
              </h1>
              <div className="flex gap-1">
                <Link
                  href={`/editar-anuncio/${id}`}
                  className="flex gap-1 sm:gap-4 items-center justify-center bg-orange-500 text-white px-4 py-2 rounded-[10px] hover:bg-orange-600"
                >
                  <AiTwotoneEdit className="h-6 w-6" />
                  <nav className="text-[16px] font-bold my-auto">Editar</nav>
                </Link>
                <button
                  className="flex gap-1 sm:gap-4 items-center justify-center bg-red-500 text-white px-4 py-2 rounded-[10px] hover:bg-red-600"
                  onClick={() => {
                    setModalDeleteOpen(true), setIdAnuncio(id);
                  }}
                >
                  <MdDelete className="h-6 w-6" />
                  <nav className="text-[16px] font-bold mt-1">Eliminar</nav>
                </button>
              </div>
            </buttons>

            {/* <estadisticas className='flex flex-col gap-1 w-full p-5 bg-slate-200 shadow-2xl rounded-[20px]'>

                    <h1 className="text-xl font-bold text-slate-700 mb-2">Estadísticas</h1>
                <h1 className="text-sm text-slate-700 text-center">Interactuaron con tu anuncio</h1>
                <div className="flex gap-1 items-center justify-center">
                <img width="40" height="40" src="https://img.icons8.com/external-colours-bomsymbols-/91/external-click-hand-conversation-colours-colours-bomsymbols--2.png" alt="external-click-hand-conversation-colours-colours-bomsymbols--2"/>
                <p className="mt-1 text-4xl font-bold text-slate-700">50</p>
                </div>

                </estadisticas> */}
          </sectionactions>

          <containvistaprevia className="w-[300px] h-fit flex flex-col gap-1 dark:text-slate-100 text-slate-700  font-bold">
            <h1>VISTA PREVIA DEL ANUNCIO</h1>
            <h1 className="text-[10px] font-normal">
              (Clic para ver todos los detalles de tu anuncio.)
            </h1>

            <Link href={`/mis-anuncios/${id}`}>
              <div
                style={{ position: "relative" }}
                className={`min-w-[280px]  mb-2  h-fit dark:bg-dark-d bg-white rounded-[28px] hover:cursor-pointer`}
              >
                <img
                  src={imagenPrincipal}
                  alt="Imagen de la anfitriona"
                  className={`${
                    nivel === "BICHOTA"
                      ? "border-bor-red"
                      : nivel === "MOTOMAMI"
                      ? "border-blue-500"
                      : "border-slate-500"
                  } relative rounded-[16px] border-[4px]`}
                />

                <div
                  className="absolute text-white dark:text-slate-600 px-4"
                  style={{
                    // backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    borderRadius: "0 0 18px 18px",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                  }}
                >
                  <section className="flex flex-col px-1 gap-0 pb-4">
                    <div className="flex gap-1">
                      <div className="flex gap-1 items-center justify-center">
                        {/* <h1 className="p-1 px-2 rounded text-[10px] border-2 border-bor-red text-white dark:text-slate-800 font-bold my-auto text-center">
    {region}, {lugar}
  </h1> */}
                        <div className="flex gap-[2px] text-black px-2 py-1 rounded items-center justify-center bg-white">
                          {nacionalidad === "Peruana" ? (
                            <img
                              width="16"
                              height="16"
                              src="https://img.icons8.com/color/48/peru.png"
                              alt="peru"
                            />
                          ) : nacionalidad === "Colombiana" ? (
                            <img
                              width="16"
                              height="16"
                              src="https://img.icons8.com/color/48/colombia.png"
                              alt="colombia"
                            />
                          ) : nacionalidad === "Argentina" ? (
                            <img
                              width="16"
                              height="16"
                              src="https://img.icons8.com/color/48/argentina.png"
                              alt="argentina"
                            />
                          ) : nacionalidad === "Boliviana" ? (
                            <img
                              width="16"
                              height="16"
                              src="https://img.icons8.com/color/48/bolivia.png"
                              alt="bolivia"
                            />
                          ) : nacionalidad === "Ecuatoriana" ? (
                            <img
                              width="16"
                              height="16"
                              src="https://img.icons8.com/color/48/ehcuador.png"
                              alt="ehcuador"
                            />
                          ) : nacionalidad === "Española" ? (
                            <img
                              width="16"
                              height="16"
                              src="https://img.icons8.com/color/48/spain-2.png"
                              alt="spain-2"
                            />
                          ) : nacionalidad === "Brasileña" ? (
                            <img
                              width="16"
                              height="16"
                              src="https://img.icons8.com/color/48/brazil.png"
                              alt="brazil"
                            />
                          ) : nacionalidad === "Chilena" ? (
                            <img
                              width="16"
                              height="16"
                              src="https://img.icons8.com/color/48/chile.png"
                              alt="chile"
                            />
                          ) : nacionalidad === "Uruguaya" ? (
                            <img
                              width="16"
                              height="16"
                              src="https://img.icons8.com/color/48/uruguay.png"
                              alt="uruguay"
                            />
                          ) : nacionalidad === "Mexicana" ? (
                            <img
                              width="16"
                              height="16"
                              src="https://img.icons8.com/color/48/mexico.png"
                              alt="mexico"
                            />
                          ) : nacionalidad === "Paraguaya" ? (
                            <img
                              width="16"
                              height="16"
                              src="https://img.icons8.com/color/48/paraguay.png"
                              alt="paraguay"
                            />
                          ) : (
                            <img
                              width="16"
                              height="16"
                              src="https://img.icons8.com/color/48/venezuela.png"
                              alt="venezuela"
                            />
                          )}
                          <h1 className="my-auto border-2 border-transparent text-[12px] mt-[3px]">
                            {name} -
                          </h1>
                          <h1 className="my-auto border-2 border-transparent text-[12px] mt-[3px]">
                            {edad} años
                          </h1>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-1 mt-1 rounded-[5px] w-fit px-2 py-1 bg-white">
                      <p className="text-black my-auto text-[12px]">
                        {lugar} - S/{tarifaxhr}
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </Link>
          </containvistaprevia>
        </containinfo>
      </container>
    </div>
  );
};

export default CardDeAnuncio;
