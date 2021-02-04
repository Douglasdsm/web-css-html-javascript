//Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
function idadeEmDias(idade){
    dias = 365*idade
    return dias
}

const Douglas = idadeEmDias(24)
const Deivid = idadeEmDias(23)
console.log(Douglas);
console.log(Deivid);