function fun(){}// LITERAL
// ARMAZENA NA VARIAVEL
const fun2 = function(){}
// armazena em array
const array = [function(a,b){return a+b},fun,fun2]
console.log(array[0](2,3));

const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar());

// funcao recebe outra funcao
function run(fun){
    fun()
}
run(function(){console.log('Executando....');})

// um funcao pode retornna outra funcao
function soma(a,b){
    return function(c){
        console.log(a+b+c);
    }
}

soma(2,3)(5)