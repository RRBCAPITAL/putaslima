"use client"

import { useState } from "react"

const SearchBar = ({search}) => {

    const [dataSearch, setDataSearch] = useState("")

    const handleSearch = (e) => {
        e.preventDefault()
        setDataSearch(e.target.value)
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
          e.preventDefault(); // Evita el comportamiento predeterminado del Enter
          handleSearch();
        }
      };

  return (
    <div className="flex gap-2 text-white">
                <input type="text" className="text-black border-2 p-[6px] border-[#e5e3eb] rounded-md" onChange={handleSearch} onKeyPress={handleKeyPress} />
                <button htmlFor="" className="bg-blue-500 p-[6px] rounded-md" onClick={() => search(dataSearch)}>Buscar</button>
    </div>
  )
}

export default SearchBar