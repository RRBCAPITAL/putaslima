// Librerías externas
import { Suspense } from 'react';
import Head from 'next/head';

// Componentes locales
import Access from '@/components/Access/Access';
import Loading from './loading';

// Estilos locales
import './globals.css';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { esES } from "@clerk/localizations";
import { dark } from '@clerk/themes';

import { Analytics } from '@vercel/analytics/react';
import GoogleAnalytics from './GoogleAnalytics';
import { Quicksand } from 'next/font/google'
import { Poppins } from 'next/font/google'

export const metadata = {
  title: 'Putas Trujillo',
  description: 'Escorts y kinesiologas.',
  icons: {
    icon: ['/favicon_io/favicon.ico?v=4'],
    apple: ['/favicon_io/apple-touch-icon.png?v=4'],
    shortcut: ['/favicon_io/apple-touch-icon.png']
  }
}

const quicksand = Poppins({ subsets: ['latin'], weight: "400" })

export default function RootLayout({ children }) {
  return (
    <>
      <ClerkProvider
    appearance={{
      layout: {

          // helpPageUrl: "https://clerk.com/support",
          // logoImageUrl: "https://clerk.com/logo.png",
          // logoPlacement: "inside",
          // privacyPageUrl: "https://clerk.com/privacy",
          showOptionalFields: false,
          socialButtonsPlacement: "top",
          socialButtonsVariant: "iconButton",
          // termsPageUrl: "https://clerk.com/terms",
      },
      variables: {
        // colorPrimary: "#febd57",
        // colorBackground: "#fff9e6",
        // colorText: "black",
        // fontFamily: "Nunito"
      }
    }}

    localization={esES}
    
    >
    <html lang="es" className={quicksand.className}>
      <body className="w-screen overflow-x-hidden">

        {/* <Head>
        <link rel="icon" href="/assets/favicon.ico" type="image/x-icon" />

        <meta property="og:title" content="PAPAYA HUB | " />
        <meta property="og:description" content="Descripción de la página"/>
        <meta property="og:image" content="URL de la imagen en miniatura" />

        <meta name="description" content="La mejor plataforma de chicas para ti." />
        <meta name="keywords" content="Anuncios de chicas, chicas, plataforma, diversión, Damas de compañía, Acompañantes, Citas personales,
        Servicios de acompañamiento, Encuentros discretos, Compañía femenina, Citas privadas, Conocer chicas, Contactos personales, Citas casuales,
        Anuncios de mujeres, Encuentros íntimos, Conocer gente nueva, Citas de adultos, Servicios de entretenimiento, Citas exclusivas,
        Encuentros románticos, Amigas para salir, Citas en línea
        " />

        <meta name="author" content=""/>
        <meta name="copyright" content="© 2023 Nombre de la empresa">RRB CAPITAL</meta>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
        </Head>       */}
            <GoogleAnalytics />
            <Suspense fallback={<Loading />}>
           <Access children={children}/>
            </Suspense>
            <Analytics />
      </body>
    </html>
    </ClerkProvider>

  
    </>
    )
}
