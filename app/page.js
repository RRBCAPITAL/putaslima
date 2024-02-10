import Head from "next/head";
import Inicio from "@/components/Inicio/Inicio";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
    <NextSeo canonical="www.putastrujillo.com/" />
      <main className="dark:bg-dark-l bg-white flex">
        <Inicio />
      </main>
    </>
  );
}
