//1- Inserire una parola 
let word = prompt('Inserire una parola');
//1.1- creare una funzione per capire se la parola inserita e palindroma
function pali() 
{
    let newWord = word.split("").reverse().join("");
    if(newWord == word){
        return `${word} è palindromo`
    }
    else{
        return `${word} non è palindromo`
    }
}

let result = pali();
document.getElementById("pali").innerHTML = result;