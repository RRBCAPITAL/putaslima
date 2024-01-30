"use client";

// // Función para generar un ID aleatorio único
// export function generateIDFrontend() {
//   let randomNumber;

//   const data = localStorage.getItem("anuncioStorage")
//   const anuncios = JSON.parse(data)

//   console.log(anuncios);

//   do {
//     // Genera un número aleatorio de 1000 a 9999 (puedes ajustar el rango según tus necesidades)
//     randomNumber = Math.floor(100 + Math.random() * 999);
//   } while (anuncios?.some(i => {
//     if (i?.idFrontend) {
//       console.log(i.idFrontend.substring(1, 3));
//       i.idFrontend.substring(1, 4) === randomNumber.toString() && true // Debes convertir randomNumber a una cadena
//     }
//     return false;
//   })); // Verifica si el número ya existe

//   console.log(randomNumber);
//   // Obtén el mes actual en forma de letra mayúscula
//   const months = [
//     "Enero",
//     "Febrero",
//     "Marzo",
//     "Abril",
//     "Mayo",
//     "Junio",
//     "Julio",
//     "Agosto",
//     "Septiembre",
//     "Octubre",
//     "Noviembre",
//     "Diciembre",
//   ];
//   const currentMonth = months[new Date().getMonth()];
//   const idFrontend = `${currentMonth.charAt(0)}${randomNumber}`;

//   console.log(idFrontend);
//   return idFrontend;
// }

// Función para generar un ID aleatorio único
export function generateIDFrontend() {
  let randomNumber;

  const data = localStorage.getItem("anuncioStorage");
  const anuncios = JSON.parse(data);

  randomNumber = Math.floor(100 + Math.random() * 999);

  console.log(randomNumber);
  // Obtén el mes actual en forma de letra mayúscula
  const abc = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "P",
    "Q",
    "X",
    "Y",
    "Z",
  ];
  const abcAleatorio = abc[Math.floor(Math.random() * abc.length)];
  const idFrontend = `${abcAleatorio}${randomNumber}`;

  const booleano = anuncios?.find((i) => {
    if (i?.idFrontend) {
      return i.idFrontend === idFrontend;
    }
    return false;
  });

  if (booleano) return generateIDFrontend();

  return idFrontend;
}
