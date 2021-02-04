const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios);

    const BuscaChina = pessoa => pessoa.pais == "China" && pessoa.genero =="F"
const china = funcionarios.filter(BuscaChina)
//console.log(china);
const MenorSalario = (menor,atual)=> {
    return menor.salario < atual.salario ? menor : atual
}

const pesquisa = china.reduce(MenorSalario)
console.log(pesquisa);
})

