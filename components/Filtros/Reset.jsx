import React from 'react'

const Reset = ({reset}) => {

  return (
      <>
        <button className="dark:border-2 dark:border-[#e5e3eb] p-[6px] dark:hover:border-2 dark:hover:border-[#577ac4] hover:border-2 hover:border-[#577ac4] text-[#a19bb5] bg-white rounded-lg outline-none cursor-pointer" onClick={() => reset()}>Restablecer</button>
      </>
      )
}

export default Reset