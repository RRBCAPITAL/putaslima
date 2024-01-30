import React from 'react';

const ImageModal = ({ image, closeModal }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center z-[1000]">
      <div className="max-w-full max-h-full flex flex-col items-center justify-center relative">
        <img src={image} alt="Imagen a pantalla completa" className='lg:h-screen lg:w-fit'/>
        <button onClick={closeModal} className="absolute top-2 right-2 bg-transparent bg-violet-500 p-2 rounded-md text-white border-none cursor-pointer">
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
