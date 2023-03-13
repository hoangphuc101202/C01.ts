import { question } from "readline-sync";
let a1 : number = Number(question("Nhap a1: "));
let a2 : number = Number(question("Nhap a2: "));
let b1 : number = Number(question("Nhap b1: "));
let b2 : number = Number(question("Nhap b2: "));

let s : number = Math.sqrt(Math.pow(a2-a1,2)+Math.pow(b2-b1,2));
console.log("vay khoang cach la",s);
