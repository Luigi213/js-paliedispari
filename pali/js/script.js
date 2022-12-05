//1- Inserire una parola 
let word = prompt('Inserire una parola')
//1.1- creare una funzione per capire se la parola inserita e palindroma
function pali(wor) 
{
    let split = wor.split("").join("");
    let reverse_split = wor.split("").reverse().join("");
    if(split == reverse_split){
        return `${wor} è palindromo`
    }
    else{
        return `${wor} non è palindromo`
    }
}

let result = pali(word);
document.getElementById("pali").innerHTML = result;