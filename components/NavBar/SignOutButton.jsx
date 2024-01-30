"use client"

import { useClerk } from "@clerk/clerk-react";
import { useRouter } from 'next/navigation'
 
const SignOutButton = ({handleNavbarPhone}) => {
  const { signOut } = useClerk();
  const router = useRouter()
 
  const handleClick = () => {
    router.push("/sign-in")
    handleNavbarPhone()
  }

  return (
    // Clicking on this button will sign out a user and reroute them to the "/" (home) page.
    <button onClick={() => signOut(handleClick)} className="text-white dark:text-slate-600">
      Salir
    </button>
  );
};

export default SignOutButton