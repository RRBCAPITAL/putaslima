"use client"

import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import axios from "axios"; // Asegúrate de importar axios si no lo has hecho

const useCurrentUser = () => {
  const user = useUser();
  const [usersDb, setUsersDb] = useState();
  const [currentUser, setCurrentUser] = useState(null);

  const currentEmailUser = user?.user?.emailAddresses[0]?.emailAddress;

  useEffect(() => {
    
    // Realiza la solicitud axios dentro de useEffect
    axios
      .get('/api/user')
      .then((response) => {
        // Actualiza el estado con los datos de la respuesta
        setUsersDb(response.data);
      })
      .catch((error) => console.error('Hubo un error al obtener los usuarios: ', error));
  }, []); // El segundo argumento [] asegura que esto se ejecute solo una vez al montar el componente

  // Lógica para obtener el usuario actual
  useEffect(() => {
    if (usersDb && currentEmailUser) {
      const foundUser = usersDb && usersDb?.length > 0 && usersDb?.find(u => u?.email === currentEmailUser);
      setCurrentUser(foundUser || null);
    }
  }, [usersDb, currentEmailUser]);

  return { user, currentUser };
};

export default useCurrentUser;
