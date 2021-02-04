/*Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
*/
function repetir(repetir,vezes){
    const vetor = []
    for(let i = 0; i < vezes; i++){
        vetor.push(repetir)
    }
    return vetor
}

console.log(repetir("codigo",2));
console.log(repetir(7,3));
