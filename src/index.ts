
/*
    TODO: 
        Exception handle
        Update diagram
*/

import { StarMap } from "./service/StarMap"
import dotenv from 'dotenv'
dotenv.config()

// Solution
let starMap = new StarMap(process.env.CANDIDATE_ID)
starMap.fillMapData().then(e => 
    starMap.completeMap()
    // starMap.cleanMap()
 )
//End Solution



