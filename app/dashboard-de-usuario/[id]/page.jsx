"use client"

import React, { useState, useEffect } from 'react';
import axios from "axios";
import CardDeAnuncio from '@/components/DashboardUser/CardDeAnuncio';
import ModalDeleteU from '@/components/DashboardUser/ModalDeleteU';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCurrentUser from "@/hooks/customhooks/useCurrentUser";
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import { useParams } from 'next/navigation';
import { Quicksand } from 'next/font/google'

const quick = Quicksand({ subsets: ['latin'] })

const DashboardUserPage = () => {
  const [anunciosDeUsuario, setAnunciosDeUsuario] = useState([]);
  const [loader, setLoader] = useState(true); // Inicialmente, establece el loader en true

  const [isDeleted, setIsDeleted] = useState(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false)
  const [idAnuncio, setIdAnuncio] = useState()
  const [ currentUser, setCurrentUser] = useState()
  const { id } = useParams()

  console.log(id);

    const userR = useUser()
    // const id = currentUser?.id

  useEffect(() => {
    axios
      .get(`/api/anuncio/usuario/${id}`)
      .then((response) => {
        setAnunciosDeUsuario(response.data);
        setLoader(false); // Una vez que los datos se cargan con éxito, establece loader en false
      })
      .catch((error) => console.error('Hubo un error al obtener los anuncios: ', error));
  }, [id]);

  // useEffect(() => {
  //   const data = localStorage.getItem("anuncioStorage")
  //   const Anuncios = JSON.parse(data)
  //   const anunciosFound = Anuncios?.filter((a) => a?.userId === id)
  //   setAnunciosDeUsuario(anunciosFound);
  //   setLoader(false);
  // }, [])

  // useEffect(() => {

  //   window.addEventListener('beforeunload', () => {
  //       axios
  //     .get(`/api/anuncio/usuario/${id}`)
  //     .then((response) => {
  //       setAnunciosDeUsuario(response.data);
  //       setLoader(false); // Una vez que los datos se cargan con éxito, establece loader en false
  //     })
  //     .catch((error) => console.error('Hubo un error al obtener los anuncios: ', error));
  //   });
  // }, [])

  useEffect(() => {
    if (isDeleted) {
      axios
        .get(`/api/anuncio/usuario/${id}`)
        .then((response) => {
          setAnunciosDeUsuario(response.data);
          toast.success('El anuncio fue eliminado exitosamente!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true
          });
        })
        .catch((error) => console.error('Hubo un error al obtener los anuncios: ', error));
    }
  }, [id, isDeleted]);

  return (
   <div className={quick.className}>
     <div className="flex flex-col gap-4 min-h-screen min-w-screen dark:bg-dark-l bg-white">
      <ToastContainer autoClose={5000} theme='colored' newestOnTop={true} />
      <div className='my-[100px] w-full flex flex-col items-center gap-10 '>
        <div className='flex flex-col max-w-[95%] lg:max-w-[80%] gap-4'>
          {loader ? ( // Mostrar "Cargando anuncios" mientras los datos se cargan
            <p className='text-slate-400 font-bold text-xl'>Cargando anuncios...</p>
          ) : anunciosDeUsuario?.length > 0 ? (
            anunciosDeUsuario?.map((a) => (
              <CardDeAnuncio
                key={a?.id}
                id={a?.id}
                idFrontend={a?.idFrontend}
                userId={a?.userId}
                imagenPrincipal={a?.imagenPrincipal}
                estado={a?.estado}
                nivel={a?.nivel}
                views={a?.views}
                name={a?.name}
                nacionalidad={a?.nacionalidad}
                lugar={a?.lugar}
                region={a?.region}
                tarifaxhr={a?.tarifaxhr}
                edad={a?.edad}
                setModalDeleteOpen={setModalDeleteOpen}
                setIsDeleted={setIsDeleted}
                setIdAnuncio={setIdAnuncio}
                whatsapp={a?.whatsapp}
              />
            ))
          ) : (
            <div className="flex flex-col items-center gap-2 ">
              <h1 className="text-4xl font-extrabol text-slate-600 text-center dark:text-slate-200">No tienes anuncios disponibles</h1>
              <p className="text-slate-400 dark:text-slate-400 text-center text-sm px-6">Crea tu anuncio totalmente gratis y actívalo con nuestras súper promociones!</p>
              { id ? <Link
                href={'/crear-anuncio'}
                className={`bg-back-red shadow-p4 flex mt-4 text-white p-4 border-none outline-none
                rounded-[50px] text-xl mx-auto font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all duration-200 scale-[1] ease`}
              >
                Crear anuncio
              </Link> : <Link
                href={'/sign-in'}
                className={`bg-back-red shadow-p4 flex mt-4 text-white p-4 border-none outline-none
                rounded-[50px] text-xl mx-auto font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all duration-200 scale-[1] ease`}
              >
                Crear anuncio
              </Link>}
            </div>
          )}
        </div>
      </div>
      {modalDeleteOpen && <ModalDeleteU idAnuncio={idAnuncio} setModalDeleteOpen={setModalDeleteOpen} setIsDeleted={setIsDeleted} userId={id} />}
    </div>
   </div>
  );
};

export default DashboardUserPage;
