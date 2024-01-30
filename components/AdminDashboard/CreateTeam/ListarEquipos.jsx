"use client"

import { useEffect, useState } from "react"
import Sidebar from "../Sidebar/Sidebar"
import axios from "axios"
import { CreateTeamPeticion } from "./CreateTeamPeticion"

const ListarEquipos = () => {

    const [arrUsers, setArrUsers] = useState([])
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [allTeamsArray, setAllTeamsArray] = useState([])

    useEffect(() => {
        // Realiza la solicitud axios dentro de useEffect
        axios
          .get('/api/user')
          .then((response) => {
            // Actualiza el estado con los datos de la respuesta
            setArrUsers(response?.data);
          })
          .catch((error) => console.log('Hubo un error al obtener los usuarios: ', error));
      }, []); // El segundo argumento [] asegura que esto se ejecute solo una vez al montar el componente

    console.log(arrUsers);
    
    const UsersPay = arrUsers?.filter(u => u?.pago === "PAGO")

    const equiposAgrupados = {};

// Iterar a través de teamsArr y agrupar los objetos por número de equipo
for (const objeto of UsersPay) {
  const { equipment } = objeto;
  if (!equiposAgrupados[equipment]) {
    equiposAgrupados[equipment] = [];
  }
  equiposAgrupados[equipment].push(objeto);
}

// Crear un array que contenga todos los arrays de objetos de equipos
const equiposArray = Object.values(equiposAgrupados);

    const handleChange = (e, id) => {
        const isChecked = e.target.checked;
    
        if (isChecked) {
          setSelectedUsers([...selectedUsers, id]); // Agregar el objeto de usuario al array si el checkbox está marcado
        } else {
          setSelectedUsers(selectedUsers.filter(u => u.id !== id)); // Quitar el objeto de usuario del array si el checkbox está desmarcado
        }
      };

      console.log(selectedUsers)
      
  return (

    <div className="flex">
      <div className="hidden sm:block w-1/6">
        <Sidebar />
      </div>
      <div class="w-full sm:w-5/6 p-4">
    <button class="text-xl font-bold my-4 p-1 border-b-4 border-bor-dark  text-t-dark rounded">Equipos Disponibles</button>
    <h6>Solo se muestran los usuarios que han realizado el pago correspondiente.</h6>

    <section className="flex flex-col gap-4">
    {equiposArray?.map((equipo, index) => (
      <div key={index} className="rounded-lg border-4 border-bor-light">
        <div key={index} className="flex gap-10 p-4 bg-back-light text-white font-bold">
    <h1 className="font-extrabold">Equipo {index + 1}</h1>
  </div>
  <div className="overflow-x-auto" key={`table-${index}`}>
    <table className="min-w-full table-auto">
      <thead className="bg-[#f1dbff]">
        <tr>
          <th className="border px-4 py-2">Perfil</th>
          <th className="border px-4 py-2">ID</th>
          <th className="border px-4 py-2">Nombre</th>
          <th className="border px-4 py-2">Correo Electrónico</th>
          <th className="border px-4 py-2">Celular</th>
          <th className="border px-4 py-2">Enfoque</th>
          <th className="border px-4 py-2">Stack De Tecnologías</th>
          <th className="border px-4 py-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {equipo.map((arr) => (
          <tr key={arr.id} className="text-sm">
            {/* Renderizar la información de cada usuario en el equipo */}
            <td className="border px-4 py-2">
              <img src={`${arr.image}`} alt={arr.lastname} className="h-10 w-10 mx-auto" />
            </td>
            <td className="border px-4 py-2">{arr.id}</td>
            <td className="border px-4 py-2">{arr.fullname}</td>
            <td className="border px-4 py-2">{arr.email}</td>
            <td className="border px-4 py-2">{arr.phone}</td>
            <td className="border px-4 py-2">{arr.enfoque}</td>
            <td className="border px-2 py-0">
              <textarea name="" id="" cols="30" rows="2" className="p-0">
                {arr.stackTechs}
              </textarea>
            </td>
            <td className="border px-4 py-2">
              <button className="px-4 py-2 rounded-md bg-orange-600 font-extrabold text-white w-full">
                Editar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
      </div>
      ))}
    </section>

  </div>
    </div>
    
  )
}

export default ListarEquipos;