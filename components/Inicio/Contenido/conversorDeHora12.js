export function conversorDeHora12(hora24) {
    if (!hora24) return hora24;
  
    // Dividir la hora y los minutos
    const [hora, minutos] = hora24.split(":");
    let amPm = "AM";
    let hora12 = parseInt(hora, 10);
  
    if (hora12 >= 12) {
      amPm = "PM";
      if (hora12 > 12) {
        hora12 -= 12;
      }
    }
  
    // Formatear minutos con cero inicial si es necesario
    const minutosFormateados = minutos.padStart(2, "0");
  
    return `${hora12}:${minutosFormateados} ${amPm}`;
  }