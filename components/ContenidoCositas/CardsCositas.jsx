"use client";

import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Masonry from "react-masonry-css";
import "./stylecards.css";
import Link from "next/link";

import { changeNabvar } from "@/components/NavBar/Navbar";
import CardCosita from "./CardCosita";
import ModalCosita from "./ModalCosita";

const CardsCositas = () => {
  const [cosita, setCosita] = useState();
  const [updatedCosita, setUpdatedCosita] = useState(false);
  const [listen, setListen] = useState(false);

  const [suplementos, setSuplementos] = useState();
  const [sexshop, setSexshop] = useState();
  const [audiolibros, setAudiolibros] = useState();
  const [onlyfans, setOnlyfans] = useState();

  const [openModal, setOpenModal] = useState(false)
  const [data, setData] = useState({
    id: '',
    name: '',
    description: '',
    imageUrl: ''
})

console.log(openModal);

  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      localStorage.removeItem("cositaStorage");
    });
  }, []);

  useEffect(() => {
    const cositaStorage = localStorage.getItem("cositaStorage");
    const LocalUpdatedCosita = localStorage.getItem("updatedCosita");
    const parsedUpdatedCosita = JSON.parse(LocalUpdatedCosita);

    console.log(cositaStorage);

    if (parsedUpdatedCosita !== updatedCosita) {
      setUpdatedCosita(parsedUpdatedCosita);
    }

    if (!cositaStorage || updatedCosita) {
      fetch("/api/cositas")
        .then((data) => data.json())
        .then(({ data }) => {
          setCosita(data);
          localStorage.setItem("cositaStorage", JSON.stringify(data));
          localStorage.removeItem("updatedCosita");
        });

        console.log(cosita);
    }

    if (!cosita) {
      const cositaS = JSON.parse(cositaStorage);
      setCosita(cositaS);
    }
  }, [updatedCosita]);

  useEffect(() => {
    const Suplementos = cosita?.filter((s) => s.nivel === "SUPLEMENTOS") || [];
    const Sexshop = cosita?.filter((s) => s.nivel === "SEXSHOP") || [];
    const Audiolibros = cosita?.filter((s) => s.nivel === "AUDIOLIBROS") || [];
    const Onlyfans = cosita?.filter((s) => s.nivel === "ONLYFANS") || [];

    setSuplementos(Suplementos)
    setSexshop(Sexshop)
    setAudiolibros(Audiolibros)
    setOnlyfans(Onlyfans)

  }, [cosita]);

  const breakpointColumnsObj = {
    default: 4, // Número de columnas por defecto
    1500: 4,
    1200: 3, // Cambiar a 4 columnas en pantallas de 1200px o menos
    992: 2, // Cambiar a 3 columnas en pantallas de 992px o menos
    768: 2, // Cambiar a 2 columnas en pantallas de 768px o menos
    610: 2, // Cambiar a 2 columnas en pantallas de 768px o menos
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-4 w-screen min-h-screen lg:min-h-fit dark:bg-dark-l bg-[#fff]">
      <h1 className="mt-16 text-slate-400 p-1 rounded border-[1px] w-[100px] mx-auto text-center text-sm border-slate-400 block sm:hidden">
        Publicidad
      </h1>
      <div className="sm:mt-20 lg:hidden block h-[160px] sm:h-[300px] lg:h-[500px] w-[96%] lg:w-[250px] mx-auto">
        <div className="flex gap-1 lg:flex-col mb-10 lg:mb-2 items-center justify-center h-full w-full sm:mx-0 lg:mt-24">
          <div className="h-[160px] w-[160px] sm:h-[300px] sm:w-[300px] lg:h-[240px] lg:w-[240px] bg-slate-400 mx-auto overflow-hidden">
            <img src="/assets/publicidad1.1.jpeg" alt="" className="" />
          </div>
          <h1 className="text-slate-400 p-1 rounded border-2 border-slate-400 hidden sm:block">
            Publicidad
          </h1>
          <div className="h-[160px] w-[160px] sm:h-[300px] sm:w-[300px] lg:h-[240px] lg:w-[240px] bg-slate-400 mx-auto">
            <img src="/assets/publicidad1.2.jpeg" alt="" />
          </div>
        </div>
      </div>

      <containertotal className="flex flex-col overflow-x-hidden lg:mt-20 mx-[12px]">
      <div className="flex gap-2 items-center">
      <h1 className="font-bold mb-2 text-slate-600 dark:text-slate-400 text-xl mr-4">Adquiérelo en </h1>
      <Link href={'https://t.me/papayahubpe'} target="_blank">
      <img width="48" height="48" src="https://img.icons8.com/color/48/telegram-app--v1.png" alt="telegram-app--v1" className="h-[36px] w-[36px] my-auto mb-2"/>
      </Link>
      <Link href={`https://api.whatsapp.com/send?phone=+51989752208&text=Hola%2C%20me%20interesa%20comprar%20un%20producto%20en%20Papayahub.pe`} target="_blank">
      <img width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1" className="h-10 w-10 my-auto mb-2"/>
      </Link>
      </div>
        <h1 className="font-bold mb-2 text-slate-400" style={{letterSpacing: '4px'}}>Vigorizantes</h1>
        <suplementos className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-1 lg:gap-4 min-h-fit mb-0 lg:mb-4 w-full lg:[980px] 2xl:w-[1200px]">
          {suplementos?.length > 0
            ? suplementos?.slice(0,4)?.map((a) => (
                <CardCosita
                  key={a?.id}
                  id={a?.id}
                  name={a?.title}
                  description={a?.description}
                  nivel={a?.nivel}
                  imageUrl={a?.imageUrl}
                  views={a?.views}
                  setOpenModal={setOpenModal}
                  setData={setData} 
                />
              ))
            : ""}
        </suplementos>

        <h1 className="font-bold mb-2 text-slate-400" style={{letterSpacing: '4px'}}>Audiolibros para ser un alfa</h1>
        <audiolibros className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-1 lg:gap-4 min-h-fit mb-0 lg:mb-4 w-full lg:[980px] 2xl:w-[1200px]">
          {audiolibros?.length > 0
            ? audiolibros?.slice(0,4)?.map((a) => (
                <CardCosita
                  key={a?.id}
                  id={a?.id}
                  name={a?.title}
                  description={a?.description}
                  nivel={a?.nivel}
                  imageUrl={a?.imageUrl}
                  views={a?.views}
                  setOpenModal={setOpenModal}
                  setData={setData} 
                />
              ))
            : ""}
        </audiolibros>

        <h1 className="font-bold mb-2 text-slate-400" style={{letterSpacing: '4px'}}>Sexshop</h1>
        <sexshop className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-1 lg:gap-4 min-h-fit mb-0 lg:mb-4 w-full lg:[980px] 2xl:w-[1200px]">
          { sexshop?.length > 0
            ? sexshop?.slice(0,4)?.map((a) => (
                <CardCosita
                  key={a?.id}
                  id={a?.id}
                  name={a?.title}
                  description={a?.description}
                  nivel={a?.nivel}
                  imageUrl={a?.imageUrl}
                  views={a?.views}
                  setOpenModal={setOpenModal}
                  setData={setData} 
                />
              ))
            : ""}
        </sexshop>

        <h1 className="font-bold mb-2 text-slate-400" style={{letterSpacing: '4px'}}>Contenido Top Onlyfans</h1>
        <onlyfans className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-1 lg:gap-4 min-h-fit mb-0 lg:mb-4 w-full lg:[980px] 2xl:w-[1200px]">
          {onlyfans?.length > 0
            ? onlyfans?.slice(0,4)?.map((a) => (
                <CardCosita
                  key={a?.id}
                  id={a?.id}
                  name={a?.title}
                  description={a?.description}
                  nivel={a?.nivel}
                  imageUrl={a?.imageUrl}
                  views={a?.views}
                  setOpenModal={setOpenModal}
                  setData={setData} 
                />
              ))
            : ""}
        </onlyfans>
      </containertotal>

      <div className="hidden lg:block">
        <div className="flex gap-2 lg:flex-col mb-10 lg:mb-2 items-center justify-center h-[170px] sm:h-[300px] w-[96%] lg:h-[600px] lg:w-[250px] sm:mx-0 lg:mt-[124px] mx-auto ">
          <div className="h-[160px] w-[160px] sm:h-[300px] sm:w-[300px] lg:h-[240px] lg:w-[240px] bg-slate-400 mx-auto overflow-hidden">
            <img src="/assets/publicidad1.1.jpeg" alt="" className="" />
          </div>
          <h1 className="text-slate-400 p-1 rounded border-2 border-slate-400 hidden sm:block">
            Publicidad
          </h1>
          <div className="h-[160px] w-[160px] sm:h-[300px] sm:w-[300px] lg:h-[240px] lg:w-[240px] bg-slate-400 mx-auto">
            <img src="/assets/publicidad1.2.jpeg" alt="" />
          </div>
        </div>
      </div>

      { openModal && <ModalCosita cosita={cosita} data={data} setOpenModal={setOpenModal}/> }
    </div>
  );
};

export default CardsCositas;
