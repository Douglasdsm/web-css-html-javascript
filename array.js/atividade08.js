function simboloMais(vezes){
    let mais = ''
    for(let i = 0; i < vezes;i++){
        mais +='+'
    }
    return mais
}
function simboloMais2(quantidade) {
    return Array(quantidade).fill('+').join('')
    }
function simboloMais(quantidade) {
return "+".repeat(quantidade)
}


function simboloMais3(quantidade) {
    return "+".repeat(quantidade)
    }
    
console.log(simboloMais(2));
console.log(simboloMais2(8));
console.log(simboloMais3(10));