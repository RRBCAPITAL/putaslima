import { NextResponse } from "next/server"
import { writeFile } from 'fs/promises'
import path from "path";

import { v4 as uuidv4 } from 'uuid';

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



export async function POST(req, {params}){

   try {

    const data = await req.formData();
    const imageP = data.get("file")
  
    console.log(data);
    console.log(imageP);

    if(!imageP){
      return NextResponse.json("No se ha subido ninguna imagen", { status: 400})
    }

    const bytes = await imageP.arrayBuffer();
    const buffer = Buffer.from(bytes)

    // const filePath = path.join(process.cwd(), "public", imageP.name) 
    // await writeFile(filePath, bytes)
    // console.log(filePath);

    // Genera un public_id único utilizando uuid y agrega el texto al inicio
    const fullUuid = uuidv4();
    const publicId = `videos_papayahub.pe_${fullUuid.substring(0, 5)}`;

    const response = await new Promise((resolve, reject) => {
      cloudinary.uploader
      .upload_stream({
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
          if(err){
            reject(err)
          }

          resolve(result)
      })


      .end(buffer);
    })

    console.log(response);
    console.log(response.secure_url);

   return NextResponse.json({
    imageUrl: response.secure_url
   })
    
   } catch (error) {
    
    return NextResponse.json({
        message: "Hubo un error inesperado",
        error: error.message
    }, { status: 500})
   }

}