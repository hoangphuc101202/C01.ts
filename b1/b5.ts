import { question } from "readline-sync";
let Biensoxe : String = question("Nhap bien so xe: ");
let Tong : number = 0;
for(let i: number = 0; i < Biensoxe.length; i++){
    Tong+=parseInt(Biensoxe[i]);
}
let TongSo: number = Tong%10;
console.log("Tong So ",TongSo);