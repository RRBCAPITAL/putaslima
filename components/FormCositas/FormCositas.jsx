"use client";

import { CldUploadButton } from "next-cloudinary";
import { FaUpload } from "react-icons/fa";
import { Poppins } from "next/font/google";
import { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
import { createCositas } from "./CreateCositas";

const quick = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

const FormCositas = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [filePrincipal, setFilePrincipal] = useState();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const parseCurrentUser = localStorage.getItem("storedUser");
    const user = JSON.parse(parseCurrentUser);

    if (!currentUser) {
      setCurrentUser(user);
    }
  }, []);

  useEffect(() => {
    setFormContent({
      ...formContent,
      userId: currentUser?.id,
    });
  }, [currentUser]);

  const id = currentUser?.id;

  const [formContent, setFormContent] = useState({
    userId: "",
    title: "",
    description: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormContent({
      ...formContent,
      [name]: value,
    });

    // Marcar el campo como tocado
    setTouchedFields({
      ...touchedFields,
      [name]: true,
    });

    // Valida el campo y configura el error correspondiente
    const fieldErrors = validation({ ...formContent, [name]: value });

    setError((prev) => ({
      ...prev,
      [name]: fieldErrors[name], // Configura el error para el campo específico
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    console.log(file);

    if (file) {
      // Valida la extensión del archivo
      const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
      const extension = file.name.split(".").pop().toLowerCase();

      if (!allowedExtensions.includes(extension)) {
        alert(
          "El archivo debe ser una imagen en formato JPG, JPEG, PNG o GIF."
        );
        e.target.value = null; // Limpia la entrada de archivo
        return;
      }

      // Valida el tamaño del archivo (en bytes)
      const maxSizeKB = 1500; // 1500KB
      if (file.size > maxSizeKB * 1024) {
        alert(`El tamaño del archivo debe ser menor o igual a ${maxSizeKB}KB.`);
        e.target.value = null; // Limpia la entrada de archivo
        return;
      }

      const reader = new FileReader();

      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;

        img.onload = () => {
          const maxWidth = 840;
          const maxHeight = 1060;

          let width = img.width;
          let height = img.height;

          // Redimensiona la imagen si excede el tamaño máximo
          if (width > maxWidth || height > maxHeight) {
            if (width / maxWidth > height / maxHeight) {
              width = maxWidth;
              height = Math.floor(maxWidth * (img.height / img.width));
            } else {
              height = maxHeight;
              width = Math.floor(maxHeight * (img.width / img.height));
            }
          }

          // Crea un lienzo de dibujo para redimensionar la imagen
          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);

          // Convierte el lienzo de dibujo en una imagen base64
          const resizedImage = canvas.toDataURL("image/jpeg");

          setSelectedImage(resizedImage);
        };
      };

      reader.readAsDataURL(file);

      setFilePrincipal(file);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      setLoading(true); // Iniciar carga

      // Imagen principal

      const formData = new FormData();
      formData.append("file", filePrincipal);

      const res = await fetch("api/cositas/imagenPrincipal", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      const imageUrl = data.imageUrl;

      const updatedFormContent = {
        ...formContent,
        imageUrl: imageUrl,
      };

      await createCositas(updatedFormContent);

      // Finalizar carga
      setLoading(false);
      setShowModal(true);
      // setLoading(false); // Finalizar carga
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const clean = () => {
    setFormContent({
      title: "",
      description: "",
      imageUrl: "",
    });

    setSelectedImage("");
    setFilePrincipal("");
  };

  return (
    <div className={quick.className}>
      <div className="w-screen h-fit dark:bg-dark-d bg-whitet flex flex-col gap-4 items-center pb-10">
        {showModal && (
          <div className="z-[210] fixed flex bg-dark-l h-full w-screen overflow-x-hidden items-center justify-center text-white">
            <section className="relative bg-[#144912] border-4 border-[#63ff41] p-10 flex flex-col items-center justify-center gap-1 mx-4">
              {/* <Link href={`/dashboard-de-usuario/${id}`} className="absolute text-red-500 font-bold top-0 right-0 text-xl p-1 bg-black hover:scale-105">
              <RiCloseFill />
            </Link> */}
              <ok className="flex flex-col items-center justify-center gap-1 mt-2">
                <img
                  width="28"
                  height="28"
                  src="/assets/check.gif"
                  alt="high-priority"
                />
                <nav className="text-center text-3xl lg:text-4xl font-extrabold">
                  Creación exitosa
                </nav>
              </ok>
              <inactive className="flex flex-col items-center justify-center gap-1">
                <nav className="text-center font-extralight text-sm">
                  Activa tu video desde el Dashboard Admin
                </nav>
                <img
                  width="18"
                  height="18"
                  src="https://img.icons8.com/color/48/high-priority.png"
                  alt="high-priority"
                />
              </inactive>
              <buttons className="flex gap-2 mt-4">
                <Link
                  href={"/dashboard/cositas"}
                  onClick={() => {
                    clean();
                  }}
                  className="p-4 bg-red-500 hover:bg-red-600 rounded text-center font-extrabold"
                >
                  Aceptar
                </Link>
              </buttons>
            </section>
          </div>
        )}
        {loading && (
          <div className="z-[210] fixed bg-[#000000e6] flex h-full w-screen items-center justify-center text-white font-extrabold">
            <nav className=" absolute text-center text-2xl lg:text-3xl">
              Creando anuncio
            </nav>
            <div class="flex flex-row gap-2 mt-[100px] lg:mt-[120px]">
              <div class="w-10 h-10 rounded-full bg-back-red animate-bounce [animation-delay:.7s]"></div>
              <div class="w-10 h-10 rounded-full bg-back-red animate-bounce [animation-delay:.3s]"></div>
              <div class="w-10 h-10 rounded-full bg-back-red animate-bounce [animation-delay:.7s]"></div>
            </div>
          </div>
        )}
        <titulo className="dark:text-whitet text-blackt mt-[100px] font-bold text-3xl border-b-4 border-bor-red">
          <strong className="text-t-red">CREAR</strong> COSITA
        </titulo>
        <div className="dark:bg-dark-l bg-whitet shadow-2xl p-10 rounded-[10px] w-fit sm:w-[500px]">
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            action=""
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2 justify-between">
              <label htmlFor="name" className="dark:text-whitet text-blackt">
                Título:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formContent.title}
                onChange={handleChange}
                placeholder=""
                className="focus:ring focus:ring-yellow-400 focus:bg-yellow-50 dark:focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 p-[10px] border-2 dark:text-whitet text-blackt bg-whitet dark:bg-dark-d  dark:focus:text-blackt border-bor-red rounded-[10px] outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 justify-between">
              <label htmlFor="" className="dark:text-whitet text-blackt">
                Descripción:
              </label>
              <textarea
                type="text"
                id="description"
                name="description"
                cols="10"
                rows="8"
                value={formContent.description}
                onChange={handleChange}
                style={{ resize: "none" }}
                placeholder="​"
                className="focus:ring focus:ring-yellow-400 focus:bg-yellow-50 w-full dark:focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 p-[10px] border-2 dark:text-whitet text-blackt bg-whitet dark:bg-dark-d  dark:focus:text-blackt border-bor-red rounded-[10px] outline-none "
              />
            </div>

            <div className="flex flex-col gap-2 w-[300px] sm:w-full mx-auto">
              <label
                htmlFor="name"
                className="dark:text-whitet text-blackt flex gap-4"
              >
                Imagen principal
                <nav className="dark:text-whitet text-blackt text-sm mt-[3px]">
                  (Ancho: 1350px, Alto: 1000px)
                </nav>
              </label>
              <input
                type="file"
                onChange={handleImageChange}
                accept="image/jpeg, image/png, image/gif"
                className="p-[10px] border-2 dark:text-whitet text-blackt border-bor-red rounded-[10px] outline-none"
              />
              {selectedImage && (
                <div>
                  <h2 className="dark:text-whitet text-blackt">
                    Imagen seleccionada:
                  </h2>
                  <img src={selectedImage} alt="Vista previa de la imagen" />
                </div>
              )}
            </div>

            <containbuttons className="grid grid-cols-2 gap-4 pt-4">
              <button
                type="button"
                className="bg-transparent border-2 border-bor-red shadow-p4 p-4 rounded-[10px] text-t-red hover:bg-[#fff] duration-200 ease-linear transition-all font-bold mb-10"
              >
                Limpiar
              </button>
              <button
                type="submit"
                className="bg-back-red shadow-p4 red p-4 rounded-[10px] text-white hover:bg-[#ff8c57] duration-200 ease-linear transition-all font-bold mb-10"
              >
                Crear Anuncio
              </button>
            </containbuttons>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormCositas;
