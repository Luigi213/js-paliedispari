//1- Inserire una parola 
let word = prompt('Inserire una parola')
//1.1- creare una funzione per capire se la parola inserita e palindroma
function pali(wor) 
{
    let split = wor.split('')
    let reverse = split.reverse()
    console.log(split)
    console.log(reverse)
}

pali(word);