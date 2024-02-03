"use client";

import { useEffect, useRef } from "react";
import { useState } from "react";
import { TbFilterStar } from "react-icons/tb";
import ModalFilter from "../ModalFilter";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { useUser, UserButton } from "@clerk/nextjs";
import { MdNightlight } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

import { motion, useAnimation } from "framer-motion";
import { changeIn } from "@/utils/motionTransitions";

import { categorias, categoriasNameIcon, categoriasS } from "@/Data/data";
import Link from "next/link";

import "./styles.css";

import { Poppins, Chewy } from "next/font/google";
import ModalInfo from "@/components/NavBar/ModalInfo";

const chewy = Chewy({ subsets: ["latin"], weight: "400" });
const quick = Poppins({ subsets: ["latin"], weight: "400" });

export const changeNabvar = (changeNabvarF) => {
  console.log(changeNabvarF);
  if (typeof changeNabvar === "undefined") {
    const changeNabvarF = true;
    return changeNabvarF;
  }
  return changeNabvarF;
};

const Filtros = ({
  setCategoria,
  setTextSearch,
  setActive,
  active,
  setModalFilterOpen,
  setSelectedNacionalidad,
  setSelectedRegion,
  setSelectedLugar,
  setSelectedIdioma,
}) => {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [changeNabvarF, setChangeNabvarF] = useState(false);
  const [openModalInfo, setOpenModalInfo] = useState(false);
  const [currentUserR, setCurrentUserR] = useState();

  const [nombreid, setNombreid] = useState();

  const [scrollDirection, setScrollDirection] = useState("down");
  const controls = useAnimation();

  changeNabvar(changeNabvarF);

  const handleCategoriaChange = (e) => {
    const selectedCategoria = e.target.value;
    setCategoria(selectedCategoria);
    setActive(selectedCategoria);

    // Realiza otras acciones según sea necesario
    if (selectedCategoria === "Escort") {
      handleReset();
    }
  };

  if (typeof window !== "undefined") {
    // Recuperar el estado del tema desde el almacenamiento local si está disponible
    const initialTheme =
      localStorage?.getItem("theme") ||
      (window?.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    var [theme, setTheme] = useState(initialTheme);

    // Cambiar el tema
    var handleChangeTheme = () => {
      const newTheme = theme === "dark" ? "light" : "dark";
      setTheme(newTheme);
      // Guardar el nuevo tema en el almacenamiento local
      localStorage?.setItem("theme", newTheme);
      handleNavbarPhone();
    };

    useEffect(() => {
      const data = localStorage.getItem("user");
      data;
    }, []);

    // Aplicar la clase 'dark' al cuerpo del documento según el estado del tema
    useEffect(() => {
      const bodyElement = document.querySelector("body");
      if (theme === "dark") {
        bodyElement.classList.add("dark");
      } else {
        bodyElement.classList.remove("dark");
      }
    }, [theme]);
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 50 && scrollDirection === "down") {
        setScrollDirection("up");
        controls.start({ y: -100, opacity: 0 });
      } else if (scrollTop <= 50 && scrollDirection === "up") {
        setScrollDirection("down");
        controls.start({ y: 0, opacity: 1 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollDirection, controls]);

  const handleClickSearch = (e) => {
    const { value } = e.target;
    setNombreid(value);
    setTextSearch(value);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      // Si se presiona la tecla Enter, ejecuta la búsqueda
      handleClickSearch();
    }
  };

  const handleReset = () => {
    // setNombreid("");
    // setTextSearch(nombreid),
    //   setSelectedNacionalidad(""),
    //   setSelectedIdioma(""),
    //   setSelectedLugar(""),
    //   setSelectedRegion("");
    setCategoria("");
  };

  const l = categoriasNameIcon?.length;

  console.log(nombreid);

  return (
    <div className={quick.className}>
      <motion.div
        variants={changeIn(0.3)}
        initial="show"
        animate={controls}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        exit="hidden"
        className="z-[999] flex flex-col p-4 text-white bg-back-red dark:bg-dark-l overflow-hidden w-[72%] mx-auto rounded-[20px] mt-10"
      >
        <div className="w-full h-[50px] mx-auto flex items-center justify-between">
          <div className="text-[1rem] font-bold">
            <Link
              href={"/"}
              onClick={() => {
                setShow(false);
                setChangeNabvarF(!changeNabvarF);
              }}
              className={`${chewy.className} font-extrabold text-4xl text-orange-500 p-2 rounded`}
            >
              KINESIOLOGAS
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="flex gap-[0.8rem]">
              {theme === "dark" ? (
                <button
                  onClick={handleChangeTheme}
                  className=" rounded-full px-[10px] transition-all duration-300 ease-in-out"
                >
                  <MdOutlineLightMode className="text-t-red w-6 h-6 transition-all duration-300 ease-in-out" />
                </button>
              ) : (
                <button
                  onClick={handleChangeTheme}
                  className="rounded-full px-[10px] transition-all duration-300 ease-in-out"
                >
                  <MdNightlight className="text-t-red w-6 h-6 transition-all duration-300 ease-in-out" />
                </button>
              )}

              {currentUserR &&
                (currentUserR?.role === "ADMIN" ||
                  currentUserR?.role === "SUPER_ADMIN") && (
                  <>
                    <Link
                      href={"/dashboard"}
                      className={`${
                        pathname === "/dashboard" && "bg-[#dcd7ff]"
                      } transition-all duration-200 ease-linear flex gap-[4px] border-2 border-bor-red  text-white py-[0.3rem] px-[0.8rem]
                    text-[14px] font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] scale-[1] ease`}
                    >
                      <h3 className="my-auto text-t-red">Dashboard</h3>
                      <FaUserCheck className="my-auto text-t-red" />
                    </Link>
                  </>
                )}

              {/* {!currentUserR ? (
                <Link
                  href={"/sign-in"}
                  className="bg-red-100 border-2 border-bor-red transition-all duration-200 ease-linear flex gap-[4px] text-[#fff7d3] py-[0.3rem] px-[0.8rem] outline-none
                 text-[14px] font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] scale-[1]"
                >
                  <nav className="inline-block text-t-red">Iniciar Sesión</nav>
                </Link>
              ) : (
                <div className="my-auto border-2 scale-[1.1] border-bor-red rounded-full">
                  <UserButton afterSignOutUrl="/sign-in" />
                </div>
              )} */}

              {currentUserR ? (
                <>
                  <Link
                    href={`/dashboard-de-usuario/${id}`}
                    className={`${
                      pathname === `/dashboard-de-usuario/${id}` && "bg-red-100"
                    } transition-all duration-200 ease-linear flex gap-[4px] border-2 border-bor-red  text-white py-[0.3rem] px-[0.8rem]
                   text-[14px] font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] scale-[1] ease`}
                  >
                    <h3 className="my-auto text-t-red">Mis anuncios</h3>
                    <FaUserCheck className="my-auto text-t-red" />
                  </Link>
                  <div className="my-auto border-2 scale-[1.1] border-bor-red rounded-full">
                    <UserButton afterSignOutUrl="/sign-in" />
                  </div>
                  <Link
                    href={"/crear-anuncio"}
                    className={`bg-orange-500 shadow-p4 hover:shadow transition-all duration-200 ease-linear flex gap-[4px] text-white py-[10px] px-[0.8rem] border-none outline-none
                  text-[14px] font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] scale-[1]`}
                  >
                    <Button
                      variant="outline"
                      isLoading={isLoadingAnuncio} // Utiliza el estado de isLoading de Chakra UI
                      loadingText="Cargando"
                      onClick={handleClick} // Llama a la función cuando se hace clic
                    >
                      Publicar anuncio
                    </Button>
                  </Link>
                </>
              ) : (
                <button
                  className={`bg-orange-500 rounded-[10px] shadow-p4 hover:shadow transition-all duration-200 ease-linear flex gap-[4px] text-white py-[10px] px-[0.8rem] border-none outline-none
                text-[14px] font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] scale-[1]`}
                  onClick={() => setOpenModalInfo(true)}
                >
                  Publicar anuncio
                </button>
              )}
            </div>
          </div>
        </div>
        {/*
          
          <div className='flex flex-col lg:flex-row gap-1 items-center justify-center'>
       <div className='flex gap-1 items-center justify-center'>
       <button
          type='submit'
          className='flex gap-2 my-auto text-xl font-bold p-4 bg-back-red hover:bg-[#ff894a] transition-all ease-linear duration-300 rounded-[10px]'
          
          >
            <nav className='my-auto text-sm lg:text-xl font-extrabold text-white'>Buscar</nav>
            <TbFilterStar className='my-auto text-white'/>
        </button>
        <button className='flex gap-2 my-auto text-xl font-bold p-4 bg-slate-600 hover:bg-slate-700 transition-all ease-linear duration-300 rounded-[10px]' onClick={() => setModalFilterOpen(true)}>
            <nav className='my-auto text-sm lg:text-xl font-extrabold text-white'>Filtrar</nav>
            <TbFilterStar className='my-auto text-white'/>
        </button>
       </div>

        <button className='flex gap-2 my-auto text-xl font-bold p-4 bg-[#542eff] hover:bg-[#3f01aa] transition-all ease-linear duration-300 rounded-[10px]' onClick={handleReset}>
            <nav className='my-auto text-sm lg:text-xl font-extrabold text-white'>Ver todas las chicas</nav>
            <TbFilterStar className='my-auto text-white'/>
        </button>
        </div>
          
        </form> */}

        <div
          onKeyUp={handleKeyUp}
          className="lg:h-[46px] flex sm:flex-row flex-col w-[100%] mt-4 gap-2"
        >
          <div className="flex gap-1 w-full items-center justify-center">
            <input
              type="text"
              name="nombreid"
              value={nombreid}
              onChange={handleClickSearch}
              className="w-[90%] lg:w-[85%] rounded-[10px] sm:h-[46px] active:text-[#818181] my-auto outline-none text-sm sm:text-[16px] bg-white dark:bg-black border-2 border-[#e3e3e3] p-4 placeholder:text-[#818181] placeholder:font-medium placeholder:text-[16px] text-black dark:text-[#818181]"
              placeholder="Busca por ciudad o distrito"
            />
            <div className="lg:h-[46px] mt-4 lg:mt-0 flex sm:flex-row flex-col w-[15%] gap-2">
              <select
                value={active} // Asumiendo que 'active' es el valor seleccionado
                onChange={handleCategoriaChange}
                className="flex lg:h-[46px] bg-orange-500 rounded-[10px] text-white outline-none w-full flex-col sm:flex-row gap-2 sm:gap-4 lg:mx-0 lg:px-[1.5rem] overflow-hidden"
              >
                <option value="">FILTROS</option>
                {categorias.map((i, index) => (
                  <option key={index} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </motion.div>
      {openModalInfo && <ModalInfo setOpenModalInfo={setOpenModalInfo} />}
    </div>
  );
};

export default Filtros;
