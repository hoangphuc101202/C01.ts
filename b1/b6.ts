import { question } from "readline-sync";

let s : number = Number(question("Nhap so giay"));

let gio : number = Math.floor(s/3600);
let phut : number = Math.floor(s%3600/60);
let giay : number = Math.floor(s%3600%60)

console.log("Sau khi doi: "+gio +":"+phut+":"+giay);





