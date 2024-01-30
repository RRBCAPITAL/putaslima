'use client'

import DetailsCositas from "@/components/ContenidoCositas/DetailsCositas"
import { useParams } from "next/navigation"

const VideosDetailsPage = () => {

    const { id } = useParams()

  return (
    <DetailsCositas id={id} />
  )
}

export default VideosDetailsPage