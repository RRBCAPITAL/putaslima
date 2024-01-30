"use client";

import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import CardVideo from "./CardVideo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Masonry from "react-masonry-css";
import "./stylecards.css";

import { changeNabvar } from "@/components/NavBar/Navbar";

const CardsVideos = () => {
  const [video, setVideo] = useState();
  const [filteredVideo, setFilteredVideo] = useState([]);
  const [updatedVideo, setUpdatedVideo] = useState(false);
  const [listen, setListen] = useState(false);

  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      localStorage.removeItem("videoStorage");
    });
  }, []);

  useEffect(() => {
    const videoStorage = localStorage.getItem("videoStorage");
    const LocalUpdatedVideo = localStorage.getItem("updatedVideo");
    const parsedUpdatedVideo = JSON.parse(LocalUpdatedVideo);

    if (parsedUpdatedVideo !== updatedVideo) {
      setUpdatedVideo(parsedUpdatedVideo);
    }

    if (!videoStorage || updatedVideo) {
      fetch("/api/video")
        .then((data) => data.json())
        .then(({ data }) => {
          setVideo(data);
          localStorage.setItem("videoStorage", JSON.stringify(data));
          localStorage.removeItem("updatedVideo");
        });
    }

    if (!video) {
      const videoS = JSON.parse(videoStorage);
      setVideo(videoS);
    }
  }, [updatedVideo]);

  useEffect(() => {
    const videoSegunNivel = video?.sort((a, b) => {
      const niveles = ["ABOVE", "MID", "UNDER"];
      const nivelA = niveles.indexOf(a.nivel);
      const nivelB = niveles.indexOf(b.nivel);
      return nivelA - nivelB;
    });

    setFilteredVideo(videoSegunNivel);
  }, [video, changeNabvar]);

  useEffect(() => {
    const anunciosSimplesH = video?.filter((s) => s.nivel === "UNDER") || [];
    const anunciosMotoMamiH = video?.filter((s) => s.nivel === "MID") || [];
    const anunciosBichotaH = video?.filter((s) => s.nivel === "ABOVE") || [];
    const anunciosSegunNivelH = [
      ...anunciosBichotaH,
      ...anunciosMotoMamiH,
      ...anunciosSimplesH,
    ];

    if (anunciosSegunNivelH?.length > 0) {
      setFilteredVideo(anunciosSegunNivelH);
    }
  }, [video]);

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
            <img src="/assets/publicidad1.jpeg" alt="" className="" />
          </div>
          <h1 className="text-slate-400 p-1 rounded border-2 border-slate-400 hidden sm:block">
            Publicidad
          </h1>
          <div className="h-[160px] w-[160px] sm:h-[300px] sm:w-[300px] lg:h-[240px] lg:w-[240px] bg-slate-400 mx-auto">
            <img src="/assets/publicidadVideo2.jpeg" alt="" />
          </div>
        </div>
      </div>

      <containertotal className="flex overflow-x-hidden lg:mt-24 mx-[12px]">
        <contain className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-1 lg:gap-4 min-h-fit mb-0 lg:mb-10 w-full lg:[980px] 2xl:w-[1200px]">
          {filteredVideo?.length > 0
            ? filteredVideo.map((a) => (
                <CardVideo
                  key={a?.id}
                  id={a?.id}
                  name={a?.title}
                  description={a?.description}
                  nivel={a?.nivel}
                  videoUrl={a?.videoUrl}
                  thumbnailUrl={a?.thumbnailUrl}
                  views={a?.views}
                />
              ))
            : ""}
        </contain>
      </containertotal>

      <div className="hidden lg:block">
        <div className="flex gap-2 lg:flex-col mb-10 lg:mb-2 items-center justify-center h-[170px] sm:h-[300px] w-[96%] lg:h-[500px] lg:w-[250px] sm:mx-0 lg:mt-24 mx-auto ">
          <div className="h-[160px] w-[160px] sm:h-[300px] sm:w-[300px] lg:h-[240px] lg:w-[240px] bg-slate-400 mx-auto overflow-hidden">
            <img src="/assets/publicidad1.jpeg" alt="" className="" />
          </div>
          <h1 className="text-slate-400 p-1 rounded border-2 border-slate-400 hidden sm:block">
            Publicidad
          </h1>
          <div className="h-[160px] w-[160px] sm:h-[300px] sm:w-[300px] lg:h-[240px] lg:w-[240px] bg-slate-400 mx-auto">
            <img src="/assets/publicidadVideo2.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsVideos;
