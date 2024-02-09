"use client";

import { SignUp } from "@clerk/nextjs";
import { useEffect } from "react";
import { Poppins } from "next/font/google";
import Head from "next/head";

const quick = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata = {
  title: "Registrarse a Kinestop✅",
  description:
    "Registrate y descubre kinesiólogas reales en Perú con departamento propio, atención en hoteles, servicios sexuales en el norte, kines venezolas y kinesiologas colombianas que ofrecen servicios sexuales 100% reales.",
  keywords: [
    "Registrarse a kinestop",
    "Registrarse en kinesiologas trujillo",
    "Registrarse a Kinestop",
    "kines teens",
  ],
};

export default function Page() {
  return (
    <div className={quick.className}>
      <Head>
        <title>Canonical url</title>
        <link
          rel="canonical"
          href="https://putastrujillo.com/sign-up"
          key="canonical"
        />
      </Head>
      <div className="w-screen min-h-screen overflow-hidden flex flex-col items-center bg-back-light relative">
        <div className="z-10 mt-20 m-4 bg-[#0000003e] shadow-sm p-[2px] rounded-[20px] relative">
          <section className="m-4 p-4 rounded-[20px]">
            <h1 className="mb-2 text-center text-white font-bold text-xl shadow-normal bg-[#103fef] rounded-[10px] w-[88%] p-2 mx-auto">
              Registrarse a Photokinnes
            </h1>
            <div className="flex flex-col sm:flex-row gap-2">
              <SignUp />
            </div>
          </section>
        </div>
        <img
          src="/assets/bannerfulla.jpg"
          alt=""
          className="fixed z-0 top-0 left-0 w-screen min-h-screen overflow-hidden object-cover"
        />
      </div>
    </div>
  );
}
