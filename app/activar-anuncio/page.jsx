import ActivarAnuncio from '@/components/ActivarAnuncio/ActivarAnuncio'

export const metadata = {
  title: "Metodos de pago - Putas Trujillo KinesTop",
  description: "Publica tu anuncio totalmente gratis en Kinestop, estos son nuestros planes para activar tu anuncio.",
  metadataBase: new URL(
    "https://putastrujillo.com/activar-anuncio" ||
      "https://www.putastrujillo.com/activar-anuncio"
  ),
  alternates: {
    canonical: "/",
  },
};

const ActivarAnuncioPage = () => {
  
  return (
      <>
        <ActivarAnuncio />
      </>
      )
}

export default ActivarAnuncioPage