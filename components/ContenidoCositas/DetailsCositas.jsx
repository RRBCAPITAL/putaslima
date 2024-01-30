"use client";

import axios from "axios";
import { use, useState } from "react";
import { useEffect } from "react";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { motion } from "framer-motion";
import { changeIn } from "@/utils/motionTransitions";
import { useRouter } from "next/navigation";
import { FaCirclePlay } from "react-icons/fa6";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import { Poppins } from "next/font/google";

const dancing = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const DetailsCositas = ({ id }) => {
  const [video, setVideo] = useState();
  const [AllVideos, setAllVideos] = useState();
  const [videoCurrentData, setVideoCurrentData] = useState();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  const handleClick = () => {
    setIsClicked(true);
  };

  useEffect(() => {
   
    axios
      .get(`/api/cositas/${id}`)
      .then((res) => setVideoCurrentData(res))
      .catch((err) => console.log(err));

    console.log(videoCurrentData);
  }, []);

  useEffect(() => {
    const data = localStorage.getItem("videoStorage");
    const Videos = JSON.parse(data);
    const anuncioFound = Videos?.find((a) => a?.id === id);

    setAllVideos(Videos);

    if (anuncioFound) {
      setVideo(anuncioFound);
    } else {
      axios
        .get(`/api/video/${id}`)
        .then((res) => setVideo(res.data))
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className="flex">
      <containerinfo className="flex flex-col gap-4 items-center justify-center dark:bg-dark-l bg-[#edeced] min-h-screen w-screen pb-10">
        <contain className="flex flex-col gap-2 w-[90%] lg:w-[90%] 2xl:w-[1170px] p-8 mt-[70px] mx-20 dark:bg-dark-d rounded-[10px] bg-white shadow-2xl ">
          {/* <p className='text-slate-500 dark:text-slate-300 text-medium font-think text-[20px]'><strong>ID: {video?.idFrontend}</strong></p> */}

          <div className="flex flex-col lg:flex-row gap-6">
            <div>
              <motion.div
                style={{ position: "relative" }}
                className={`mb-2 dark:bg-dark-d bg-white hover:cursor-pointer border-2 dark:border-slate-500 w-fit lg:w-[450px] 2xl:w-[480px] 2xl`}
                variants={changeIn(0)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                  }}
                  className="w-full sm:h-[600px] h-[400px] xl:h-[500px] 2xl:h-[600px]"
                >
                  {!isClicked ? (
                    <>
                      <img
                        src={video?.thumbnailUrl}
                        onClick={handleClick}
                        alt="Miniatura del video"
                        onChange={() => toggleHover()}
                        className={`relative w-full h-full object-cover`}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                        className="bg-white rounded-full"
                      >
                        <FaCirclePlay
                          onClick={handleClick}
                          className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] text-t-red hover:opacity-80 transition-all duration-200 ease-linear"
                        />
                      </div>
                    </>
                  ) : (
                    <video
                      autoPlay
                      controls
                      playsInline
                      src={video?.videoUrl}
                      className=" w-full h-full object-contain"
                    ></video>
                  )}
                </div>
              </motion.div>
            </div>

            <detalles className="flex flex-col gap-6">
              <info className="flex flex-col gap-4">
                <infodetails className="flex flex-col lg:flex-row gap-2 text-slate-700 dark:text-white">
                  <h1 className=" text-4xl font-extrabold">{video?.title}</h1>
                </infodetails>
                <infodescription className="flex flex-col gap-2 text-slate-500 dark:text-slate-300 w-full">
                  <h2>{videoCurrentData?.data?.views}k vistas</h2>

                  <h2
                    className="text-medium font-think text-[16px] text-justify p-4 border-2"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {video?.description}
                  </h2>
                </infodescription>

                <Link
          href={"https://t.me/+kRPGKNx2eNZlNmQ5"}
          target="_blank"
          className="z-30 border-2 hover:bg-slate-100 hover:dark:bg-slate-700 text-black dark:text-white transition-all duration-300 ease-linear py-2 rounded mt-2 font-normal flex items-center justify-center px-10 text-center w-fit text-[16px] sm:text-[22px] 2xl:text-[20px] leading-[28px] lg:leading-[36px] 2xl:leading-[32px] "
        >
          <h1 className={dancing.className}>
            Únete al club! Novedades y sorteos hot
          </h1>
          <img src="/assets/logotelegram.png" alt="" className="h-8 w-8 ml-2" />
        </Link>

                <h2 className="text-black dark:text-white">Más videos:</h2>

                <div className="grid sm:grid-cols-3 gap-2 items-center justify-center cursor-pointer">
                  {AllVideos?.filter(
                    (item) => item?.thumbnailUrl !== video?.thumbnailUrl
                  ) // Filtra las imágenes para excluir la miniatura actual
                    .sort(() => Math.random() - 0.5) // Baraja el array resultante
                    .slice(0, 3) // Toma las primeras 3 imágenes
                    .map((item) => (
                      <div
                        className="relative h-[300px] w-[200px] border-2 hover:opacity-80"
                        onClick={() =>
                          router.push(`/videos/${item?.title}/${item?.id}`)
                        }
                      >
                        <img
                          src={item?.thumbnailUrl}
                          alt=""
                          className="h-[250px] w-full object-cover"
                          key={item?.id}
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                          className="bg-white rounded-full"
                        >
                          <FaCirclePlay className="w-[50px] h-[50px] text-t-red hover:opacity-80 transition-all duration-200 ease-linear" />
                        </div>

                        <h1
                          className="text-sm px-1 dark:text-white text-black"
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
                          {item?.title}
                        </h1>

                      </div>
                    ))}
                </div>
              </info>
            </detalles>
          </div>
        </contain>
      </containerinfo>
    </div>
  );
};

export default DetailsCositas;
