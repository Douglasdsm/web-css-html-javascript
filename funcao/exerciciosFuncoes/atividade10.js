/*Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false*/
function verificar(n){
    if(n % 3 == 0){
        return true
    }else{
        return false
    }
}
console.log(verificar(2));
console.log(verificar(5));
console.log(verificar(14));
console.log(verificar(3));
console.log(verificar(9));
console.log(verificar(12));