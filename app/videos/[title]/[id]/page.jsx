'use client'

import DetailsVideos from "@/components/ContenidoVideos/DetailsVideos"
import { useParams } from "next/navigation"

const VideosDetailsPage = () => {

    const { id } = useParams()

  return (
    <DetailsVideos id={id} />
  )
}

export default VideosDetailsPage