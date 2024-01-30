"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { changeIn } from "@/utils/motionTransitions";
import { useRouter } from "next/navigation";
import { FaCirclePlay } from "react-icons/fa6";

const CardCosita = ({
  id,
  name,
  description,
  imageUrl,
  nivel,
  views,
  setOpenModal,
  setData
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const router = useRouter();

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };


  return (
    <div>
      <motion.div
        style={{ position: "relative" }}
        className={`mb-2 dark:bg-dark-d bg-white hover:cursor-pointer border-2 dark:border-slate-500 w-fit lg:w-[250px] 2xl:w-[280px] 2xl`}
        variants={changeIn(0)}
        initial="hidden"
        animate="show"
        exit="hidden"
        onClick={() => {
            setOpenModal(true),
            setData({
                id: id,
                name: name,
                description: description,
                imageUrl: imageUrl
            })
        }}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
          }}
          className="w-full sm:h-[400px] h-[200px] xl:h-[300px] 2xl:h-[400px]"
        >

              <img
                src={imageUrl}
                // onClick={handleClick}
                alt="Imagen del producto"
                onChange={() => toggleHover()}
                className={`relative w-full h-full object-cover`}
              />
       
        </div>
        <div
          className="flex flex-col gap-2 dark:text-white text-slate-500 px-1 lg:px-4 py-2 text-sm sm:text-[18px] font-bold leading-5 h-[60px] sm:h-[60px] overflow-hidden"
          style={{
            // backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: "0 0 18px 18px",

            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <h1
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2, // Número de líneas que deseas mostrar
              whiteSpace: "normal", // Puede ser nowrap si no quieres que se ajuste automáticamente
              marginBottom: "2px", // Ajuste del espacio entre h1 y h2
            }}
          >
            {name}
          </h1>
          {/* <h2 className="text-sm font-light">{description}</h2> */}
        </div>
      </motion.div>
    </div>
  );
};

export default CardCosita;
