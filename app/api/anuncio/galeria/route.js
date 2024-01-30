import { NextResponse } from "next/server"
import { prisma } from "@/libs/prisma"
import { writeFile } from 'fs/promises'
import path from "path";

import { v4 as uuidv4 } from 'uuid';

import { currentUser } from "@clerk/nextjs";

import {v2 as cloudinary} from 'cloudinary';
          
// cloudinary.config({ 
//   cloud_name: 'dvaiww9ri', 
//   api_key: '143137459793523', 
//   api_secret: '3Opq8vJZWnRQeIfBreaC-WmF0hM' 
// });

//RRB CAPITAL

cloudinary.config({ 
  cloud_name: 'doxatacbw', 
  api_key: '985616616318484', 
  api_secret: 'JCG3uob6Mwi4fCbxwY-_94qSehY' 
});

export async function POST(req, { params }) {
  try {
    const dataGaleria = await req.formData(); // Obtén los datos del formulario de la galería
    const imagesArray = dataGaleria.getAll("file"); // Obtiene un array con todas las imágenes

    // Asegúrate de que al menos una imagen se haya subido
    if (imagesArray.length === 0) {
      return NextResponse.json("No se ha subido ninguna imagen", { status: 400 });
    }

    const imagesUrls = [];

    // Itera a través de las imágenes y súbelas a Cloudinary
    for (const image of imagesArray) {
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fullUuid = uuidv4();
      const publicId = `chicas_papayahub.pe_${fullUuid.substring(0, 5)}`;

      const response = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({
          
            public_id: publicId,
            // colors: true,
            // overlay: {
            //   font_family: 'Arial',
            //   font_size: 50, // Tamaño del texto
            //   text: 'Papayahub.pe',
            //   color: '#fff', // Color del texto
            //   opacity: 60, // Opacidad del texto
            //   blend: 'over',
            // },
            // gravity: 'center', // Centrar el texto en la imagen
            // color: '#fff',
            // opacity: 60,
            // font_size: 50
          
        }, (err, result) => {
          if (err) {
            reject(err);
          }

          resolve(result);
        }).end(buffer);
      });

      imagesUrls.push(response.secure_url);
    }

    console.log(imagesUrls);

    return NextResponse.json({
      imagesUrl: imagesUrls,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Hubo un error inesperado",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
