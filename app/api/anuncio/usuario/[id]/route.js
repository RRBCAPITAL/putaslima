import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(req, { params }) {
    try {
      const { id } = params

      console.log(id);

    //   const { searchParams } = new URL(req.url);
    //   const admin = searchParams.get("admin");
  
      const anuncio = await prisma?.anuncios?.findMany({
        where: {
            userId: id
        },
      });

      console.log(anuncio);
  
      return NextResponse.json(anuncio);
    } catch (error) {
      return NextResponse.json({ error: error, error: error.message });
    } finally {
      await prisma.$disconnect(); // Cierra la conexión de Prisma manualmente.
    }
  }