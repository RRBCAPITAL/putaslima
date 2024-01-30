"use client"

import { SignIn } from "@clerk/nextjs";
import { useEffect } from "react";
import { Poppins } from "next/font/google";

const quick = Poppins({ subsets: ['latin'], weight: ["400", "600"] })

export default function Page() {

  useEffect(() => {
    localStorage.removeItem('storedUser')
  }, [])
  
  return (
    <div className={quick.className}>
      <div className="w-screen min-h-screen overflow-hidden flex flex-col items-center bg-back-light relative">
      <div className="z-10 mt-20 m-4 bg-[#0000003e] shadow-sm p-[2px] rounded-[20px] relative">
        
        <section className="m-4 p-4 rounded-[20px]">
        <h1 className="text-center text-white font-bold text-xl shadow-normal bg-[#000000b1] rounded-[10px] w-[88%] p-2 mx-auto"><strong className="text-t-red">Iniciar</strong> Sesión</h1>
          <div className="flex flex-col sm:flex-row gap-2">
            <SignIn />
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
