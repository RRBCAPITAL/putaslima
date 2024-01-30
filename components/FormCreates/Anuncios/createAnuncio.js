import axios from "axios"
import { generateIDFrontend } from "./generateIDFrontend"

export const createAnuncio = async (updatedFormContent) => {

    const idFrontend  = generateIDFrontend()

    console.log(idFrontend);

    const formContentData = {
        userId: updatedFormContent?.userId,
        idFrontend: idFrontend && idFrontend,
        // tarifaxhr: Number(updatedFormContent?.tarifaxhr),
        tarifaPresencial: JSON.stringify(updatedFormContent?.tarifaPresencial),
        tarifaVirtual: JSON.stringify(updatedFormContent?.tarifaVirtual),    
        name: updatedFormContent?.name,
        questionEnd: updatedFormContent?.questionEnd,
        description: updatedFormContent?.description,
        categorias: updatedFormContent?.categorias,
        whatsapp: updatedFormContent?.whatsapp,
        region: updatedFormContent?.region,
        lugar: updatedFormContent?.lugar,
        nacionalidad: updatedFormContent?.nacionalidad,
        diasAtencion: updatedFormContent?.diasAtencion,
        horarioInicio: updatedFormContent?.horarioInicio,
        horarioFin: updatedFormContent?.horarioFin,
        edad: Number(updatedFormContent.edad),
        idioma: updatedFormContent?.idioma,
        altura: updatedFormContent?.altura,
        peso: updatedFormContent?.peso,
        imagenPrincipal: updatedFormContent?.imagenPrincipal,
        galeriaFotos: updatedFormContent?.galeriaFotos,
        galeriaVideos: updatedFormContent?.galeriaVideos,
    }

    console.log(formContentData);

    const res = await axios.post('api/anuncio', formContentData).catch(err => console.log("Hubo un error al crear: ", err))
    
    console.log(res)

    if(res){
        localStorage.setItem('updatedAnuncio', JSON.stringify(true))
    }
    
    return res
}
