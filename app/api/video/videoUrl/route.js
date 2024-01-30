
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({ 
  cloud_name: 'dvaiww9ri', 
  api_key: '143137459793523', 
  api_secret: '3Opq8vJZWnRQeIfBreaC-WmF0hM' 
});

export async function POST(req, { params }) {
  try {
    const dataGaleria = await req.formData();
    const videosArray = dataGaleria.getAll("file");

    if (videosArray.length === 0) {
      return NextResponse.json("No se ha subido ningún video", { status: 400 });
    }

    const uploadPromises = videosArray.map(async (video) => {
      const bytes = await video.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fullUuid = uuidv4();
      const publicId = `chicas_papayahub.pe_${fullUuid.substring(0, 5)}`;

      const response = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({
          public_id: publicId,
          resource_type: "video",
          overlay: {
            font_family: 'Arial',
            font_size: 50,
            text: 'www.papayahub.pe',
            color: '#fff',
            opacity: 60,
            blend: 'over',
          },
          gravity: 'center',
          color: '#fff',
          opacity: 60,
          font_size: 50,
        }, (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }).end(buffer);
      });

      return response.secure_url;
    });

    const videosUrls = await Promise.all(uploadPromises);

    console.log(videosUrls);

    return NextResponse.json({
      videosUrl: videosUrls,
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
