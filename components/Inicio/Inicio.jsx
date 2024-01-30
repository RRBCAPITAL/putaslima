"use client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { useUser } from "@clerk/nextjs";
import Banner from "./Banner/Banner";
import Filtros from "./Contenido/Filtros";
import Cards from "./Contenido/Cards";
import ModalFilter from "./ModalFilter";
import { useEffect } from "react";
import Modal18 from "./Modal18";

const Inicio = () => {
  const user = useUser();
  const [textSearch, setTextSearch] = useState();
  const [modalFilterOpen, setModalFilterOpen] = useState(false);

  const [selectedNacionalidad, setSelectedNacionalidad] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedLugar, setSelectedLugar] = useState("");
  const [selectedIdioma, setSelectedIdioma] = useState("");
  const [selectedAtencion, setSelectedAtencion] = useState("");
  const [filterNothing, setFilterNothing] = useState(false);
  const [nothingFound, setNothingFound] = useState(false);
  const [resultadosEncontrados, setResultadosEncontrados] = useState(false);
  const [openModal18, setOpenModal18] = useState(false);

  const [categoria, setCategoria] = useState("");

  const actionFilterNothing = () => {
    setFilterNothing(false);
    if (modalFilterOpen) {
      if (nothingFound) {
        setFilterNothing(true);
      }
    }
  };

  useEffect(() => {
    // Verificar si el modal no se ha abierto antes
    const hasOpenedBefore = localStorage.getItem("modalOpened");

    if (!hasOpenedBefore) {
      setTimeout(() => {
        // Si no se ha abierto antes, abre el modal
        setOpenModal18(true);
        // Marca que el modal se ha abierto
        localStorage.setItem("modalOpened", "true");
      }, 1000);
    }
  }, []);

  return (
    <main className="z-20 grid min-h-screen w-screen dark:bg-dark-l bg-[#fff]">
      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
      <Banner />
      <Filtros
        setCategoria={setCategoria}
        setTextSearch={setTextSearch}
        setModalFilterOpen={setModalFilterOpen}
        setSelectedNacionalidad={setSelectedNacionalidad}
        setSelectedRegion={setSelectedRegion}
        setSelectedLugar={setSelectedLugar}
        setSelectedIdioma={setSelectedIdioma}
      />
      <Cards
        categoria={categoria}
        textSearch={textSearch}
        setResultadosEncontrados={setResultadosEncontrados}
        setNothingFound={setNothingFound}
        setModalFilterOpen={setModalFilterOpen}
        selectedNacionalidad={selectedNacionalidad}
        selectedRegion={selectedRegion}
        selectedLugar={selectedLugar}
        selectedIdioma={selectedIdioma}
        selectedAtencion={selectedAtencion}
      />

      {modalFilterOpen && (
        <ModalFilter
          resultadosEncontrados={resultadosEncontrados}
          modalFilterOpen={modalFilterOpen}
          setModalFilterOpen={setModalFilterOpen}
          setSelectedNacionalidad={setSelectedNacionalidad}
          setSelectedRegion={setSelectedRegion}
          setSelectedLugar={setSelectedLugar}
          setSelectedAtencion={setSelectedAtencion}
          setSelectedIdioma={setSelectedIdioma}
          filterNothing={filterNothing}
          actionFilterNothing={actionFilterNothing}
          setFilterNothing={setFilterNothing}
        />
      )}
      {openModal18 && <Modal18 setOpenModal18={setOpenModal18} />}
    </main>
  );
};

export default Inicio;
