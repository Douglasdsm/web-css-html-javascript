//usando Notacao Literal
const obj1 = {}
console.log(obj1);
// object em js
console.log(typeof Object, typeof new Object);
const obj2 = new Object
console.log(obj2);
// funcao construtora
function Produto(nome,preco,desc){
    this.nome = nome
    this.getPrecoComDesconto = ()=>{
        return preco * (1- desc)
    }
}

const p1 = new Produto("Caneta",7.99,0.1)
const p2 = new Produto("Notebook",1587.99,0.05)
console.log(p1.getPrecoComDesconto().toFixed(2),p2.getPrecoComDesconto().toFixed(2));
// factory
function criarFunionario(nome,salarioBase,faltas){
     return {
         nome,
         salarioBase,
         faltas,getSalario(){
             return (salarioBase /30) * (30-faltas)
         }
     }
 }
 const f1 = criarFunionario("Marcelo",4582,6)
 console.log(f1.getSalario().toFixed(2));
//Object.create
const filha = Object.create(null)
filha.nome = "Ana"
console.log(filha);

// pessoa ->123 ->{...}
const pessoa= {nome:'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa);

Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa);

const pessoaConstante = Object.freeze({nome: 'Joao'})
console.log(pessoaConstante);