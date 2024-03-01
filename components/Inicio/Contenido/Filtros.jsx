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
import { fadeIn } from "@/utils/motionTransitions";

import { categorias, categoriasNameIcon, categoriasS } from "@/Data/data";
import Link from "next/link";

import SignOutButton from "@/components/NavBar/SignOutButton";

import "./styles.css";

import { Poppins, Chewy } from "next/font/google";
import ModalInfo from "@/components/NavBar/ModalInfo";
import Image from "next/image";

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

  const userR = useUser();
  console.log(userR);
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

    // useEffect(() => {
    //   const data = localStorage.getItem("storedUser");
    //   const user = JSON.parse(data);
    //   if (user) setCurrentUserR(user);
    // }, []);

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

  const handleNavbarPhone = () => setShow(!show);

  return (
    <div className={quick.className}>
      <motion.div
        variants={changeIn(0.3)}
        initial="show"
        animate={controls}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        exit="hidden"
        className="z-[999] flex flex-col p-4 text-white bg-back-red overflow-hidden w-[92%] lg:w-[72%] mx-auto rounded-[20px] mt-10"
      >
        <div className="w-full h-[50px] mx-auto flex items-center justify-between">
          <div className="text-[1rem] font-bold">
            <Link
              href={"/"}
              onClick={() => {
                setShow(false);
                setChangeNabvarF(!changeNabvarF);
              }}
              className={`${chewy.className} font-extrabold text-4xl text-t-red-l p-2 rounded`}
            >
              <Image
                width={180}
                height={80}
                src={"/assets/kinestop.png"}
                className=""
              />
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="flex gap-[0.8rem]">
              {theme === "dark" ? (
                <button
                  onClick={handleChangeTheme}
                  className=" rounded-full px-[10px] transition-all duration-300 ease-in-out"
                >
                  <MdOutlineLightMode className="text-t-red-l w-6 h-6 transition-all duration-300 ease-in-out" />
                </button>
              ) : (
                <button
                  onClick={handleChangeTheme}
                  className="rounded-full px-[10px] transition-all duration-300 ease-in-out"
                >
                  <MdNightlight className="text-t-red-l w-6 h-6 transition-all duration-300 ease-in-out" />
                </button>
              )}

              {/* {currentUserR &&
                (currentUserR?.role === "ADMIN" ||
                  currentUserR?.role === "SUPER_ADMIN") && (
                  <>
                    <Link
                      href={"/dashboard"}
                      className={`bg-back-red-l transition-all duration-200 ease-linear flex gap-[4px] border-2 border-bor-red  text-white py-[0.3rem] px-[0.8rem]
                    text-[14px] font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] scale-[1] ease`}
                    >
                      <h3 className="my-auto text-white">Dashboard</h3>
                      <FaUserCheck className="my-auto text-white" />
                    </Link>
                  </>
                )} */}

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

              {/* {currentUserR ? (
                <>
                  <Link
                    href={`/dashboard-de-usuario/${currentUserR?.id}`}
                    className={`bg-back-red-l transition-all duration-200 ease-linear flex gap-[4px] border-2 border-bor-red  text-white py-[0.3rem] px-[0.8rem]
                   text-[14px] font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] scale-[1] ease`}
                  >
                    <h3 className="my-auto text-white">Mis anuncios</h3>
                    <FaUserCheck className="my-auto text-white" />
                  </Link>
                  <div className="my-auto border-2 scale-[1.1] border-bor-red rounded-full">
                    <UserButton afterSignOutUrl="/sign-in" />
                  </div>
                  <Link
                    href={"/crear-anuncio"}
                    className={`bg-back-red-l shadow-p4 hover:shadow transition-all duration-200 ease-linear flex gap-[4px] text-white py-[10px] px-[0.8rem] border-none outline-none
                  text-[14px] font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] scale-[1]`}
                  >
                    <button>Publicar anuncio</button>
                  </Link>
                </>
              ) : (
                <button
                  className={`bg-back-red-l rounded-[10px] shadow-p4 hover:shadow transition-all duration-200 ease-linear flex gap-[4px] text-white py-[10px] px-[0.8rem] border-none outline-none
                text-[14px] font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] scale-[1]`}
                  onClick={() => setOpenModalInfo(true)}
                >
                  Publicar anuncio
                </button>
              )} */}
              <Link
                target="_blank"
                href={`https://api.whatsapp.com/send?phone=+51931550980&text=Hola,%20quiero%20crear%20un%20anuncio%20en%20Kinestop.com`}
                className={`bg-back-red-l rounded-[10px] shadow-p4 hover:shadow transition-all duration-200 ease-linear flex gap-[4px] text-white py-[12px] px-[1rem] border-none outline-none
                    text-[14px] font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] scale-[1]`}
              >
                Crear anuncio
              </Link>
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
          <div className="flex flex-col lg:flex-row gap-1 w-full items-center justify-center">
            <input
              type="text"
              name="nombreid"
              value={nombreid}
              onChange={handleClickSearch}
              className="w-[90%] lg:w-[85%] rounded-[10px] sm:h-[46px] active:text-[#818181] my-auto outline-none text-sm sm:text-[16px] bg-white border-2 border-[#e3e3e3] p-4 placeholder:text-[#818181] placeholder:font-medium placeholder:text-[16px] text-black"
              placeholder="Busca por ciudad o distrito"
            />
            <div className="lg:h-[46px] lg:mt-0 flex sm:flex-row flex-col w-[70%] lg:w-[15%] gap-2 ">
              <select
                value={active} // Asumiendo que 'active' es el valor seleccionado
                onChange={handleCategoriaChange}
                className="flex lg:h-[46px]  bg-back-red-l p-2 rounded-[10px] text-white outline-none w-full flex-col sm:flex-row gap-2 sm:gap-4 lg:mx-0 lg:px-[1.5rem] overflow-hidden"
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
        <div
          className="absolute top-[50px] right-[30px] lg:hidden"
          onClick={handleNavbarPhone}
        >
          <div className="text-t-red-l text-[1.5rem] cursor-pointer flex-none">
            {show ? <MdOutlineClose /> : <FiMenu />}
          </div>
        </div>
      </motion.div>
      {openModalInfo && <ModalInfo setOpenModalInfo={setOpenModalInfo} />}
      {show && (
        <motion.div
          className="z-50 lg:hidden fixed left-[0rem] h-screen w-screen dark:bg-[#131313] bg-white dark:text-t-dark backdrop:blur-[15px]
            overflow-hidden transition-nicetransition"
          variants={fadeIn("left", 0)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <div className="flex flex-col justify-between gap-1 my-2">
            <ul className="flex flex-col text-2xl gap-0 p-[0.1rem] my-4 ">
              {!userR.user ? (
                <div className="flex flex-col gap-1 ">
                  <h2 className="py-[0.1rem] px-[1rem] font-bold dark:text-white text-slate-600">
                    ¡Hola!
                  </h2>
                  <h2 className="text-sm  py-[0.1rem] px-[1rem] text-slate-600 dark:text-slate-200">
                    Regístrate o ingresa para empezar a publicar gratis.
                  </h2>
                  <div className="flex gap-1 items-center justify-center">
                    <Link
                      href={"/sign-up"}
                      onClick={handleNavbarPhone}
                      className="w-full  bg-back-red-l text-white border-2 border-bor-red transition-all duration-200 ease-linear flex items-center justify-center gap-[4px] py-[0.3rem] px-[1rem] outline-none
                rounded-[20px] text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] scale-[1]"
                    >
                      Registrarse
                    </Link>

                    <Link
                      href={"/sign-in"}
                      onClick={handleNavbarPhone}
                      className="w-full bg-back-red-l border-2 border-bor-red transition-all duration-200 ease-linear flex items-center justify-center gap-[4px] text-white py-[0.3rem] px-[1rem] outline-none
                rounded-[20px] text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] scale-[1]"
                    >
                      Ingresar
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex gap-2 dark:text-white text-slate-600 py-[0.1rem] px-[1rem]">
                    Hola
                    <UserButton afterSignOutUrl="/sign-in" />{" "}
                  </div>
                  <div className="flex flex-col gap-1 dark:text-slate-400 text-slate-600">
                    <h2 className="text-sm  py-[0.1rem] px-[1rem]">
                      Publica gratis y empieza a recibir mensajes.
                    </h2>
                    <Link
                      target="_blank"
                      href={`https://api.whatsapp.com/send?phone=+51931550980&text=Hola,%20quiero%20crear%20un%20anuncio%20en%20Kinestop.com`}
                      className={` w-[90%] flex mx-4 items-center justify-center gap-2 text-white bg-back-red-l py-[0.3rem] px-[0.5rem] border-2 border-bor-red outline-none
                    rounded-[20px] text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease`}
                    >
                      <h3 className="my-auto">Publicar gratis</h3>
                      <FaUserCheck className="my-[4px] h-6 w-6" />
                    </Link>
                  </div>
                </>
              )}

              {/* <Link
                  href={"/"}
                  onClick={handleNavbarPhone}
                  className={` ${
                    pathname === "/"
                      ? "text-t-red"
                      : "dark:text-white text-slate-600"
                  } my-auto text-xl w-full flex gap-2 py-[0.1rem] px-[1rem] outline-none
                    rounded-[20px] text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease`}
                >
                  Mujeres
                </Link> */}
              {/* <Link
                  href={`/dashboard-de-usuario/${id}`}
                  onClick={handleNavbarPhone}
                  className={` ${
                    pathname === `/dashboard-de-usuario/${id}`
                      ? "text-t-red"
                      : "dark:text-white text-slate-600"
                  } my-auto text-xl w-full flex gap-2 py-[0.1rem] px-[1rem] outline-none
                    rounded-[20px] text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease`}
                >
                  Mis anuncios
                </Link> */}

              {/* {userR?.isSignedIn &&
                (currentUserR?.role === "ADMIN" ||
                  currentUserR?.role === "SUPER_ADMIN") && (
                  <>
                    <Link
                      href={`/dashboard`}
                      onClick={handleNavbarPhone}
                      className={` ${
                        pathname === "/dashboard"
                          ? "text-t-red"
                          : "dark:text-white text-slate-600"
                      } my-auto text-xl w-full mt-2 flex gap-2 py-[0.1rem] px-[1rem] outline-none
                    rounded-[20px] text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease`}
                    >
                      Dashboard
                    </Link>
                  </>
                )} */}

              {/* {userR.user ? (
                <Link
                target="_blank"
                href={`https://api.whatsapp.com/send?phone=+51931550980&text=Hola,%20quiero%20crear%20un%20anuncio%20en%20Kinestop.com`}
                className={` w-[90%] flex mx-4 items-center justify-center gap-2 text-white bg-back-red-l py-[0.3rem] px-[0.5rem] border-2 border-bor-red outline-none
              rounded-[20px] text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease`}
              >
                <h3 className="my-auto">Publicar anuncio</h3>
                <FaUserCheck className="my-[4px] h-6 w-6" />
              </Link>
              ) : (
                <button
                  onClick={() => setOpenModalInfo(true)}
                  className={`my-auto dark:text-white mt-6 text-xl w-full flex gap-2  py-[0.1rem] px-[1rem] outline-none
                    rounded-[20px] text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease`}
                >
                  Publicar anuncio
                </button>
              )} */}

              {theme === "dark" ? (
                <div className="flex gap-2 dark:text-white text-slate-600 py-[0.1rem] px-[1rem] hover:scale-[1.05] transition-all scale-[1] ease">
                  <p className="my-auto text-[16px]"></p>
                  <button
                    onClick={handleChangeTheme}
                    className="rounded-full transition-all duration-300 ease"
                  >
                    <MdNightlight className="text-t-red-l w-6 h-6 transition-all duration-300 ease" />
                  </button>
                </div>
              ) : (
                <div className="flex gap-2 dark:text-white text-slate-600 py-[0.1rem] px-[1rem] hover:scale-[1.05] transition-all scale-[1] ease">
                  <p className="my-auto text-[16px]"></p>
                  <button
                    onClick={handleChangeTheme}
                    className="rounded-full transition-all duration-300 ease"
                  >
                    <MdOutlineLightMode className="text-t-red-l w-6 h-6 transition-all duration-300 ease" />
                  </button>
                </div>
              )}
            </ul>

            {userR.user && (
              <SignOutButton handleNavbarPhone={handleNavbarPhone} />
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Filtros;
