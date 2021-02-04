/*Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
*/
function nomeDoMes(num){
    if(num == 1){
        return 'Janeiro'
    }else if(num == 2){
        return 'Fevereiro'
    }else if(num == 3){
        return 'Marco'
    }else if(num == 4){
        return 'Abril'
    }else if(num == 5){
        return 'Maio'
    }else if(num == 6){
        return 'Junho'
    }else if(num == 7){
        return 'Julho'
    }else if(num == 8){
        return 'Agosto'
    }else if(num == 9){
        return 'Setembro'
    }else if(num == 10){
        return 'Outubro'
    }else if(num == 11){
        return 'Novembro'
    }else if(num == 12){
        return 'Dezembro'
    }
    
}
console.log(nomeDoMes(2));
console.log(nomeDoMes(5));
console.log(nomeDoMes(8));