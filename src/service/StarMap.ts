import axios from "axios";
import { Planet } from "../models/Planet";
import { endpoint } from "../util/endpoint";
import { PlanetFactory } from "../factory/PlanetFactory";

export class StarMap{
    private map: string[][]

    constructor(private candidateId: string){}

    /** 
     * Gather solution map data from API
     */
    async fillMapData(){
        console.log("Calling API to download map data")

        await axios.get(`${endpoint}/map/${this.candidateId}/goal`).then(e => {
            this.map = e.data.goal
            console.log('Download: Data map COMPLETE!')
        })
    }

    /** Place solution map on map API */
    async completeMap(){
        let planetFactory = new PlanetFactory()
        for (let i = 0; i < this.map.length; i++) {
            for (let j = 0; j < this.map[i].length; j++) {
                if(this.map[i][j] !== 'SPACE'){
                    this.placePlanet(planetFactory.createPlanet(i,j, this.map[i][j])).then(await this.wait(1500))
                }  
            }
        }
    }


    /**
     * Place a planet in the map
     * @param planet 
     */
    async placePlanet(planet: Planet){
        console.log(`Placing: ${planet}`)
        await axios.post(`${endpoint}/${planet.constructor.name.toLowerCase()}`,{
            ...planet,
            candidateId: this.candidateId,
        },{headers: {"Content-Type":"application/json"}})
    }

    /**
     * Clean every planet in the map (It takes a long time) 
     */
    async cleanMap(){
        console.log("Cleaning space dust...")
        for (let i = 0; i < this.map.length; i++) {
            for (let j = 0; j < this.map[i].length; j++) {
                this.deletePlanet(i,j).then(await this.wait(2000))
            }
        }
    }

    /**
     * Delete a single planet from map
     */
    async deletePlanet(row: number, column: number){
        return await axios.delete(
            `${endpoint}/polyanets`, {
                data:{
                    candidateId:this.candidateId,
                    row,
                    column
                }
            })
    }

    private wait(ms: number): Promise<any>{
        return new Promise( (resolve) => {setTimeout(resolve, ms)});
    }
}