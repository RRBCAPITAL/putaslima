
export const postNewUser = async (data) => {
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
  
      if (!response.ok) {
        // Si la respuesta no es exitosa (código de estado no está en el rango 200-299),
        // arrojamos un error con la respuesta.
        throw new Error(`Error en la solicitud POST: ${response.status} - ${response.statusText}`);
      }
  
      const jsonData = await response.json();
      return jsonData; // Devolvemos los datos si la respuesta es exitosa.
    } catch (error) {
      // Manejo de errores: podemos imprimir el error y devolver un objeto de error personalizado.
      console.error(error);
      throw new Error("Hubo un problema al procesar la solicitud.");
    }
  };