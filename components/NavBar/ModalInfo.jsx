import Link from "next/link"

const ModalInfo = ({setOpenModalInfo}) => {
  return (
    <div className='z-[1001] h-fit shadow-lg border w-[300px] text-black dark:text-white bg-white dark:bg-black absolute bottom-[50%] right-[44px] lg:top-[108px] lg:right-[235px] p-6'>
        <div className="">
        <h1 className="text-t-red text-xl">Publicar anuncio</h1>
        <p className="mt-4">Para publicar tu anuncio es necesario que primero te crees una cuenta.</p>
        <div className="mt-4 flex flex-col gap-2">
        <Link href={'/sign-in'} className="bg-back-red px-4 py-2 text-white text-center">
            <button onClick={() => setOpenModalInfo(false)}>Ya tengo cuenta</button>
        </Link>
        <Link href={'/sign-up'} className="bg-back-red px-4 py-2 text-white text-center">
            <button onClick={() => setOpenModalInfo(false)}>Crear una nueva cuenta</button>
        </Link>
        </div>
        <button onClick={() => setOpenModalInfo(false)} className="bg-back-red absolute top-0 right-0 px-4 py-2 font-bold rounded-bl-xl text-white">
            X
        </button>
        </div>
    </div>
  )
}

export default ModalInfo