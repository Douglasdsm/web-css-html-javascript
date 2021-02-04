/*Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento, pretendese adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade indeterminada
de números e retorne a média simples desses números*/
function calcularMedia(numeros) {
    const quantidadeDeNumeros = numeros.length
    let somaTotal = 0
    for(numero of numeros) {
    somaTotal += numero
    }
    return somaTotal / quantidadeDeNumeros
    }
function calcular(numero){
    const contar = numero.length
    const total = (a,b)=> a+b
    return numero.reduce(total)/contar
}    


const a = calcularMedia([0, 10]) // retornará 5
const b = calcularMedia([1, 2, 3, 4, 5]) // retornará 3
console.log(a,b);
const c = calcular([0, 10]) // retornará 5
const d = calcular([1, 2, 3, 4, 5]) // retornará 3
console.log(c,d);