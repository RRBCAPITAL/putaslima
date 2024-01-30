import axios from "axios"
import { generateIDFrontend } from "../FormCreates/Anuncios/generateIDFrontend"

export const createCositas = async (updatedFormContent) => {

    const idFrontend  = generateIDFrontend()

    const formContentData = {
        userId: updatedFormContent?.userId,
        idFrontend: idFrontend && idFrontend,  
        title: updatedFormContent?.title,
        description: updatedFormContent?.description,
        imageUrl: updatedFormContent?.imageUrl,
    }

    console.log(formContentData);

    const res = await axios.post('/api/cositas', formContentData).catch(err => console.log("Hubo un error al crear: ", err))
    
    console.log(res)

    // if(res){
    //     localStorage.setItem('updatedAnuncio', JSON.stringify(true))
    // }
    
    return res
}
