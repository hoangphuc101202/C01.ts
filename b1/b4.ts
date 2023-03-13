import { question } from "readline-sync";
const SL: number = Number(question("Nhap SL: "));
const DonGia: number = Number(question("Nhap Don gia: "));

const SoTien: number = SL * DonGia;
const Thue : number = SoTien * 0.1;

console.log("Vay So Tien", SoTien);
console.log("Vay Thue ",Thue);

