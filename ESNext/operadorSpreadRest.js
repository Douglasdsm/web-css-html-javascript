// usar rest com parametro de funcao
// usar spread com Objeto
const funcionario = {nome:'Maria',salario:12348.99}
const pessoa = {altura:1.75,peso:80.0}
const clone = {ativo: true, ...funcionario,...pessoa}
console.log(clone);
// usar spread com array
const grupoA = ['Joao','Pedro','Gloria']
const grupoFinal = ['Maria',...grupoA,'Rafaela']
console.log(grupoFinal);