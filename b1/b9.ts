import { question } from "readline-sync";
let x : number = Number(question("Nhap x: "));
let y : number = Number(question("Nhap y: "));

let s : number = Math.floor((Math.sqrt(x)+Math.abs(x))/(Math.sqrt(Math.pow(x,y))));

console.log("vay s: ",s);