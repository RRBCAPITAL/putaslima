import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Quicksand } from 'next/font/google'

const dancing = Quicksand({ subsets: ['latin'] })

const HEslogan = () => {
  return (
    <div className=" flex border-none">
      <div className={dancing.className}>
      <div className="h-fit border-none pt-[50px] lg:pt-10 w-screen overflow-hidden flex flex-col dark:bg-white bg-dark-l items-center">
        
        <h2 className="border-b-4 pb-4 border-bor-red z-30 leading-[30px] w-fit font-extrabold mx-4 sm:mx-20 text-2xl text-center sm:text-[40px] dark:text-slate-600 text-white sm:leading-[45px]">
          Dicen que la felicidad no tiene precio, pero puedes venir a vernos.
        </h2>
        </div>
      </div>
    </div>
  );
};

export default HEslogan;
