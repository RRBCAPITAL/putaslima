import axios from "axios"
import { generateIDFrontend } from "../FormCreates/Anuncios/generateIDFrontend";

export const createVideo = async (updatedFormContent) => {

    const idFrontend  = generateIDFrontend()

    const formContentData = {
        userId: updatedFormContent?.userId,
        idFrontend: idFrontend && idFrontend,  
        title: updatedFormContent?.title,
        description: updatedFormContent?.description,
        videoUrl: updatedFormContent?.videoUrl,
        thumbnailUrl: updatedFormContent?.thumbnailUrl,
    }

    console.log(formContentData);

    const res = await axios.post('api/video', formContentData).catch(err => console.log("Hubo un error al crear: ", err))
    
    console.log(res)

    // if(res){
    //     localStorage.setItem('updatedAnuncio', JSON.stringify(true))
    // }
    
    return res
}
