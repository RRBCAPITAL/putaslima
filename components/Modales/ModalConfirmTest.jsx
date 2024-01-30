

const ModalConfirmTest = ({children, isOpenModal, close}) => {

    console.log(close);

  return (
    <div className={`${!isOpenModal.status ? "hidden" : close ? "hidden" : ""} modal is-open fixed z-[999] top-[0] left-[0] w-screen min-h-screen flex items-center justify-center bg-[#000000d4]`}>
        <div className="modal-container bg-[#6f01ff] p-10 text-black rounded-md relative">
            <button className="modal-close absolute top-0 right-0 mr-2 text-4xl">x</button>
            {children}
        </div>
    </div>
  )
}

export default ModalConfirmTest