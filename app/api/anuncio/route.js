import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { writeFile } from 'fs/promises';
import path from "path";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({ 
  cloud_name: 'dvaiww9ri', 
  api_key: '143137459793523', 
  api_secret: '3Opq8vJZWnRQeIfBreaC-WmF0hM' 
});

export async function POST(req, { params }) {
  try {
   // Ahora, procesar la información del anuncio
   const body = await req.json();
   const formContent = body;
   
   console.log(formContent);

   const userId = formContent?.userId;

   const result = await prisma.$transaction([
     prisma.anuncios.create({
       data: {
         ...formContent,
         userId, // Relaciona el anuncio con el usuario actual
       },
     }),
     prisma.user.update({
       where: { id: userId },
       data: {
         // Agrega lógica para actualizar la información del usuario, si es necesario
       },
     }),
   ]);

   const newAnuncio = result[0];
   const updatedUser = result[1];

   if (!newAnuncio) {
     return NextResponse.json({
       message: "El anuncio no se creó correctamente",
       Anuncio: newAnuncio
     });
   }

   return NextResponse.json({
     message: "Anuncio creado exitosamente",
     Anuncio: newAnuncio,
     User: updatedUser
   });
  } catch (error) {
   return NextResponse.json({
     message: "Hubo un error inesperado",
     error: error.message
   }, { status: 500 });
  }
}


export async function GET(req, { params }) {
  try {
    // Consulta todos los anuncios y también incluye la información del usuario que los creó.
    const anuncios = await prisma.anuncios.findMany({
      include: {
        user: true, // Incluye la relación con el usuario
      },
    });

    if(!anuncios) return NextResponse.json({
      message: "No existen anuncios",
      data: anuncios,
    });

    return NextResponse.json({
      message: "Anuncios obtenidos exitosamente",
      data: anuncios,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Hubo un error inesperado",
      error: error.message,
    }, { status: 500});
  }finally {
    await prisma.$disconnect(); // Cierra la conexión de Prisma manualmente.
  }
}