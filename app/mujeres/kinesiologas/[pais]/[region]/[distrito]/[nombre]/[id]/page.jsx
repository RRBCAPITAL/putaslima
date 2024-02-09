"use client"

import Details from "@/components/Inicio/Contenido/Details"
import { usePathname } from "next/navigation"
import { useParams } from "next/navigation"

export const metadata = {
  title: ': kinesiologas en Piura y chiclayo 🙈I Kinestop✅',
  description: 'kinesiólogas reales en Perú con departamento propio, atencion en hoteles, servicios sexuales en el norte, kines venezolas y kinesiologas colombianas que ofrecen servicios sexuales 100% reales.',
  keywords: ['kinesiologas lima', 'kinesiologas en trujillo', 'los olivos', 'kines teens',
  'kinesiologas chiclayo', 'prostitutas lima', 'kines surco', 'caletas lima', 'putas peruanas',
  'putas extranjeras', 'anfitrionas lima', 'kines miraflores', 'kinesiologas venezolanas y colombianas'
  ],
}

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