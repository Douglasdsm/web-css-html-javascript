const alunos = [
    {nome:'Joao',nota:7.3,bolsista:false},
    {nome:'Maria',nota:9.2,bolsista:true},
    {nome:'Pedro',nota:9.8,bolsista:false},
    {nome:'Ana',nota:8.7,bolsista:true}

]

// soma media da nota dos alunos
const notas = alunosNotas => alunosNotas.nota
const soma = (total,atual)=> total+atual
const total = alunos.map(notas).reduce(soma)
console.log(total/alunos.length);