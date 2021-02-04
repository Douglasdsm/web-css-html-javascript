/*Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:*/
function primeiroUltimoElemento(elemento){
    const primeiro = elemento.shift()
    const ultimo  = elemento.pop()
    return[primeiro,ultimo]
}

const array = [1,2,3,4,5,6,7,8,9,10]
const elementoPU = primeiroUltimoElemento(array)
console.log(elementoPU); 