"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { useUser, UserButton } from "@clerk/nextjs";
import { MdNightlight } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import SignOutButton from "./SignOutButton";

import { Button } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motionTransitions";

import { Poppins, Chewy } from "next/font/google";
import ModalInfo from "./ModalInfo";

const quick = Poppins({ subsets: ["latin"], weight: ["400", "600"] });
const chewy = Chewy({ subsets: ["latin"], weight: "400" });

export const changeNabvar = (changeNabvarF) => {
  console.log(changeNabvarF);
  if (typeof changeNabvar === "undefined") {
    const changeNabvarF = true;
    return changeNabvarF;
  }
  return changeNabvarF;
};

const Navbar = ({ currentUserR }) => {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [changeNabvarF, setChangeNabvarF] = useState(false);
  const [openModalInfo, setOpenModalInfo] = useState(false);

  changeNabvar(changeNabvarF);

  // const [ currentUserR, setCurrentUserR] = useState()

  const userR = useUser();
  const id = currentUserR?.id;

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleModal = () => {
    setShowActive(true);
    openModal();
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

  const [isLoadingAnuncio, setIsLoadingAnuncio] = useState(false);

  const handleClick = () => {
    // Inicia la carga
    setIsLoadingAnuncio(true);

    // Simula alguna operación asincrónica, como una solicitud HTTP
    setTimeout(() => {
      // Finaliza la carga después de un tiempo de simulación
      setIsLoadingAnuncio(false);
    }, 2000); // Simulación de 2 segundos
  };

  const handleNavbarPhone = () => setShow(!show);

  return (
    <div className={quick.className}>
      <header className="z-[900] w-screen fixed dark:bg-dark-l bg-white py-0 px-[2rem]">
        

        {show ? (
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
                {!currentUserR ? (
                  <div className="flex flex-col gap-1 ">
                    <h2 className="py-[0.1rem] px-[1rem] font-bold dark:text-white text-slate-600">
                      ¡Hola!
                    </h2>
                    <h2 className="text-sm  py-[0.1rem] px-[1rem] text-slate-600">
                      Regístrate o ingresa para empezar a publicar gratis.
                    </h2>
                    <div className="flex gap-1 items-center justify-center">
                      <Link
                        href={"/sign-up"}
                        onClick={handleNavbarPhone}
                        className="w-full text-t-red border-2 border-bor-red transition-all duration-200 ease-linear flex items-center justify-center gap-[4px] py-[0.3rem] px-[1rem] outline-none
                rounded-[20px] text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] scale-[1]"
                      >
                        Registrarse
                      </Link>

                      <Link
                        href={"/sign-in"}
                        onClick={handleNavbarPhone}
                        className="w-full bg-back-red border-2 border-bor-red transition-all duration-200 ease-linear flex items-center justify-center gap-[4px] text-white py-[0.3rem] px-[1rem] outline-none
                rounded-[20px] text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] scale-[1]"
                      >
                        Ingresar
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex gap-2 dark:text-white text-slate-600 py-[0.1rem] px-[1rem]">
                      Hola {currentUserR?.firstname}{" "}
                      <UserButton afterSignOutUrl="/sign-in" />{" "}
                    </div>
                    <div className="flex flex-col gap-1 dark:text-slate-400 text-slate-600">
                      <h2 className="text-sm  py-[0.1rem] px-[1rem]">
                        Publica gratis y empieza a recibir mensajes.
                      </h2>
                      <Link
                        href={"/crear-anuncio"}
                        onClick={handleNavbarPhone}
                        className={` ${
                          pathname === "/crear-anuncio" && "bg-[#361e09]"
                        } w-[90%] flex mx-4 items-center justify-center gap-2 text-white bg-back-red py-[0.3rem] px-[0.5rem] border-2 border-bor-red outline-none
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

                {userR?.isSignedIn &&
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
                        } my-auto text-xl w-full flex gap-2 py-[0.1rem] px-[1rem] outline-none
                    rounded-[20px] text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease`}
                      >
                        Dashboard
                      </Link>
                    </>
                  )}

                {currentUserR ? (
                  <Link
                    href={`/crear-anuncio`}
                    onClick={handleNavbarPhone}
                    className={`${
                      pathname === "/crear-anuncio"
                        ? "text-t-red"
                        : "dark:text-white text-slate-600 "
                    } my-auto mt-6 text-xl w-full flex gap-2 py-[0.1rem] px-[1rem] outline-none
                    rounded-[20px] text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease`}
                  >
                    Publicar anuncio
                  </Link>
                ) : (
                  <button
                    onClick={() => setOpenModalInfo(true)}
                    className={`my-auto mt-6 text-xl w-full flex gap-2  py-[0.1rem] px-[1rem] outline-none
                    rounded-[20px] text-[16px] cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all scale-[1] ease`}
                  >
                    Publicar anuncio
                  </button>
                )}

                {theme === "dark" ? (
                  <div className="flex gap-2 dark:text-white text-slate-600 py-[0.1rem] px-[1rem] hover:scale-[1.05] transition-all scale-[1] ease">
                    <p className="my-auto text-[16px]"></p>
                    <button
                      onClick={handleChangeTheme}
                      className="rounded-full transition-all duration-300 ease"
                    >
                      <MdNightlight className="text-t-red w-6 h-6 transition-all duration-300 ease" />
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2 dark:text-white text-slate-600 py-[0.1rem] px-[1rem] hover:scale-[1.05] transition-all scale-[1] ease">
                    <p className="my-auto text-[16px]"></p>
                    <button
                      onClick={handleChangeTheme}
                      className="rounded-full transition-all duration-300 ease"
                    >
                      <MdOutlineLightMode className="text-t-red w-6 h-6 transition-all duration-300 ease" />
                    </button>
                  </div>
                )}
              </ul>

              {currentUserR && (
                <SignOutButton handleNavbarPhone={handleNavbarPhone} />
              )}
            </div>
          </motion.div>
        ) : (
          ""
        )}
      </header>

      {openModalInfo && <ModalInfo setOpenModalInfo={setOpenModalInfo} />}
    </div>
  );
};

export default Navbar;
