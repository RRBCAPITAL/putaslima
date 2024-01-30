import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function PUT(req, { params }) {
  try {
    const { id } = params;

    console.log(id);

    const body = await req.json();
    const { userId, title, description, videoUrl, thumbnailUrl, nivel } = body;

    const currentUser = await prisma?.user?.findUnique({
      where: {
        id: userId,
      },
    });

    if (currentUser?.role === "USER") {
      // Usuario puede actualizar todo excepto estado y nivel.
      const updatedAnuncio = await prisma.anuncios.update({
        where: {
          id: id,
        },
        data: {
          title,
          description,
          videoUrl,
          thumbnailUrl,
          nivel,
        },
      });

      return NextResponse.json({
        message: "Video actualizado exitosamente",
        data: updatedAnuncio,
      });
    } else if (
      currentUser?.role === "ADMIN" ||
      currentUser?.role === "SUPER_ADMIN"
    ) {
      // Admin y Super Admin pueden actualizar todo, incluyendo estado y nivel.
      const updatedAnuncio = await prisma.videos.update({
        where: {
          id: id,
        },
        data: {
          title,
          description,
          videoUrl,
          thumbnailUrl,
          nivel,
        },
      });

      return NextResponse.json({
        message: "Video actualizado exitosamente",
        data: updatedAnuncio,
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: "Hubo un error inesperado",
      error: error.message,
    });
  } finally {
    await prisma.$disconnect(); // Cierra la conexión de Prisma manualmente.
  }
}

export async function GET(req, { params }) {
  try {
    const { id } = params;
    //   const { searchParams } = new URL(req.url);
    //   const admin = searchParams.get("admin");

    console.log(id);

    const anuncio = await prisma?.videos?.findUnique({
      where: {
        id,
      },
    });

    return NextResponse.json(anuncio);
  } catch (error) {
    return NextResponse.json({ error: error, error: error.message });
  } finally {
    await prisma.$disconnect(); // Cierra la conexión de Prisma manualmente.
  }
}
