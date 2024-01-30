export function ordenarDiasYGenerarString(selectedDays) {
  // Define un mapa para mapear los códigos de días a nombres
  
  const dayMap = {
    LU: "Lunes",
    MA: "Martes",
    MI: "Miércoles",
    JU: "Jueves",
    VI: "Viernes",
    SA: "Sábado",
    DO: "Domingo",
  };

  // Mapea los códigos de días a nombres y ordena
  const orderedDays = Object.keys(dayMap)
    .filter(code => selectedDays.includes(code))
    .map(code => dayMap[code])
    .sort((a, b) => dayMap[a] - dayMap[b]);

  // Genera el string de descripción
  if (orderedDays.length === 7) {
    return "Todos los días";
  } else if (orderedDays.length === 6 && !orderedDays.includes("Domingo")) {
    return "De lunes a sábado";
  } else if (orderedDays.length === 5 && !orderedDays.includes("Domingo") && !orderedDays.includes("Sábado")) {
    return "De lunes a viernes";
  } else {
    return orderedDays.join(", ");
  }
}
