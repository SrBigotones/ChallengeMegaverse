import { Comeths } from "../models/Cometh";
import { Planet } from "../models/Planet";
import { Polyanets } from "../models/Polyantes";
import { Soloons } from "../models/Soloons";
import { ColorSoloons, DirCometh } from "../util/enums";

export class PlanetFactory{

    createPlanet(row: number, column: number, property: string): Planet{
        if(property.toLowerCase().includes('cometh')){
            return new Comeths(row, column, DirCometh[property])
        }else if(property.toLowerCase().includes('soloon')){
            return new Soloons(row, column, ColorSoloons[property])
        }else{
            return new Polyanets(row, column)
        }
            
    }

    
}