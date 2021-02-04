/*Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente*/
function potencia(base,exp){
    let res = base
    for(let i = 1; i < exp; i++){
        res = res * base
    }
    return res
}


console.log('Resultado = ',potencia(2,3));