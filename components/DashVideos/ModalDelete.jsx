"use client";

import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ModalDelete = ({
  idAnuncio,
  setModalDeleteOpen,
  setIsDeleted,
  currentUserOk,
}) => {
  const id = idAnuncio + currentUserOk?.id;

  const updateProcess = async () => {
    const res = await axios.delete(`/api/video/delete/${id}`).catch(
      (error) => (
        console.log(error),
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
      )
    );

    console.log(res);

    if (res) {
      toast.success("El video fue eliminado exitosamente!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      });
      setIsDeleted(true); // Marcamos como editado
      localStorage.setItem("updatedAnuncio", JSON.stringify(true));
      setModalDeleteOpen(false);
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
        <modal className="relative flex flex-col items-center justify-center gap-4 rounded-[10px] w-fit h-fit bg-white px-20 py-4">
          <h1 className="text-black font-extrabold text-3xl mt-10 border-b-4 border-bor-red">
            Eliminar video
          </h1>
          {/* <h6>ID de Anuncio: {idAnuncio.substring(0, 7)}</h6> */}
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 justify-center items-center"
          >
            <buttons className="flex gap-[10px] mt-4 mb-5">
              <button
                type="button"
                className=" mx-auto px-4 py-2 text-white rounded bg-red-800 hover:bg-red-900  hover:scale-110 transition-all ease-in-out duration-300"
                onClick={() => setModalDeleteOpen(false)}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className=" mx-auto px-4 py-2 rounded text-white bg-violet-700 hover:bg-violet-800  hover:scale-110 transition-all ease-in-out duration-300"
              >
                Eliminar
              </button>
            </buttons>
          </form>
          <button
            onClick={() => setModalDeleteOpen(false)}
            className="absolute top-0 right-0 hover:scale-125 transition-all ease-in-out duration-300 text-3xl text-red-500 font-extrabold rounded w-fit px-[10px] py-1"
          >
            x
          </button>
        </modal>
      </div>
    </div>
  );
};

export default ModalDelete;
