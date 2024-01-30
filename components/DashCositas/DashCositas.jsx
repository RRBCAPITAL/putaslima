"use client"

import { useState, useEffect } from "react"
import { fechaLegible } from "../AdminDashboard/fechaLegible";
import Link from "next/link"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiTwotoneEdit } from 'react-icons/ai'
import { AiFillDelete } from 'react-icons/ai'
import { ImEye } from 'react-icons/im'
import ModalEdit from "./ModalEdit"
import ModalDelete from "./ModalDelete";
import { usePathname } from "next/navigation";

const DashCositas = () => {

  const [isEdited, setIsEdited] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const pathname = usePathname()

  const [ anuncios, setAnuncios ] = useState()
    const [filteredAnuncios, setFilteredAnuncios] = useState();

    const [textSearch, setTextSearch] = useState('')
    
    const [modalEditOpen, setModalEditOpen] = useState(false)
    const [idAnuncio, setIdAnuncio] = useState()
    const [nivel, setNivel] = useState()

    const [modalDeleteOpen, setModalDeleteOpen] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)
     
  
  useEffect(() => {

        const storedUser = localStorage.getItem("storedUser");
        const parsedUser = JSON.parse(storedUser) 
        setCurrentUser(parsedUser)
     
  }, [])

    const handleSearch = (e) => {

      const { name, value } = e.target
      setTextSearch(value)

    }
    
    const clickSearch = (e) => {

      e.preventDefault()

      console.log(textSearch);

      const filtroSearchBar = anuncios?.filter(
        (a) =>
          a.name?.toLowerCase().includes(textSearch.toLowerCase()) ||
          (a.idFrontend && a.idFrontend.toLowerCase().startsWith(textSearch.toLowerCase()))
      );

      console.log(filtroSearchBar);

      // setFilteredAnuncios(filtroSearchBar);

      if (filtroSearchBar.length === 0) {
        toast.error('No se encontró ningún anuncio.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          style: {
            background: '#ff3d64',
            color: 'white',
          },
        });
        return
      }

      toast.success('Se encontro el anuncio.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      });
      setFilteredAnuncios(filtroSearchBar);
    }

    console.log(isEdited);
    
    useEffect(() => {
        // Realiza una nueva solicitud para obtener la lista de anuncios actualizada.
        fetch('/api/cositas')
          .then(data => data.json())
          .then(({ data }) => {
            // Ordena los anuncios primero por fecha y luego por hora
            data.sort((a, b) => {
              const dateA = new Date(a.createdAt);
              const dateB = new Date(b.createdAt);
              if (dateA > dateB) return -1; // Fecha A es más reciente
              if (dateA < dateB) return 1; // Fecha B es más reciente
              // Si las fechas son iguales, compara las horas
              return dateB.getTime() - dateA.getTime();
            });
            console.log(data);
            setAnuncios(data);
          });
  
    }, [anuncios]);

    console.log(anuncios);

    useEffect(() => {
      if (isEdited || isDeleted) {
        // Realiza una nueva solicitud para obtener la lista de anuncios actualizada.
        fetch('/api/cositas')
          .then(data => data.json())
          .then(({ data }) => {
            setAnuncios(data);
          });
      }
    }, [isEdited, isDeleted]);




  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      // Si se presiona la tecla Enter, ejecuta la búsqueda
      clickSearch();
    }
  };

  const cleanInput = () => {
    setTextSearch('');
    setFilteredAnuncios(null);
  }

  const handleEdit = (nivel, idAnuncio) => {

    console.log(idAnuncio);
    console.log(nivel);

    setModalEditOpen(true)
    setIdAnuncio(idAnuncio)
    setNivel(nivel)
  }

  const handleDelete = (idAnuncio) => {

    console.log(idAnuncio);
    console.log(nivel);

    setModalDeleteOpen(true)
    setIdAnuncio(idAnuncio)

  }

  console.log(filteredAnuncios);

  return (
    <div className="flex w-screen">
           <ToastContainer autoClose={5000} theme='colored' newestOnTop={true} />
          {/* <Sidebar /> */}

        <content className='w-full flex flex-col items-center justify-center'>
        <div className="mt-4 flex gap-2">
        <Link href={'/'} className="font-bold text-black border-2 border-orange-700 rounded p-2 bg-orange-100 hover:bg-orange-300">Volver al home</Link>
        <Link href={'/dashboard'} className="font-bold text-black border-2 border-orange-700 rounded p-2 bg-orange-100 hover:bg-orange-300">Anuncios</Link>
        <Link href={'/dashboard/videos'} className={`font-bold text-black border-2 border-orange-700 rounded p-2 bg-orange-100 ${pathname === '/dashboard/videos' ? 'bg-orange-300' : ''} hover:bg-orange-300`}>Videos</Link>
        <Link href={'/dashboard/cositas'} className={`font-bold text-black border-2 border-orange-700 rounded p-2 ${pathname === '/dashboard/cositas' ? 'bg-orange-300' : ''} hover:bg-orange-300`}>Cositas</Link>
        </div>
            {/* <contentchild className='w-5/6 ml-[15%] min-h-screen'> */}
            <contentchild className='w-full mx-20 min-h-screen'>
              <h1 className="text-xl mt-10 mb-1 mx-auto text-center text-violet-900 opacity-60">Bienvenido <strong>{currentUser?.role}</strong>, {currentUser?.fullname}</h1>
            <h1 className="font-extrabold text-2xl sm:text-4xl text-center mb-10 py-1 border-b-4 border-bor-red w-fit mx-auto"><strong className="text-t-red">Cositas</strong> Registradas</h1>

            <form action="" onSubmit={clickSearch} onKeyUp={handleKeyUp} className="flex justify-center gap-2 my-10">
              <input type="text" name="" value={textSearch} onChange={handleSearch} className="outline-none px-4 py-2 w-[70%] border-2 rounded-md border-slate-400 bg-slate-200"/>
              <button type="submit" className="px-4 py-2 border-2 rounded-md border-slate-400 bg-slate-200 font-extrabold hover:bg-slate-100">Buscar</button>
              <button type="button" onClick={cleanInput} className="px-4 py-2 rounded-md border-2 border-slate-400 bg-slate-200 font-extrabold hover:bg-slate-100">Todos los videos</button>
            </form>
            <div>
            <div class="overflow-x-auto rounded-lg">
      <table class="min-w-full table-auto mb-20">
        <thead className="border-b-4 border-bor-red rounded-md">
          <tr>
          <th class="border px-4 py-2  font-extrabold">#</th>
            <th class="border px-4 py-2  font-extrabold">ID</th>
            <th class="border px-4 py-2  font-extrabold">Usuario creador</th>
            <th class="border px-4 py-2  font-extrabold">Título</th>
            <th class="border px-4 py-2  font-extrabold">Categorías</th>
            <th class="border px-4 py-2  font-extrabold">Estado</th>
            <th class="border px-4 py-2  font-extrabold">Fecha de creación</th>
            <th class="border px-4 py-2  font-extrabold">Acciones</th>
       

          </tr>
        </thead>
        <tbody className="">
  
          {
            
          filteredAnuncios ? filteredAnuncios?.map((arr, index) => (
            
            <tr key={arr?.id} className="border-b-4 border-bor-red">
            <td className="text-center px-4 py-2">{index + 1}</td>
            <td className="text-center px-4 py-2">{arr?.idFrontend}</td>
            <td className="text-center px-4 py-2 flex flex-col gap-1">
              <nav className="text-sm">{arr?.user?.fullname}</nav>
              <nav className="text-[12px] font-bold">{arr?.user?.email}</nav>
            </td>
            <td class="text-center pt-2 font-medium">
            <textarea
                type="text"
                cols="10"
                rows="1"
                style={{ resize: 'none' }}
                readOnly
                placeholder={arr?.title}
                className="p-4 text-white placeholder:text-[10px] dark:text-black  focus:text-white focus:dark:text-black border-2 border-bor-red rounded-[10px] outline-none bg-white"
                
              />  
            </td>
            <td class="text-center px-4 py-2 font-medium">{arr?.nivel}</td>
            <td class="text-center px-4 py-2">{arr?.nivel === "NOTHING" ? <nav className="p-2 rounded-[20px] bg-red-500 text-white font-bold">Inactivo</nav>: <nav className="p-2 rounded-[20px] bg-[#38ff56] font-bold">Activo</nav>}</td>
            <td class="text-center px-4 py-2">{fechaLegible(arr?.createdAt)}</td>
            <td class="text-center px-1 py-2 flex text-sm gap-1 items-center justify-center">
            <button onClick={() => handleEdit((arr?.nivel), (arr?.id))} className="px-4 py-2 my-auto rounded-md bg-orange-500 hover:bg-orange-600 font-extrabold text-white w-fit">
              <AiTwotoneEdit className="w-4 h-4"/>
            </button>
            <button className="px-4 py-2 my-auto rounded-md bg-red-500 hover:bg-red-600 font-extrabold text-white w-fit" onClick={() => handleDelete(arr?.id)}>
              <AiFillDelete className="w-4 h-4" />
            </button>
              <Link href={`/chicas/${arr?.id}`} className="px-4 my-auto py-2 rounded-md bg-blue-500 hover:bg-blue-600 font-extrabold text-white w-fit">
              <ImEye className="w-4 h-4"/>
              </Link>
            </td>
      
          </tr>
          )) : anuncios?.map((arr, index) => (
            
            <tr key={arr?.id} className="border-b-4 border-bor-red">
            <td className="text-center px-4 py-2">{index + 1}</td>
            <td className="text-center px-4 py-2">{arr?.idFrontend}</td>
            <td className="text-center px-4 py-2 flex flex-col gap-1">
              <nav className="text-sm">{arr?.user?.fullname}</nav>
              <nav className="text-[12px] font-bold">{arr?.user?.email}</nav>
            </td>
            <td class="text-center pt-2 font-medium  w-[200px]">
            <label className="text-center py-2" htmlFor="">{arr?.title}</label>
            </td>
            <td class="text-center px-4 py-2 font-medium">{arr?.nivel}</td>
            <td class="text-center px-4 py-2">{arr?.nivel === "NOTHING" ? <nav className="p-2 rounded-[20px] bg-red-500 text-white font-bold">Inactivo</nav>: <nav className="p-2 rounded-[20px] bg-[#38ff56] font-bold">Activo</nav>}</td>
            <td class="text-center px-4 py-2">{fechaLegible(arr?.createdAt)}</td>
            <td class="text-center px-1 py-2 flex text-sm gap-1 items-center justify-center">
            <button onClick={() => handleEdit((arr?.nivel), (arr?.id))} className="px-4 py-2 my-auto rounded-md bg-orange-500 hover:bg-orange-600 font-extrabold text-white w-fit">
              <AiTwotoneEdit className="w-4 h-4"/>
            </button>
            <button className="px-4 py-2 my-auto rounded-md bg-red-500 hover:bg-red-600 font-extrabold text-white w-fit" onClick={() => handleDelete(arr?.id)}>
              <AiFillDelete className="w-4 h-4" />
            </button>
              {/* <Link href={`/chicas/${arr?.id}`} className="px-4 my-auto py-2 rounded-md bg-blue-500 hover:bg-blue-600 font-extrabold text-white w-fit">
              <ImEye className="w-4 h-4"/>
              </Link> */}
            </td>
      
          </tr>
          ))
          }


        </tbody>
      </table>
    </div>
            </div>
            </contentchild>
        </content>
          {
          modalEditOpen && <ModalEdit idAnuncio={idAnuncio} userId={currentUser && currentUser?.id} nivel={nivel} setModalEditOpen={setModalEditOpen} setIsEdited={setIsEdited} anuncios={anuncios} setAnuncios={setAnuncios} filteredAnuncios={filteredAnuncios}/>
          }
          {
          modalDeleteOpen && <ModalDelete idAnuncio={idAnuncio} setModalDeleteOpen={setModalDeleteOpen} setIsDeleted={setIsDeleted} currentUserOk={currentUser}/>
          }
        </div>
  )
}

export default DashCositas