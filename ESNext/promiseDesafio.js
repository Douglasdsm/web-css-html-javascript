const fs = require('fs')
const path = require('path')
function lerArquivo(caminho){
    return new Promise(resolver=>{
        fs.readFile(caminho,function(_,conteudo){
            resolver(conteudo.toString())
        })
    })
}
const caminho = path.join(__dirname,'dados.txt')
lerArquivo(caminho)
    .then(console.log)