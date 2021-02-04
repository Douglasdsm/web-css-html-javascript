const escola = [
    {nome: 'Turma1',
    alunos:[
    {nome:'Joao',nota:7.3,bolsista:false},
    {nome:'Maria',nota:9.2,bolsista:true},
    {nome:'Pedro',nota:9.8,bolsista:false},
    {nome:'Ana',nota:8.7,bolsista:true}
    ]},{
        nome:'Turma2',
        alunos:[{
            nome:'Rebeca',
            nota:9.8
        },{
            nome:'CAMILA',
            nota: 8.6
        }]
    }

]

const getNota = aluno => aluno.nota
const getNotasTurma = turma=> turma.alunos.map(getNota)
const notas1 = escola.map(getNotasTurma)
console.log(notas1);
Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([],this.map(callback))
}
const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2);