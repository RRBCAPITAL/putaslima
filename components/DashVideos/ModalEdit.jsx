"use client";

import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ModalEdit = ({
  idAnuncio,
  userId,
  nivel,
  setModalEditOpen,
  setIsEdited,
  anuncios,
  setAnuncios,
}) => {
  const id = idAnuncio;

  const niveles = ["NOTHING", "UNDER", "MID", "ABOVE"];
  const [selectedNivel, setSelectedNivel] = useState(nivel);
  const [data, setData] = useState({
    userId: userId,
    nivel: "",
  });

  const handleNiveles = (e) => {
    const { value } = e.target;

    // Actualiza el estado con el nivel seleccionado
    setSelectedNivel(value);
    setData((prev) => ({
      ...prev,
      nivel: value,
    }));
  };

  const updateProcess = async () => {
    const res = await axios.put(`/api/video/${id}`, data).catch((error) =>
      toast.error("Ocurrió un error. Inténtalo de nuevo más tarde.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        style: {
          background: "#ff3d64", // Cambia el color de fondo de la notificación
          color: "white", // Cambia el color del texto de la notificación
        },
      })
    );

    if (res) {
      toast.success("Los datos se actualizaron exitosamente!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      });
      setIsEdited(true); // Marcamos como editado
      // Después de actualizar, vuelva a ordenar la lista de anuncios
      const updatedAnuncios = anuncios.slice(); // Crea una copia de la lista
      updatedAnuncios.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        if (dateA > dateB) return -1;
        if (dateA < dateB) return 1;
        return dateB.getTime() - dateA.getTime();
      });
      setAnuncios(updatedAnuncios); // Actualiza el estado con la lista ordenada
      localStorage.setItem("updatedAnuncio", JSON.stringify(true));
      setModalEditOpen(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProcess();
  };

  return (
    <div className="fixed flex items-center justify-center min-h-screen w-screen bg-[#000000e3]">
      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
      <div className="bg-back-red rounded-[10px] p-1">
        <modal className="relative flex flex-col items-center justify-center gap-4 rounded-[10px] w-[500px] h-fit bg-white P-4">
          <h1 className="text-black font-extrabold text-3xl mt-10 border-b-4 border-bor-red">
            <strong className="text-t-red">Actualizar</strong> video
          </h1>
          {/* <h6>ID de Anuncio: {idAnuncio.substring(0, 7)}</h6> */}
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 justify-center items-center"
          >
            <h1 className="text-xl text-white">Modos</h1>

            <niveles className="grid grid-cols-2 gap-2">
              {niveles?.map((a) => (
                <div key={a} className="mb-2 flex justify-between w-full">
                  {a === "NOTHING" ? (
                    <label className="w-full font-bold p-1 border-b-4 border-red-500 mx-4 rounded">
                      DESACTIVADO
                    </label>
                  ) : a === "UNDER" ? (
                    <label className="w-full mx-4 rounded text-center font-bold p-1 border-b-4 border-slate-600">
                      BAJO
                    </label>
                  ) : a === "MID" ? (
                    <label className="text-center mx-4 rounded w-full font-bold p-1 border-b-4 border-blue-500">
                      MEDIO
                    </label>
                  ) : (
                    <label className="mx-4 rounded text-center w-full font-bold p-1 border-b-4 border-bor-red">
                      SUPERIOR
                    </label>
                  )}

                  <input
                    type="radio"
                    value={a}
                    checked={a === selectedNivel}
                    onChange={handleNiveles}
                    className="mx-2 cursor-pointer"
                  />
                </div>
              ))}
            </niveles>

            <buttons className="flex gap-[10px] mb-5">
              <button
                type="button"
                className="mt-10 mx-auto px-4 py-2 text-white rounded bg-red-800 hover:bg-red-900  hover:scale-110 transition-all ease-in-out duration-300"
                onClick={() => setModalEditOpen(false)}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="mt-10 mx-auto px-4 py-2 rounded text-white bg-violet-700 hover:bg-violet-800  hover:scale-110 transition-all ease-in-out duration-300"
              >
                Actualizar
              </button>
            </buttons>
          </form>
          <button
            onClick={() => setModalEditOpen(false)}
            className="absolute top-0 right-0 hover:scale-125 transition-all ease-in-out duration-300 text-3xl text-red-500 font-extrabold rounded w-fit px-[10px] py-1"
          >
            x
          </button>
        </modal>
      </div>
    </div>
  );
};

export default ModalEdit;
