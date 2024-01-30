"use client"

import { categories, questions } from "@/components/DataQuestions/DataQuestions"
import { useEffect, useState } from "react";

const randomArr = (arr) => {
    const newArr = arr.sort(() => Math.random() - 0.5);
    return newArr.slice(0, 3);
}

const ReactPage = () => {

const [ filteredQ, setFilteredQ ] = useState(
    questions.filter(q => q.category === "React")
    )

    useEffect(() => {

        const newQuestions = randomArr(filteredQ) 
        setFilteredQ(newQuestions)
    }, [])
    
    console.log(filteredQ);

  return (
    <div className="rounded-md w-screen  sm:w-[60%] sm:h-screen flex sm:pl-10 bg-violet-200 text-black py-10 sm:py-40 ">
      <div className="">
      <div className=" bg-slate-400">
        <h3 className="text-[16px]">Responde las preguntas</h3>
        <h1 className="font-bold text-4xl sm:w-full">
          Se sincero con las respuestas de REACT
        </h1>
      </div>

       
      </div>
    </div>
  );
}

export default ReactPage