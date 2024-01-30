"use client"

import { useEffect, useState } from "react"
import Sidebar from "../SidebarUser/Sidebar"
import axios from "axios"

const AllUsers = () => {

    const [arrUsers, setArrUsers] = useState([])

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
    
  return (

    <div className="flex">
      <div className="w-1/6">
        <Sidebar />
      </div>
      <div class="w-5/6 p-4">
    <h1 class="text-2xl font-bold mb-4">Lista de Usuarios</h1>


    <div class="overflow-x-auto">
      <table class="min-w-full table-auto">
        <thead>
          <tr>
            <th class="border px-4 py-2">Perfil</th>
            <th class="border px-4 py-2">ID</th>
            <th class="border px-4 py-2">Nombre</th>
            <th class="border px-4 py-2">Correo Electrónico</th>
            <th class="border px-4 py-2">Rol</th>
            <th class="border px-4 py-2">Acciones</th>

          </tr>
        </thead>
        <tbody>
  
          {
          arrUsers.map(arr => (
            <tr key={arr?.id}>
            <td class="border px-4 py-2"><img src={`${arr?.image}`} alt={arr?.lastname} className="h-10 w-10 mx-auto"/></td>
            <td class="border px-4 py-2">{arr?.id}</td>
            <td class="border px-4 py-2">{arr?.fullname}</td>
            <td class="border px-4 py-2">{arr?.email}</td>
            <td class="border px-4 py-2">{arr?.role}</td>
            <td class="border px-4 py-2">
              <button className="px-4 py-2 rounded-md bg-orange-600 font-extrabold text-white w-full">Editar</button>
            </td>
          </tr>
          ))
          }


        </tbody>
      </table>
    </div>
  </div>
    </div>
    
  )
}

export default AllUsers