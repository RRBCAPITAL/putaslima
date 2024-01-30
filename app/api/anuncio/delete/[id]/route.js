import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    console.log(id);

    const idAnuncio = id?.substring(0, 25)
    const userId = id.substring(25, 50)
    // const user = await currentUser(req);
    // const email = user?.emailAddresses[0]?.emailAddress;

    // console.log(user);
    // console.log(email);

    const currentUserDB = await prisma.user.findUnique({
      where: {
        id: userId
      },
    });

    console.log(currentUserDB);

    if (!currentUserDB) {
      return NextResponse.json(
        {
          message: "Usuario no autenticado o no válido",
        },
        { status: 401 }
      );
    }

    const anuncio = await prisma.anuncios.findUnique({
      where: {
        id: idAnuncio
      },
    });

    if (!anuncio) {
      return NextResponse.json(
        {
          message: "El anuncio no existe",
        },
        { status: 404 }
      );
    }

    if (
      currentUserDB.role === "ADMIN" ||
      currentUserDB.role === "SUPER_ADMIN" ||
      currentUserDB.id === anuncio.userId
    ) {
      // Si el usuario es ADMIN, SUPER_ADMIN o el creador del anuncio, permite la eliminación
      await prisma.anuncios.delete({
        where: {
          id: idAnuncio
        },
      });

      return NextResponse.json(
        {
          message: "Anuncio eliminado exitosamente",
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          message: "No tienes permiso para eliminar este anuncio",
        },
        { status: 403 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "Hubo un error inesperado",
        error: error.message,
      },
      { status: 500 }
    );
  }finally {
    await prisma.$disconnect(); // Cierra la conexión de Prisma manualmente.
  }
}
