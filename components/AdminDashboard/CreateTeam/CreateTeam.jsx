"use client"

import { useEffect, useState } from "react"
import Sidebar from "../Sidebar/Sidebar"
import axios from "axios"
import { CreateTeamPeticion } from "./CreateTeamPeticion"

const CreateTeam = () => {

    const [arrUsers, setArrUsers] = useState([])
    const [selectedUsers, setSelectedUsers] = useState([]);

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

    console.log(UsersPay.length)

    const handleChange = (e, id) => {
        const isChecked = e.target.checked;
    
        if (isChecked) {
          setSelectedUsers([...selectedUsers, id]); // Agregar el objeto de usuario al array si el checkbox está marcado
        } else {
          setSelectedUsers(selectedUsers.filter(u => u.id !== id)); // Quitar el objeto de usuario del array si el checkbox está desmarcado
        }
      };

      console.log(selectedUsers)

      const handleCreate = () => {

          const data = selectedUsers.map(u => {
            return {
                id: u
            }
          })
          console.log(data);
          CreateTeamPeticion(data)
      }
      
  return (

    <div className="flex">
      <div className="w-1/6">
        <Sidebar />
      </div>
      <div class="w-5/6 p-4">
    <button class="text-2xl font-bold mb-4 p-4 bg-back-light text-white rounded" onClick={handleCreate}>Crear Equipo</button>
    <h6>Solo se muestran los usuarios que han realizado el pago correspondiente.</h6>


    <div class="overflow-x-auto">
      <table class="min-w-full table-auto">
        <thead>
          <tr>
            <th class="border px-4 py-2"></th>
            <th class="border px-4 py-2">Perfil</th>
            <th class="border px-4 py-2">ID</th>
            <th class="border px-4 py-2">Nombre</th>
            <th class="border px-4 py-2">Correo Electrónico</th>
            <th class="border px-4 py-2">Rol</th>
            <th class="border px-4 py-2">Enfoque</th>
            <th class="border px-4 py-2">Stack De Tecnologias</th>
            <th class="border px-4 py-2">Pago</th>
            <th class="border px-4 py-2">Equipo</th>
            <th class="border px-4 py-2">Estado</th>
            <th class="border px-4 py-2">Acciones</th>

          </tr>
        </thead>
        <tbody>
  
          {
          UsersPay?.map(arr => (
            <tr key={arr?.id}>
                { console.log(arr)}
            <td class="border px-4 py-2">
            <input
                      onChange={(e) => handleChange(e, arr.id)}
                      type="checkbox"
                      checked={selectedUsers.includes(arr.id)}
                      name="myCheckbox"
                      className=""
                    />
            </td>
            <td class="border px-4 py-2"><img src={`${arr?.image}`} alt={arr?.lastname} className="h-10 w-10 mx-auto"/></td>
            <td class="border px-4 py-2">{arr?.id}</td>
            <td class="border px-4 py-2">{arr?.fullname}</td>
            <td class="border px-4 py-2">{arr?.email}</td>
            <td class="border px-4 py-2">{arr?.role}</td>
            <td class="border px-4 py-2">{arr?.enfoque}</td>
            <td class="border px-4 py-2">
              <textarea name="" id="" cols="30" rows="3" className="p-2">{arr?.stackTechs}</textarea>
            </td>
            <td class="border px-4 py-2">{arr?.pago === "NO_PAGO" ? "❌NO" : "✅OK" }</td>
            <td class="border px-4 py-2">{!arr?.teams ? "❌NO" : "✅OK" }</td>
            <td class="border px-4 py-2">{arr?.estado}</td>
        
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

export default CreateTeam;