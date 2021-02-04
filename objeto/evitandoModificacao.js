// Object.preventExtensions
const produto = Object.preventExtensions({
    nome:'Notebook',preco: 4865.23, tag:'promocao'
})
console.log('Extensivel: ',Object.isExtensible(produto));
produto.nome = 'Cadeira'
produto.descricao = 'Confortavel demais'
delete produto.tag
console.log(produto);
produto.tag = 'Novo'
console.log(produto);

// Object.seal -> congela os atributos nao deleta nem insere atributos mas ode haver insercao de dados e alteracao normalmente
const pessoa = {nome:'Pedro Vinicius',idade:24}
Object.seal(pessoa)
console.log('Selado: ',Object.isSealed(pessoa));
pessoa.sobrenome = 'Souza'
pessoa.idade = 25
delete pessoa.nome
console.log(pessoa);