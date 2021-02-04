const pessoa = {
    saudacao: 'Bom dia ',
    falar(){
        console.log(this.saudacao);
    }
}
//const falar = pessoa.falar()
//falar()// conflito entre paradigmas: funcional e oo
const falarPessoa = pessoa.falar.bind(pessoa)
falarPessoa()