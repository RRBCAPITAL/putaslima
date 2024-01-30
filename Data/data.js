export const generateUniqueId = (name) => {
  const randomDigits = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
  const initials = name.slice(0, 2).toUpperCase();
  return `${initials}-${randomDigits}`;
};

export const existingNumbers = []

export const categorias = [
  "Escort",
  "Packs fotos y videos",
  "Videollamada hot",
  "Fotos de pies",
  "Masajes",
  "Conversar y consejos",
  "Audios hot",
  "Chat erótico",
  "Anal",
  "69",
  "Fetiche",
  "Sexo en la ducha",
  "Depa propio",
  "Atención en hotel",
  "Atención a domicilio",
  "Juguetes eróticos",
  "Atención a discapacitados",
  "Atención a mujeres",
  "Oral peladito",
  "Eyaculación corporal",
  "Eyaculación en la boca",
  "Eyaculación facial",
  "Trio M-H-M",
  "Trio H-M-H"
];

export const lugarEncuentro = [
  "Depa propio",
  "Atención en hotel",
  "Atención a domicilio",
]

export const servicios = [
  "Escort",
  "Packs fotos y videos",
  "Videollamada hot",
  "Fotos de pies",
  "Masajes",
  "Conversar y consejos",
  "Audios hot",
  "Chat erótico",
  "69",
  "Eyaculación corporal",
  "Atención a discapacitados",
]

export const serviciosExclusivos = [

  "Anal",
  "Fetiche",
  "Sexo en la ducha",
  "Juguetes eróticos",
  "Atención a mujeres",
  "Oral peladito",
  "Eyaculación en la boca",
  "Eyaculación facial",
  "Trio M-H-M",
  "Trio H-M-H"
];

export const categoriasNameIcon = [

  {
    name: "Todas",
    path: "/assets/icon-todas.png"
  },
  {
    name: "Escort",
    path: "/assets/icon-scort.png"
  },
  {
    name: "Packs fotos y videos",
    path: "/assets/icon-cel.png"
  },
  {
    name: "Fotos de pies",
    path: "/assets/icon-pies.png"
  },
  {
    name: "Videollamada hot",
    path: "/assets/icon-telf.png"
  },
  {
    name: "Masajes",
    path: "/assets/icon-masajes.png"
  },
  {
    name: "Conversar y consejos",
    path: "/assets/icon-phone.png"
  },
  {
    name: "Audios hot",
    path: "/assets/icon-audio.png"
  },
  {
    name: "Chat erótico",
    path: "/assets/icon-chat.png"
  },
  {
    name: "Anal",
    path: "/assets/icon-anal.png"
  },
  {
    name: "69",
    path: "/assets/icon-69.png"
  },
  {
    name: "Fetiche",
    path: "/assets/icon-fetiche.png"
  },
  {
    name: "Sexo en la ducha",
    path: "/assets/icon-ducha.png"
  },
  {
    name: "Depa propio",
    path: "/assets/icon-depa.png"
  },
  {
    name: "Atención en hotel",
    path: "/assets/icon-hotel.png"
  },
  {
    name: "Atención a domicilio",
    path: "/assets/icon-domicilio.png"
  },
  {
    name: "Juguetes eróticos",
    path: "/assets/icon-juguete.png"
  },
  {
    name: "Atención a mujeres",
    path: "/assets/icon-mujer.png"
  },
  {
    name: "Atención a discapacitados",
    path: "/assets/icon-discapacitado.png"
  },
  {
    name: "Oral peladito",
    path: "/assets/icon-oral.png"
  },
  {
    name: "Eyaculación corporal",
    path: "/assets/icon-eyaculacion.png"
  },
  {
    name: "Eyaculación en la boca",
    path: "/assets/icon-eyaculacionb.png"
  },
  {
    name: "Eyaculación facial",
    path: "/assets/icon-eyaculacionv.png"
  },
  {
    name: "Trio M-H-M",
    path: "/assets/icon-triom.png"
  },
  {
    name: "Trio H-M-H",
    path: "/assets/icon-trioh.png"
  },
  
];

export const preferenciasPrincipales = [
  "Hotel",
  "Delivery",
  "Departamento propio"
]

export const idiomasPrincipales = [
  "Español",
  "Inglés",
  "Portugués"
  // "Francés",
  // "Alemán",
  // "Italiano",
  // "Chino",
  // "Japonés",
  // "Ruso",
  // "Árabe",
  // "Coreano",
  // ... Agrega todos los idiomas que necesites
];
export const regiones = [
  "Amazonas",
  "Áncash",
  "Apurímac",
  "Arequipa",
  "Ayacucho",
  "Cajamarca",
  "Callao",
  "Cusco",
  "Huancavelica",
  "Huánuco",
  "Ica",
  "Junín",
  "La Libertad",
  "Lambayeque",
  "Lima Metropolitana",
  "Lima Provincias",
  "Loreto",
  "Madre de Dios",
  "Moquegua",
  "Pasco",
  "Piura",
  "Puno",
  "San Martín",
  "Tacna",
  "Tumbes",
  "Ucayali",
  // ... Agrega todas las regiones que necesites
];

export const nacionalidades = [
  "Peruana",
  "Argentina",
  "Brasileña",
  "Colombiana",
  "Ecuatoriana",
  "Chilena",
  "Venezolana",
  "Boliviana",
  "Paraguaya",
  "Uruguaya",
  "Mexicana",
  "Española",
  // ... Agrega todas las nacionalidades que necesites
];
// Función de validación de número de teléfono para Perú

export const distritos = [
  {
    name : "Lima Metropolitana",
    places : [
      "Ancón",
      "Ate",
      "Barranco",
      "Breña",
      "Carabayllo",
      "Chaclacayo",
      "Chorrillos",
      "Cieneguilla",
      "Comas",
      "El Agustino",
      "Independencia",
      "Jesús María",
      "La Molina",
      "La Victoria",
      "Lince",
      "Los Olivos",
      "Lurigancho",
      "Lurín",
      "Magdalena del Mar",
      "Miraflores",
      "Pachacámac",
      "Pucusana",
      "Pueblo Libre",
      "Puente Piedra",
      "Punta Hermosa",
      "Punta Negra",
      "Rímac",
      "San Bartolo",
      "San Borja",
      "San Isidro",
      "San Juan de Lurigancho",
      "San Juan de Miraflores",
      "San Luis",
      "San Martín de Porres",
      "San Miguel",
      "Santa Anita",
      "Santa María del Mar",
      "Santa Rosa",
      "Santiago de Surco",
      "Surquillo",
      "Villa El Salvador",
      "Villa María del Triunfo",
    ]
  },
  {
    name : "Amazonas",
    places : [
      "Bagua",
      "Bongara",
      "Chachapoyas",
      "Condorcanqui",
      "Luya",
      "Rodriguez de Mendoza",
      "Utcubamba",
    ]
  },
  {
    name : "Áncash",
    places : [
      "Aija",
      "Antonio Raymondi",
      "Asuncion",
      "Bolognesi",
      "Carhuaz",
      "Carlos F. Fitzcarrald",
      "Casma",
      "Corongo",
      "Huaraz",
      "Huari",
      "Huarmey",
      "Huaylas",
      "Mariscal Luzuriaga",
      "Ocros",
      "Pallasca",
      "Pomabamba",
      "Recuay",
      "Santa",
      "Sihuas",
      "Yungay",
    ]
  } 
  ,
  {
    name : "Apurímac",
    places : [
      "Abancay",
      "Antabamba",
      "Andahuaylas",
      "Aymaraes",
      "Chincheros",
      "Cotabambas",
      "Grau",
    ]
  },
  {
    name : "Arequipa",
    places : [
      "Arequipa",
      "Camana",
      "Caraveli",
      "Castillas",
      "Caylloma",
      "Condesuyos",
      "Islay",
      "La Union",
    ] 
  },
  {
    name : "Ayacucho",
    places : [
      "Changallo",
      "Huanta",
      "Huancasancos",
      "Huamanga",
      "La Mar",
      "Lucanas",
      "Parinacochas",
      "Paucar del Sara Sara",
      "Sucre",
      "Victor Fajardo",
      "Vilcas HuamanChangallo",
      "Huanta",
      "Huancasancos",
      "Huamanga",
      "La Mar",
      "Lucanas",
      "Parinacochas",
      "Paucar del Sara Sara",
      "Sucre",
      "Victor Fajardo",
      "Vilcas Huaman",
    ]
  },
  {
    name: "Cajamarca",
    places : [
      "Cajabamba",
      "Cajamarca",
      "Calenedin",
      "Chota",
      "Contumaza",
      "Cutervo",
      "Hualgayoc",
      "Jaen",
      "San Ignasio",
      "San Marcos",
      "San Miguel",
      "San Pablo",
      "Santa Cruz",
    ]
  },
  {
    name : "Callao",
    places : [
      "Callao",
      "Bellavista",
      "Carmen de la Legua",
      "La Perla",
      "La Punta",
      "Ventanilla",
      "Mi Peru",
    ]
  },
  {
    name : "Cusco",
    places : [
      "Acomayo",
      "Anta",
      "Calca",
      "Canas",
      "Canchis",
      " Convencion",
      "Cusco",
      "Chumbivilcas",
      "Espinar",
      "Paruro",
      "Paucartambo",
      "Quispicanchis",
      "Urubamba",
    ]
  },
  {
    name : "Huancavelica",
    places : [
      "Acobamba",
      "Angaraes",
      "Castrovirreyna",
      "Churcampa",
      "Huancavelica",
      "Huaytara",
      "Tayacaja",
    ]
  },
  {
    name : "Huánuco",
    places : [
      "Huánuco",
      "Ambo",
      "Dos de Mayo",
      "Huancaybamba",
      "Huamalies",
      "Leoncio Prado",
      "Marañon",
      "Pachitea",
      "Puerto Inca",
      "Lauricocha",
      "Yarowilca",
      "Tingo Maria",
    ]  
  },
  {
    name : "Ica",
    places : ["Chicha", "Ica", "Nazca", "Palpa", "Pisco"]
  },
  {
    name : "Junín",
    places : [
      "Chanchamayo",
      "Chupaca",
      "Concepcion",
      "Huancayo",
      "Jauja",
      "Junin",
      "Satipo",
      "Tarma",
      "Yauli",
    ]
  },
  {
    name : "La Libertad",
    places : [
      "Ascope",
      "Bolivar",
      "Chepen",
      "Gran Chimu",
      "Julcan",
      "Otuzco",
      "Pacasmayo",
      "Pataz",
      "Sanchez Carrion",
      "Santiago de Chuco",
      "Trujillo",
      "Viru",
    ]
  },
  {
    name : "Lambayeque",
    places : ["Chiclayo", "Ferreñafe", "Lambayeque"]
  },
  {
    name : "Lima Provincias",
  places : [
  "Barranca",
  "Cajatambo",
  "Canta",
  "Cañete",
  "Huaral",
  "Huarochiri",
  "Huaura",
  "Oyon ",
  "Yauyos",
  "Huacho",
  "Cañete",
]
  },
  {
    name : "Loreto",
    places : [
      "Alto Amazonas",
      "Datem Amazonas",
      "Loreto",
      "Mcal. Ramon Castilla",
      "Maynas",
      "Requena",
      "Ucayali",
    ]
  },
  {
    name : "Madre de Dios",
    places : ["Manu", "Tahuamanu", "Tambopata"]
  },
  {
    name : "Pasco",
    places : ["Daniel A. Carrion", "Oxapampa", "Pasco"]
  },
  {
    name : "Puno",
places : [
  "Azangaro",
  "Carabaya",
  "Chucuito",
  "El Collao",
  "Huancane",
  "Lampa",
  "Melgar",
  "Moho",
  "Puno",
  "San Antonio de Putina",
  "San Roman",
  "Sandia",
  "Yunguyo",
]
  },
  {
    name : "San Martín",
    places : [
      "Bellavista",
      "El Dorado",
      "Huallaga",
      "Lamas",
      "Mariscal Caceres",
      "Moyobamba",
      "Picota",
      "Rioja",
      "San Martin",
      "Tocache",
    ]
  },
  {
    name : "Piura",
places : [
  "Ayabaca",
  "Huancabamba",
  "Morropon",
  "Paita",
  "Piura",
  "Sechura",
  "Sullana",
  "Talara",
]
  },
  {
    name : "Moquegua",
    places : [
      "General Sanchez Cerro",
      "Ilo",
      "Mariscal Nieto",
    ]
  },
  {
    name : "Tacna",
    places : [
      "Bellavista",
      "El Dorado",
      "Huallaga",
      "Lamas",
      "Mariscal Caceres",
      "Moyobamba",
      "Picota",
      "Rioja",
      "San Martin",
      "Tocache",
    ]
    
  },
  {
    name : "Tumbes",
    places : ["Contralmirante Villar", "Tumbes", "Zarumilla"]
  },
  {
    name : "Ucayali",
    places : [
      "Atalaya",
      "Coronel Portillo",
      "Padre Abad",
      "Purus",
    ]
  }
]





