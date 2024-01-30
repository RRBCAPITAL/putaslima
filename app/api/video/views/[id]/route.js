import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function PUT(req, { params }) {
  try {
    const { id } = params;

    const body = await req.json();

    console.log(id);
    console.log(body);

    await prisma?.videos?.update({
      where: {
        id: id,
      },
      data: {
        views: {
          increment: 1, // Incrementa la cantidad actual de views en 1
        },
      },
    });

    return NextResponse.json({
      message: "Vistas + 1",
    });
   
  } catch (error) {
    return NextResponse.json({
      message: "Hubo un error inesperado",
      error: error.message,
    });
  } finally {
    await prisma.$disconnect(); // Cierra la conexión de Prisma manualmente.
  }
}