import './styleG.css'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaExpand } from "react-icons/fa";

const Modal = ({
    clickedImg,
    setClickedImg,
    handelRotationRight,
    handelRotationLeft
  }) => {
    const handleClick = (e) => {
      if (e.target.classList.contains("dismiss")) {
        setClickedImg(null);
      }
    };
  
    return (
      <>
        <div className="overlay dismiss z-[1000]" onClick={handleClick}>
          <img src={clickedImg} alt="bigger picture" />
          <span  onClick={handleClick}>
           <FaExpand className="dismiss" />
          </span>
          <div onClick={handelRotationLeft} className="absolute left-[4px] bottom-1/2 cursor-pointer">
            <div>
            <IoIosArrowBack className='h-[56px] w-[56px] text-white' />
            </div>
          </div>
          <div onClick={handelRotationRight} className="absolute right-[4px] bottom-1/2 cursor-pointer">
            <div>
            <IoIosArrowForward className='h-[56px] w-[56px] text-white' />
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Modal;