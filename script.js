let cmimiLibrit = 12.50;
let sasiaLibrave = 3;

let cmimiFletores = 1.80;
let SasiaFletoreve = 4;

let totaliLibrave = cmimiLibrit * sasiaLibrave;
let totaliFletoreve = cmimiFletores * SasiaFletoreve;

let totali = totaliLibrave + totaliFletoreve;
totali += 2.50;

console.log("Fatura e Librarise");
console.log("Librat:", totaliLibrave,"Euro");
console.log("Fletoret:", totaliFletoreve, "Euro" );
console.log("Transporti: 2.50 Euro");
console.log("Totali:", totali,"Euro");