import { prisma } from "@/libs/prisma";
import { ErrorSharp } from "@mui/icons-material";
import { NextResponse } from "next/server";

export async function POST(req, {params}){
    try {
        
        const body = await req.json()
        const formContent = body;
        
        const userId = formContent?.userId
        
        console.log(formContent);
        console.log(userId);

        const newVideo = await prisma?.videos?.create({
            data: {
                ...formContent,
                userId,
            }
        })

        if (!newVideo) {
            return NextResponse.json({
              message: "El video no se creó correctamente",
              Video: newVideo
            });
          }
       
          return NextResponse.json({
            message: "Video creado exitosamente",
            Video: newVideo,
          });

    } catch (error) {
        return NextResponse.json({
            message: 'Error',
            error: error.message
        }, { status: 500 });
    } finally {
        await prisma.$disconnect(); // Cierra la conexión de Prisma manualmente.
      }
}

export async function GET(req, { params }){

    try {
        const videos = await  prisma?.videos?.findMany({
            include: {
                user: true
            }
        })

        if(!videos) return NextResponse.json({
            message: "No existen videos",
            data: videos,
          });
      
          return NextResponse.json({
            message: "videos obtenidos exitosamente",
            data: videos,
          });
    } catch (error) {
        return NextResponse.json({
          message: "Hubo un error inesperado",
          error: error.message,
        }, { status: 500});
      } finally {
        await prisma.$disconnect(); // Cierra la conexión de Prisma manualmente.
      }
}