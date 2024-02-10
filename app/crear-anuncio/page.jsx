import CrearAnuncio from "@/components/FormCreates/Anuncios/CrearAnuncio"

export const metadata = {
  title: 'Publicar Anuncio - Putas Trujillo KinesTop',
  description: 'Publica tu anuncio totalmente gratis en Kinestop.',
  metadataBase: new URL(
    "https://www.putastrujillo.com/crear-anuncio" || "https://putastrujillo.com/crear-anuncio"
  ),
  alternates: {
    canonical: "/",
  },
};

const CrearAnuncioPage = () => {
  return (
    <>
        <CrearAnuncio />
    </>
  )
}

export default CrearAnuncioPage;