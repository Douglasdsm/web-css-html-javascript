const http = require('http')
const { get } = require('lodash')
const getTurma = (letra,callback)=>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    http.get(url,res=>{
        let resultado = []
        res.on('data',dados=>{
            resultado += dados
        })
        res.on('end',()=>{
            callback(JSON.parse(resultado))
        })
    })
}
let nomes = []
getTurma('A',alunos=>{
    nomes = nomes.concat(alunos.map(a=>`A: ${a.nome}`))
    console.log(nomes);
})