"use client"

import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    idiomasPrincipales,
    regiones,
    nacionalidades,
    distritos,
    preferenciasPrincipales,
  } from "@/Data/data";

const ModalFilter = ({setSelectedAtencion, resultadosEncontrados, modalFilterOpen, setModalFilterOpen, setSelectedNacionalidad, setSelectedRegion, setSelectedLugar, setSelectedIdioma, filterNothing, setFilterNothing, actionFilterNothing }) => {

    const [formContent, setFormContent] = useState({
        nacionalidad: '',
        region: '',
        lugar: '',
        idioma: '',
        atencion: ''
    })

    const handleNacionalidad = (e) => {
        e.preventDefault();
    
        setFormContent({
          ...formContent,
          nacionalidad: "",
        });
    
        const { value } = e.target;
    
        if (value) {
          setFormContent({
            ...formContent,
            nacionalidad: value,
          });
        }

        
      };
    
    const handleDepartamento = (e) => {
        e.preventDefault();
    
        setFormContent({
          ...formContent,
          region: "",
        });
    
        const { value } = e.target;
    
        if (value) {
          setFormContent({
            ...formContent,
            region: value,
          });
        }

        
      };

      const handleProvincia = (e) => {
        e.preventDefault();
    
        setFormContent({
          ...formContent,
          lugar: "",
        });
    
        const { value } = e.target;
    
        if (value) {
          setFormContent({
            ...formContent,
            lugar: value,
          });
        }
      
      };

      const handleIdioma = (e) => {
        const { value } = e.target;
    
        setFormContent({
            ...formContent,
            idioma: "",
          });
      
          if (value) {
            setFormContent({
              ...formContent,
              idioma: value,
            });
          }

      };

      const handlePreferencia = (e) => {
        const { value } = e.target;
    
        setFormContent({
            ...formContent,
            atencion: "",
          });
      
          if (value) {
            setFormContent({
              ...formContent,
              atencion: value,
            });
          }

      };

    const handleSubmit = (e) => {
        e.preventDefault()

        setSelectedNacionalidad("")
        setSelectedLugar("")
        setSelectedRegion("")
        setSelectedIdioma("")

        setSelectedNacionalidad(formContent?.nacionalidad);
        setSelectedRegion(formContent?.region);
        setSelectedLugar(formContent?.lugar);
        setSelectedIdioma(formContent?.idioma)
        setSelectedAtencion(formContent?.atencion)
        actionFilterNothing()
    }
     
        if (formContent?.nacionalidad || formContent?.region || formContent?.lugar || formContent?.idioma) {
            if (filterNothing) {
                // Solo muestra la notificación de error si se han aplicado filtros
toast.error('No se encontraron chicas.', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    style: {
      background: '#ff3d64', // Cambia el color de fondo de la notificación
      color: 'white',     // Cambia el color del texto de la notificación
    },
  });
        }
      }
    
  const distritosEncontrados = distritos.find(
    (d) => d.name === formContent.region
  );

    return (
      <div className='z-[1000] fixed flex items-center justify-center min-h-screen w-screen bg-[#000000e3]'>
        <ToastContainer autoClose={5000} theme='colored' newestOnTop={true} />
        <div className='bg-back-red rounded-[10px] p-1'>
        <modal className='relative flex flex-col items-center justify-center gap-4 rounded-[10px] w-fit h-fit bg-white px-6 py-4'>
          <h1 className='text-black font-extrabold text-3xl mt-10 border-b-4 border-bor-red'><strong className='text-t-red'>Filtrar</strong> anuncios</h1>

          <form action="" onSubmit={handleSubmit} className='flex flex-col gap-4 justify-center items-center'>
            
           <filtrosprincipales className='grid grid-cols-2 gap-2'>

            <select
                name="nacionalidad"
                id="nacionalidad"
                value={formContent.nacionalidad}
                className={`${formContent.nacionalidad ? "border-red-500 text-red-500" : "text-slate-600 border-transparent"} outline-none hover:border-2  hover:border-red-500 hover:text-red-500 transition-all ease-in-out duration-300 border-2 cursor-pointer py-2 px-4 text-[16px]  rounded-[4px] bg-slate-300 shadow-lg`}
                onChange={handleNacionalidad}
              
              >
                <option value=""  style={{backgroundColor: '#d8d8d8',  color: '#2d2d2d', cursor: "pointer" }}>Nacionalidad</option>
                {nacionalidades.map((n) => (
                  <option key={n} value={n} style={{backgroundColor: '#d8d8d8',  color: '#2d2d2d', cursor: "pointer" }}>
                    {n}
                  </option>
                ))}
              </select>

              <select
                name="region"
                id="region"
                value={formContent.region}
                onChange={handleDepartamento}
                className={`${formContent.region ? "border-red-500 text-red-500 " : "text-slate-600 border-transparent"} outline-none hover:border-2  hover:border-red-500 hover:text-red-500 transition-all ease-in-out duration-300 border-2 cursor-pointer py-2 px-4 text-[16px]  rounded-[4px] bg-slate-300 shadow-lg`}
              >
                <option value=""  style={{backgroundColor: '#d8d8d8',  color: '#2d2d2d', cursor: "pointer" }}>Departamento</option>
                {regiones.map((r) => (
                  <option key={r} value={r} style={{backgroundColor: '#d8d8d8',  color: '#2d2d2d', cursor: "pointer" }}>
                    {r}
                  </option>
                ))}
              </select>

            <select name="" id="" onChange={handleIdioma} 
           className={`${formContent.idioma ? "border-red-500 text-red-500 " : "text-slate-600 border-transparent"} outline-none hover:border-2  hover:border-red-500 hover:text-red-500 transition-all ease-in-out duration-300 border-2 cursor-pointer py-2 px-4 text-[16px]  rounded-[4px] bg-slate-300 shadow-lg`}>
                <option value=""  style={{backgroundColor: '#d8d8d8',  color: '#2d2d2d', cursor: "pointer" }}>Idioma</option>
                { idiomasPrincipales.map(i => (
                    <option key={i} className=''>
                        {i}
                    </option>
                ))}
            </select>


            <select
                name="lugar"
                id="lugar"
                value={formContent.lugar}
                onChange={handleProvincia}
                className={`${formContent.lugar ? "border-red-500 text-red-500 " : "text-slate-600 border-transparent"} outline-none hover:border-2  hover:border-red-500 hover:text-red-500 transition-all ease-in-out duration-300 border-2 cursor-pointer py-2 px-4 text-[16px]  rounded-[4px] bg-slate-300 shadow-lg`}
              >
                <option value=""  style={{backgroundColor: '#d8d8d8',  color: '#2d2d2d', cursor: "pointer" }}>Distrito</option>
                {distritosEncontrados &&
                  distritosEncontrados.places.map((r) => (
                    <option key={r} value={r}  style={{backgroundColor: '#d8d8d8',  color: '#2d2d2d', cursor: "pointer" }}>
                      {r}
                    </option>
                  ))}
              </select>

           </filtrosprincipales>
            
           <div className="flex flex-col gap-2">
              <div className="p-4 rounded-[10px] flex gap-4 text-sm items-center justify-center ">
                {preferenciasPrincipales.map((i) => (
                  <div key={i} className="flex gap-1 text-xs sm:text-sm">
                    <input
                      type="checkbox"
                      name="atencion"
                      id={i}
                      value={i}
                      checked={formContent?.atencion?.includes(i)}
                      onChange={handlePreferencia}
                    />
                    <label htmlFor={i}>{i}</label>
                    
                  </div>
                ))}
              </div>
            </div>
            

            <buttons className='flex gap-[10px] mb-5'>
                <button type='button' className='mt-4 mx-auto px-4 py-2 text-white rounded bg-red-300 hover:bg-red-500 hover:scale-110 transition-all ease-in-out duration-300' onClick={() => setModalFilterOpen(false)}>Cancelar</button>
            <button type='submit' className='mt-4 mx-auto px-4 py-2 rounded text-white bg-red-500 hover:bg-red-600  hover:scale-110 transition-all ease-in-out duration-300'>Filtrar</button>
            </buttons>
          </form>
            <button  onClick={() => setModalFilterOpen(false)} className='absolute top-0 right-0 hover:scale-125 transition-all ease-in-out duration-300 text-3xl text-red-500 font-extrabold rounded w-fit px-[10px] py-1'>
                x
            </button>
        </modal>
        </div>
      </div>
    );
  }
  
  export default ModalFilter;
  
  
  
  
  