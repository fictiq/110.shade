import * as PIXI from "pixi.js-legacy";

export default interface ChromeBit {
    idx:string;
    src?:string;
    typ?:string;
    x:number;
    y:number
    slv?:any;
    val?:number;
    dat?:any;
    bit?:PIXI.Graphics;
}
