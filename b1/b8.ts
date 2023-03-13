import { question } from "readline-sync";
let a: number = Number(question("Nhap a: "));
let b: number = Number(question("Nhap b: "));

let temp : number;
if(a!=b){
    temp = a;
    a = b;
    b = temp;
}
else {
    a=a;
    b=b;
}
console.log("Sau khi hoan vi so a la " + a + " So b la " +b);