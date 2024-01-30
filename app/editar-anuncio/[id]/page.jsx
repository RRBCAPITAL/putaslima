"use client"

import EditarAnuncio from '@/components/EditarAnuncio/EditarAnuncio'
import { useParams } from 'next/navigation'

const EditarAnuncioPage = () => {

    const { id } = useParams()

  return (
    <>
        <EditarAnuncio id={id}/>
    </>
      )
}

export default EditarAnuncioPage