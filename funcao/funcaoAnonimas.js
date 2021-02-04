 const soma = function(x,y){
     return x+y
 }
 const sub = function(x,y){
    return x-y
}
 const imprimir= function (a,b,operacao = soma){
     console.log(operacao(a,b));
 }
 imprimir(5,3)
 imprimir(5,3,sub)

 const pessoa = {
     falar: function (){
         console.log('Engenheiro Douglas Martins');
     }
 }
 pessoa.falar()