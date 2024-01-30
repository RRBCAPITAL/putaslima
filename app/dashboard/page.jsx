"use client";

import AdminDashboard from "@/components/AdminDashboard/AdminDashboard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import useCurrentUser from "@/hooks/customhooks/useCurrentUser";
import { useRouter } from "next/navigation";

const DashBoardPage = () => {
  const [arrUsers, setArrUsers] = useState();
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("storedUser");
    const parsedUser = JSON.parse(storedUser);
    setCurrentUser(parsedUser);
  }, []);

  if (currentUser?.role === "ADMIN" || currentUser?.role === "SUPER_ADMIN") {
    return (
      <>
        {/* {currentUser?.role === 'ADMIN' || currentUser?.role === 'SUPER_ADMIN' ? <AdminDashboard arrUsers={arrUsers}/> : router.push('sign-in')} */}
        <AdminDashboard arrUsers={arrUsers} currentUserOk={currentUser} />
      </>
    );
  } else {
    return (
      <>
        <div className="w-screen min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-slate-500 font-bold text-3xl text-center">
            ACCESO DENEGADO: No tienes permiso de administrador.
          </h1>
          <button
            className="p-4 bg-red-500 rounded hover:bg-red-600 text-white mx-auto text-center mt-4"
            onClick={() => router.push("/")}
          >
            Volver al inicio
          </button>
        </div>
      </>
    );
  }
};

export default DashBoardPage;
