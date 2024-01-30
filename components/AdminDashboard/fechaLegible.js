

export function fechaLegible(dateTimeString) {
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  };
  const date = new Date(dateTimeString);

  // Extraer los componentes de la fecha
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Sumar 1 porque los meses comienzan en 0
  const day = date.getDate().toString().padStart(2, '0');
  const hour = date.getHours() % 12; // Obtener las horas en formato 12 horas
  const minute = date.getMinutes().toString().padStart(2, '0');
  const amPm = date.getHours() >= 12 ? 'PM' : 'AM';

  // Formatear la fecha en el formato "día/mes/año hora:minuto AM/PM"
  const formattedDate = `${day}/${month}/${year}`;
  const formattedTime = `${hour === 0 ? '12' : hour}:${minute} ${amPm}`;

  return `${formattedDate} - ${formattedTime}`;
}
