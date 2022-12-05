//1- Inserire pari o dispari
let pariDispari = prompt("Inserire pari o dispari").toLowerCase();
document.getElementById('pariDispari').innerHTML = `Hai scelto: ${pariDispari}`
//2- Inserisce numero da 1 a 5
let number = parseInt(prompt("Inserire numero da 1 a 5"));
while (number < 1 || number > 5){
    number = parseInt(prompt("Inserire nuovamente il numero da 1 a 5"));
}
document.getElementById('num').innerHTML = `Numero scelto: ${number}`
//3- Generiamo un numero radom (sempre da 1 a 5) per il computer
//3.1 usiamo una funzione 
function npcNumber(num)
{
    let generateNum = Math.floor(Math.random() * 5 + 1);
    return generateNum;
}

let result = npcNumber();
document.getElementById('numNpc').innerHTML = `Numero generato dal Npc: ${result}`
//4- Sommiamo i due numeri 
let somma = parseInt(result + number);
//5- Stabiliamo se la somma dei due numeri è pari o dispari
//5.1 usiamo una funzione
function dispariPari(som)
{
    if(som % 2 == 0){
        return 'pari'
    }
    return 'dispari'
}

let disPa = dispariPari(somma);
document.getElementById('somma').innerHTML = `Somma dei due numeri: ${somma}, quindi ${disPa}`
//6- Dichiariamo chi ha vinto
if(pariDispari == disPa && somma % 2 == 0){
    document.getElementById('result').innerHTML = 'Hai vinto'
}
else if(pariDispari == disPa && somma % 2 == 1){
    document.getElementById('result').innerHTML = 'Hai vinto'
}
else{
    document.getElementById('result').innerHTML = 'Hai perso'
}