import Head from "next/head";
import Inicio from "@/components/Inicio/Inicio";

export const metadata = {
  title: "kinesiólogas Vip en Lima Metropolitana 🥰I Kinestop✅",
  description:
    "Anuncios de kinesiólogas reales en Perú, kinesiólogas chibolas, kinesiólogas venezolanas, colombianas, Kines teens en Lima, Lince, San Borja, Ate, Comas, Villa Maria, Villa el Salvador, Chorrillos, Miraflores",
  keywords: [
    "kinesiologas lima",
    "kinesiologas en trujillo",
    "los olivos",
    "kines teens",
    "kinesiologas chiclayo",
    "prostitutas lima",
    "kines surco",
    "caletas lima",
    "putas peruanas",
    "putas extranjeras",
    "anfitrionas lima",
    "kines miraflores",
    "kinesiologas venezolanas y colombianas",
  ],
};

export default function Home() {
  return (
    <>
      <main className="dark:bg-dark-l bg-white flex">
        <Head>
          <title>Canonical url</title>
          <link
            rel="canonical"
            href="https://putastrujillo.com/"
            key="canonical"
          />
        </Head>
        <Inicio />
      </main>
    </>
  );
}
