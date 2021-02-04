/*Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/
function divisao(a,b){
    let divisaoOp = a/b
    let resto = a%b
    console.log('Divisao = ',divisaoOp);
    console.log('Resto = ',resto);
}

divisao(8,4)
divisao(9,4)