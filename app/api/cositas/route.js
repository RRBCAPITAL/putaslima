import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(req, {params}){
    try {
        
        const body = await req.json()
        const formContent = body;
        
        const userId = formContent?.userId
        
        console.log(formContent);
        console.log(userId);

        const newCosita = await prisma?.cositas?.create({
            data: {
                ...formContent,
                userId,
            }
        })

        console.log(newCosita);

        if (!newCosita) {
            return NextResponse.json({
              message: "No se creó correctamente",
              cosita: newCosita
            });
          }
       
          return NextResponse.json({
            message: "Creado exitosamente",
            cosita: newCosita,
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
        const cositas = await prisma?.cositas?.findMany({
            include: {
                user: true
            }
        })

        if(!cositas) return NextResponse.json({
            message: "No existen cositas",
            data: cositas,
          });
      
          return NextResponse.json({
            message: "Cositas obtenidos exitosamente",
            data: cositas,
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