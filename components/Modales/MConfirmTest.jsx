import { useState } from "react";
import ModalConfirmTest from "./ModalConfirmTest";
import { useRouter } from "next/navigation";
import Link from "next/link";

const MConfirmTest = ({ isOpenModal }) => {
  console.log(isOpenModal);
    const [close, setClose] = useState(false)

  const handleClose = () => {
        setClose(true)
  }
  


  if (isOpenModal) {
    return (
      <ModalConfirmTest isOpenModal={isOpenModal} close={close}>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-[#25123d]">¿Listo para el examen de admisión?</h1>
          </div>
          <div className="flex gap-4 justify-center">
            <button className="p-4 rounded-md bg-[#ff412c] text-xl font-bold shadow-lg
                            transition-all ease duration-300  hover:scale-110"
                    onClick={handleClose}
            >No, aún no.
            </button>
            <Link href={`/guia/${isOpenModal.tema}`} className="p-4 rounded-md bg-[#4eff37] text-xl font-bold shadow-lg
                            transition-all ease duration-300  hover:scale-110"
     
            >Sí, adelante.
            </Link>
            
          </div>

            <p className="text-[12px]">Responde cada pregunta con honestidad, puedes realizar la prueba las veces que quieras.</p>

        </div>
      </ModalConfirmTest>
    );
  }
};

export default MConfirmTest;
