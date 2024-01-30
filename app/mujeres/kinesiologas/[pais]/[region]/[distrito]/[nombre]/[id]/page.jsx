"use client"

import Details from "@/components/Inicio/Contenido/Details"
import { usePathname } from "next/navigation"
import { useParams } from "next/navigation"

const detailsID = () => {

    const { id } = useParams()

    console.log(id);

  return (
    <>
        <Details id={id}/>
    </>
  )
}

export default detailsID