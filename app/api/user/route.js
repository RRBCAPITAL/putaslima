import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function POST(req) {
  

  try {
    // Obtener los datos del usuario registrado a través de Clerk
    const body = await req.json();
    const { clerkId, email, phone, firstname, username, fullname, image } = body;

    if(email){
      const duplicateUser = await prisma?.user?.findFirst({
        where: {
        email: email && email,
        },
    });
  
    if(duplicateUser){
      console.log('Usuario antiguo reconocido.');
      return NextResponse.json({
          user: duplicateUser
      })
    }
  
    if(clerkId !== ''){
      const newUser = await prisma?.user?.create({
          data: {
            email: email, // Guardar el correo electrónico del usuario proporcionado por Clerk
            firstname: firstname || "",
            // lastname: lastname !== null ? lastname : "",
            phone: phone || "",
            username: username || "",
            fullname: fullname,
            image: image || "",
          },
        });
  
        console.log(newUser);
  return NextResponse.json({
              user: newUser
            });
  }
  }
  
  if(phone){
    
    const duplicatePhoneUser = await prisma?.user?.findFirst({
      where: {
      phone: phone && phone,
      },
  });
  
  if(duplicatePhoneUser){
    console.log('Usuario antiguo reconocido.');
    return NextResponse.json({
        user: duplicateUser
    })
  }
  
  if(clerkId !== ''){
    const newUser = await prisma?.user?.create({
        data: {
          email: email, // Guardar el correo electrónico del usuario proporcionado por Clerk
          firstname: firstname || "",
          // lastname: lastname !== null ? lastname : "",
          phone: phone || "",
          username: username || "",
          fullname: fullname,
          image: image || "",
        },
      });
  
      console.log(newUser);
  return NextResponse.json({
            user: newUser
          });
  }
  }

  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: 'Error al registrar o actualizar el usuario: ',
      error: error
    }, { status: 500 });
  } finally {
    await prisma.$disconnect(); // Cierra la conexión de Prisma manualmente.
  }
}


export async function GET(req) {
  try {
    const users = await prisma.$transaction([
      prisma.user.findMany({
        select: {
          id: true,
          firstname: true,
          // lastname: user => user.lastname || "",
          fullname: true,
          email: true,
          role: true,
          createdAt: true,
          image: true,
          estado: true,
        },
      }),
    ]);

    return NextResponse.json(users[0]);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Error al listar usuarios: ",
        error: error.message,
      },
      { status: 500 }
    );
  }finally {
    await prisma.$disconnect(); // Cierra la conexión de Prisma manualmente.
  }
}