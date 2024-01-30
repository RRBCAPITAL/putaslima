
import Modal from 'react-modal';

const ModalOk = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal"
      
    >
      <button onClick={onClose} className="close-button">
        Cerrar
      </button>
        <div className='w-[500px] h-[500px] bg-slate-600'>

        </div>
    </Modal>
  );
};

export default ModalOk;
