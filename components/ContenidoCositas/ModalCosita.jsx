import React from "react";
import Link from "next/link";

const ModalCosita = ({ data, setOpenModal }) => {
  return (
    <total className="h-screen lg:h-screen w-screen bg-[#00000093] fixed inset-0 z-[1000] flex justify-center items-center" onClick={() => setOpenModal(false)}>
      <modal className=" scroll-auto w-[96%] h-[600px] sm:w-[740px] sm:h-[500px] bg-white dark:bg-dark-d  mt-4 mb-10 flex flex-col sm:flex-row items-center sm:justify-center gap-4">
        <div className="w-[90%] h-[300px] mt-4 lg:mt-0 sm:w-[350px] sm:h-[475px]">
          <img
            src={data?.imageUrl}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-[90%] h-[300px] lg:mt-0 sm:w-[350px] sm:h-[475px]  relative">
          <h1 className="text-2xl font-bold text-slate-600 dark:text-slate-300 mt-2">
            {data?.name}
          </h1>
          <h2 className="text-normal text-slate-600 dark:text-slate-300 mt-4">
            {data?.description}
          </h2>

          <div className="absolute bottom-[10px] sm:bottom-0 right-0 flex gap-2 items-center mt-4">
            <h1 className="font-bold mb-2 text-slate-600 dark:text-slate-400 text-xl mr-4">
              Adquiérelo en{" "}
            </h1>
            <Link href={"https://t.me/papayahubpe"} target="_blank">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/telegram-app--v1.png"
                alt="telegram-app--v1"
                className="h-[36px] w-[36px] my-auto mb-2"
              />
            </Link>
            <Link
              href={`https://api.whatsapp.com/send?phone=+51989752208&text=Hola%2C%20me%20interesa%20comprar%20un%20producto%20en%20Papayahub.pe`}
              target="_blank"
            >
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/whatsapp--v1.png"
                alt="whatsapp--v1"
                className="h-10 w-10 my-auto mb-2"
              />
            </Link>
          </div>
        </div>
      </modal>
    </total>
  );
};

export default ModalCosita;
