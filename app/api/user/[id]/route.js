import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(req, { params }) {
    try {
      const { id } = params;
    //   const { searchParams } = new URL(req.url);
    //   const admin = searchParams.get("admin");
  
    console.log(id)

      const user = await prisma?.user?.findUnique({
        where: {
          id: Number(id),
        },
      });
  
      return NextResponse.json(user);
    } catch (error) {
      return NextResponse.json({ error: error, error: error.message });
    }
  }

// export function DELETE(){

//     return NextResponse.json({
//         message: 'Delete user'
//     })
// }

export async function PUT(req, { params }){

  try {

    const { id } = params;
    const body = await req.json()

    const { enfoque, stackTechs, pago, equipment, estado, role, description, phone } = body
    
    console.log(equipment)

    const user = await prisma?.user?.findUnique({
      where: { 
        id: Number(id)
      }
    })

    console.log(user.id);

    if(!user){
      console.log("Entre aqui");
      return NextResponse.json({
        message: "Usuario no encontrado"
      })
    }
    
    console.log("estoy aqui");

    const userUpdate = await prisma?.user?.update({
      where: {
        id: user && user?.id
      },
      data: {
        enfoque: enfoque && enfoque,
        stackTechs: stackTechs && stackTechs,
        pago: pago && pago,
        equipment: (equipment) && (equipment),
        role: role && role,
        description: description && description,
        phone: phone && String(phone),
        estado: enfoque && stackTechs && description && phone ? "PAYMENT_PENDING" : estado && estado,
        
      }
    })

    console.log("estoy aqui ahora");
    console.log(userUpdate);

    // if(!userUpdate) return NextResponse.json({
    //   message: "El usuario no se pudo actualizar.",
    // })

    return NextResponse.json({
      message: "Usuario Actualizado correctamente.",
      userUpdate: userUpdate
    })

  } catch (error) {
    
    return NextResponse.json({
      message: "Hubo un error: ",
      error: error.message
    }, {
      status: 500
    })
  }
}