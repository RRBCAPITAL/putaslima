"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { changeIn } from "@/utils/motionTransitions";
import { useRouter } from "next/navigation";

const Card = ({
  id,
  imagenPrincipal,
  name,
  nacionalidad,
  lugar,
  description,
  edad,
  region,
  nivel,
  anuncioTarifaPresencial,
  anuncioTarifaVirtual,
  setDetailsModal,
}) => {
  const router = useRouter();
  const shortId = id?.substring(0, 7);
  const [isHovered, setIsHovered] = useState(false);

  const [tarifaPresencial, setTarifaPresencial] = useState([]);
  const [tarifaVirtual, setTarifaVirtual] = useState([]);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  useEffect(() => {
    if (anuncioTarifaPresencial) {
      const tarifaPresencial = JSON.parse(anuncioTarifaPresencial);
      setTarifaPresencial(tarifaPresencial);
    }
    if (anuncioTarifaVirtual) {
      const tarifaVirtual = JSON.parse(anuncioTarifaVirtual);
      setTarifaVirtual(tarifaVirtual);
    }
  }, [anuncioTarifaVirtual, anuncioTarifaPresencial]);

  return (
    <div
      className="mb-[10px]"
      onClick={() => {
        const formattedNacionalidad = nacionalidad.replace(/\s+/g, "-");
        const formattedRegion = region.replace(/\s+/g, "-");
        const formattedLugar = lugar.replace(/\s+/g, "-");
        const formattedName = name.replace(/\s+/g, "-");

        // Guarda información del modal en el estado del navegador
        window.history.pushState(
          {
            modalId: id,
            modalStatus: true,
          },
          null,
          `/mujeres/kinesiologas/${formattedNacionalidad}/${formattedRegion}/${formattedLugar}/${formattedName}/${id}`
        );

        setDetailsModal({
          status: true,
          id: id,
        });
      }}
    >
      <motion.div
        style={{ position: "relative" }}
        className={`dark:bg-dark-d bg-white hover:cursor-pointer border-2 rounded-[10px]`}
        variants={changeIn(0)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <img
          src={imagenPrincipal}
          alt="Imagen de la anfitriona"
          className={`relative w-full lg:w-fit h-fit xl:h-fit 2xl:h-fit border-[2px] rounded-t-[10px]`}
        />

        <div
          className=" dark:text-white text-slate-600 px-1 lg:px-4"
          style={{
            // backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: "0 0 18px 18px",
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <section className="flex flex-col px-1 gap-0 pb-2 lg:pb-[20px]">
            <div className="flex flex-col gap-1">
              <h2 className="my-auto border-2 border-transparent text-[14px] mt-[3px] line-clamp-2">
                {description}
              </h2>
              <div className="flex gap-1 items-center justify-center">
                <div className="w-full flex gap-[2px] text-black px-1 py-1 rounded items-center justify-between bg-white  dark:bg-dark-d">
                  <h2 className="my-auto border-2 border-transparent text-[12px] mt-[3px] px-1 py-1 bg-slate-200 rounded-[10px] shadow-md">
                    {edad} años
                  </h2>
                  <h2 className="my-auto border-2 border-transparent text-[12px] mt-[3px]  px-1 sm:px-6 py-1 bg-slate-200 rounded-[10px] shadow-md">
                    {lugar}
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-1 mt-1 rounded-[5px] w-full px-2 py-1 bg-white dark:bg-dark-d">
              {(tarifaPresencial[0]?.value || tarifaVirtual[0]?.value) && <h2 className="text-black my-auto text-[12px]  px-2 sm:px-6 py-1 bg-slate-200 rounded-[10px] shadow-md">
                {tarifaPresencial[0]?.value
                  ? `S/${tarifaPresencial[0]?.value}`
                  : tarifaVirtual[0]?.value && `S/${tarifaVirtual[0]?.value}`}
              </h2>}

                <h2 className="text-black my-auto text-[12px] px-2 sm:px-6 py-1 bg-slate-200 rounded-[10px] shadow-md">
                  {nacionalidad}
                </h2>
            
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
