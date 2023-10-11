import { DirCometh } from "../util/enums";
import { Planet } from "./Planet";

export class Comeths extends Planet{
    constructor(row: number, column: number, public direction: DirCometh){
        super(row, column)
    }
    
}