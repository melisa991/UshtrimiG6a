// ==========================================
// 01. FATURA E LIBRARISË
// ==========================================
console.log("=== 01. FATURA E LIBRARISË ===");

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

// ==========================================
// 02. REZULTATI I VLERËSIMIT
// ==========================================
console.log("=== 02. REZULTATI I VLERËSIMIT ===");

let aktiviteti = 18;
let projekti = 24;
let provimi = 43;

let totaliPare = aktiviteti + projekti + provimi;
console.log("Totali i pare", totaliPare);

let perqindjaPare = (totaliPare / 100) * 100;
console.log("Perqindja:", perqindjaPare + "%");

provimi = 48;
let totaliRi = aktiviteti + projekti + provimi;
let perqindjaRe = (totaliRi / 100) *100;

console.log("Totali i ri:", totaliRi);
console.log("Perqindja e re:" , perqindjaRe + "%");

// ==========================================
// 03. BUXHETI I NJË UDHËTIMI
// ==========================================
console.log("=== 03. BUXHETI I NJË UDHËTIMI ===");

let akomodimi = 96;
let transporti = 42;
let ushqimi = 57;

let personat = 3;
let buxheti = 80;

let kostoTotale = akomodimi + transporti + ushqimi;

console.log("Kostoja totale:", kostoTotale, "Euro");

let pjesaPersonit = kostoTotale / personat;

console.log("Secili person paguan:", pjesaPersonit, "Euro");

let parateMbetura = buxheti - pjesaPersonit;

console.log("Secilit i mbeten:", parateMbetura, "Euro");

// ==========================================
// 04. POROSIA ONLINE ME ZBRITJE
// ==========================================
console.log("=== 04. POROSIA ONLINE ME ZBRITJE ===");

let sasiaProd1= 2;
let cmimiProd1= 35;

let sasiaProd2 = 1;
let cmimiProd2 = 24;

let perqindjaZbritjes = 0.15; // 15%
let kostoTransporti = 4;

let cmimiParaZbritjes = (sasiaProd1 * cmimiProd1) + (sasiaProd2 * cmimiProd2);
console.log("Çmimi para zbritjes:", cmimiParaZbritjes, "Euro");

let shumaZbritjes = cmimiParaZbritjes * perqindjaZbritjes;
console.log("Shuma e zbritjes (15%):", shumaZbritjes, "Euro");

let cmimiPasZbritjes = cmimiParaZbritjes - shumaZbritjes;
console.log("Çmimi pas zbritjes:", cmimiPasZbritjes, "Euro");

console.log("Transporti:", kostoTransporti, "Euro");

let vleraPerfundimtare = cmimiPasZbritjes + kostoTransporti;
console.log("Vlera përfundimtare:", vleraPerfundimtare, "Euro");

// ==========================================
// 05. KONVERTIMI I TË DHËNAVE
// ==========================================
console.log("=== 05. KONVERTIMI I TË DHËNAVE ===");

let vlera1 = "25";
let vlera2 = "17";
let vlera3 = "8";

let mbledhjaPaKonvertim = vlera1 + vlera2 + vlera3;
console.log("Rezultati pa konvertim:", mbledhjaPaKonvertim);

let num1 = Number(vlera1);
let num2 = Number(vlera2);
let num3 = Number(vlera3);

let shumaNumrave = num1 + num2 + num3;
let mesatarja = shumaNumrave / 3;

console.log("Shuma pas konvertimit:", shumaNumrave);
console.log("Tipi i shumës:", typeof shumaNumrave);
console.log("Mesatarja:", mesatarja, "| Tipi:", typeof mesatarja);


// ==========================================
// 06. ANALIZA E KOHËS SË STUDIMIT
// ==========================================
console.log("=== 06. ANALIZA E KOHËS SË STUDIMIT ===");

let eHene = 95;
let eMarte = 80;
let eMerkure = 115;

let totalMinuta = eHene + eMarte + eMerkure;
let kohaNeOre = totalMinuta / 60;
let minutaMbetura = totalMinuta % 60;

console.log("Gjithsej minuta:", totalMinuta);
console.log("Koha në orë (dhjetore):", kohaNeOre);
console.log("Minutat e mbetura (me %):", minutaMbetura);
console.log("\n");

// ==========================================
// 07. INVENTARI I DYQANIT
// ==========================================
console.log("=== 07. INVENTARI I DYQANIT ===");

let stoku = 120;
let cmimiPerNjesi = 6.75;

console.log("Stoku fillestar:", stoku, "njësi");

stoku -= 18;
console.log("Stoku pas shitjes së parë (-18):", stoku, "njësi");

stoku -= 27;
console.log("Stoku pas shitjes së dytë (-27):", stoku, "njësi");

stoku += 35;
console.log("Stoku pas furnizimit të ri (+35):", stoku, "njësi");

let vleraStokut = stoku * cmimiPerNjesi;
console.log("Vlera e stokut përfundimtar:", vleraStokut, "Euro"); 


// ==========================================
// 08. SHPËRDARJA E MATERIALEVE
// ==========================================
console.log("=== 08. SHPËRDARJA E MATERIALEVE ===");

let fletetTotale = 157;
let fletetPerStudent = 6;

let grupet = parseInt(fletetTotale / fletetPerStudent);
let mbetja = fletetTotale % fletetPerStudent;
let kontrolli = (grupet * fletetPerStudent) + mbetja;

console.log("Numri i grupeve të plota:", grupet);
console.log("Fletët e mbetura:", mbetja);
console.log("Kontrolli ((grupet * 6) + mbetja):", kontrolli);
console.log("\n"); 

// ==========================================
// 09. FATURA ME TË DHËNA TEKSTUALE
// ==========================================
console.log("=== 09. FATURA ME TË DHËNA TEKSTUALE ===");

let cmimiTekst1 = "19.90";
let cmimiTekst2 = "8.50";

let sasia1 = 2;
let sasia2 = 3;

let cmimi1 = Number(cmimiTekst1);
let cmimi2 = Number(cmimiTekst2);

let totalArtikulli1 = cmimi1 * sasia1;
let totalArtikulli2 = cmimi2 * sasia2;

let shumaPorosise = totalArtikulli1 + totalArtikulli2;
let shumaFinaleVlera = shumaPorosise * 1.10;

let shumaFinaljaFormatuar = shumaFinaleVlera.toFixed(2);

console.log("Totali i artikullit 1:", totalArtikulli1.toFixed(2), "Euro");
console.log("Totali i artikullit 2:", totalArtikulli2.toFixed(2), "Euro");
console.log("Shuma finale me 10% shërbim:", shumaFinaljaFormatuar, "Euro");
console.log("Tipi i vlerës së formatizuar (toFixed kthen string):", typeof shumaFinaljaFormatuar);
console.log("\n");

// ==========================================
// 10. RAPORTI FINANCIAR I NJË AKTIVITETI
// ==========================================
console.log("=== 10. RAPORTI FINANCIAR I NJË AKTIVITETI ===");

let pjesemarresit = 45;
let pagesaPerPerson = 12;

let salla = 180;
let materialet = 95;
let reklama = 60;

let teArdhurat = pjesemarresit * pagesaPerPerson;
let shpenzimetTotale = salla + materialet + reklama;
let diferenca = teArdhurat - shpenzimetTotale;

console.log("--- RAPORTI FILLESTAR ---");
console.log("Të ardhurat totale:", teArdhurat, "Euro");
console.log("Shpenzimet totale:", shpenzimetTotale, "Euro");
console.log("Diferenca (Fitimi):", diferenca, "Euro");

shpenzimetTotale += 25;
let diferencaEre = teArdhurat - shpenzimetTotale;

console.log("--- PAS SHTIMIT TË SHPENZIMEVE TË PAPARASHIKUARA ---");
console.log("Shpenzimet e reja totale:", shpenzimetTotale, "Euro");
console.log("Diferenca e re (Fitimi i ri):", diferencaEre, "Euro");