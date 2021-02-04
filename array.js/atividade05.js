//Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

function maiorOuIgual(a,b){
    if(typeof a != typeof b){
        return false
    }else{
        return a>=b
    }
}

console.log(maiorOuIgual(0,0));
console.log(maiorOuIgual(0,"0"));
console.log(maiorOuIgual(5,1));