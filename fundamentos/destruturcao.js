const pessoa = {
    nome: 'Douglas',
    idade:24,
    enderec0:{
        logadouro:'Rua ABC',
        numero:1000
    }
}
const {nome,idade} = pessoa
console.log(nome,idade);
const {nome:n,idade:i} = pessoa
console.log(i,n);