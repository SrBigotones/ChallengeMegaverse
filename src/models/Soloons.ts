import { ColorSoloons } from "../util/enums";
import { Planet } from "./Planet";


export class Soloons extends Planet{

    constructor(row: number, column: number, public color: ColorSoloons){
        super(row, column)
    }
}