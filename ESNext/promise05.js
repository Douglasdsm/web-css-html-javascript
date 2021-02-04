const { Resolver } = require("dns");
const { resolve } = require("path");

function funcionarOuNao(valor,chanceErro){
    return new Promise((resolve,reject)=>{
        if(Math.random()< chanceErro){
            reject('Ocorrreu um erro!')
        }else{
            resolve(valor)
        }
    })
}
funcionarOuNao('Testando...',0.9)
    .then(v=>console.log(`Valor: ${v}`))
    .then(
        //v => console.log(v),
        err =>console.log(`Erro esp.: ${err}`)
    )
    .then(console.log('quase fim'))
    .catch(err=>console.log(`Erro: ${err}`))
    .then(console.log('fim'))
