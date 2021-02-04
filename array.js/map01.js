const nums = [1,2,3,4,5,6]

//for com proposito

const dobro = (e)=> 2*e
let verNuns = nums.map(dobro)
let novoNuns = nums.map(function(e){
    return 2*e
})
console.log(novoNuns);
console.log(verNuns);
const soma = (e)=> e+10
const quadrado = e => e*3
const paraDinheiro = e=>`R$ ${parseFloat(e).toFixed(2).replace('.',',')}`
let resultado =  nums.map(soma).map(quadrado).map(paraDinheiro)
console.log(resultado);