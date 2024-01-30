"use client"

import { useState } from "react"

const Filtros = ({ selectedFront, selectedCategory, reset, search }) => {

    const [dataSearch, setDataSearch] = useState("")

    const handleSearch = (e) => {
        e.preventDefault()
        setDataSearch(e.target.value)
    }
    
    const handleTechs = (e) => {
        e.preventDefault()
        selectedFront(e.target.value)
    }
    
    const handleCategory = (e) => {
        e.preventDefault()
        selectedCategory(e.target.value)
    }
    
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
          e.preventDefault(); // Evita el comportamiento predeterminado del Enter
          handleSearch();
        }
      };

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-40 text-center items-center justify-center mx-10 w-full">
            <div className="flex gap-2">
                <select  id="" className='bg-[#f6e6ff] rounded-lg outline-none cursor-pointer '
                onChange={ handleTechs }>
                    <option value="" >Tecnologias</option>
                    <option value="React" name="React">React</option>
                    <option value="Vue" name="Vue">Vue</option>
                    <option value="Angular" name="Angular">Angular</option>
                    <option value="Svelte" name="Svelte">Svelte</option>
                    <option value="Node" name="Svelte">Node</option>
                    <option value="Ruby" name="Svelte">Ruby</option>
                    <option value="PHP" name="Svelte">PHP</option>
                    <option value="Python" name="Svelte">Python</option>
                </select>

                <select  id="" className='bg-[#f6e6ff] rounded-lg outline-none cursor-pointer '
                onChange={ handleCategory }>
                    <option value="" >Categorías</option>
                    <option value="Educación" name="Educación">Educación</option>
                    <option value="Restaurante" name="Restaurante">Restaurante</option>
                    <option value="Consultoría" name="Consultoría">Consultoría</option>
                    <option value="Salud" name="Salud">Salud</option>
                    <option value="E-comerce" name="E-comerce">E-comerce</option>
                    <option value="Blogs" name="Blogs">Blogs</option>
                </select>

                <button className="p-2 bg-[#f6e6ff] rounded-lg outline-none cursor-pointer" onClick={() => reset()}>Restablecer</button>

            </div>
            <div className="flex gap-2 text-white">
                <input type="text" className="text-black" onChange={handleSearch} onKeyPress={handleKeyPress} />
                <button htmlFor="" className="bg-blue-500 p-[4px] rounded-md" onClick={() => search(dataSearch)}>Buscar</button>
            </div>
        </div>
  )
}

export default Filtros