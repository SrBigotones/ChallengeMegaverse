
/*
    TODO: 
        Exception handle
        Update diagram
*/

import { AxiosError } from "axios"
import { StarMap } from "./service/StarMap"
import dotenv from 'dotenv'
dotenv.config()

// Solution

let starMap = new StarMap(process.env.CANDIDATE_ID)
starMap.fillMapData().then(e => 
    starMap.completeMap().then(() => console.log("ALL DONE"))
    // starMap.cleanMap()
    ).catch(e => {
        if(e instanceof AxiosError){
            console.log(
                `API Error: \nresponse: ${e.response.data.message}`)
        }else{
            console.log(`Unkown error: ${e}`)
        }
    })
//End Solution



