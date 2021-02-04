Array.prototype.reduce2 = function(callback){
    let acumulador = this[0]
    for(let i = 1; i < this.length; i++){
        acumulador = callback(acumulador,this[i],i,this)
    }
    return  acumulador
}



const alunos = [
    {nome:'Joao',nota:7.3,bolsista:false},
    {nome:'Maria',nota:9.2,bolsista:true},
    {nome:'Pedro',nota:9.8,bolsista:false},
    {nome:'Ana',nota:8.7,bolsista:true}

]

const resultados = alunos.map(a=>a.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual);
    return acumulador+atual
},0)
console.log(resultados);

// todos os alunos sao bolsistas?

const todosBolsista = (resultado,bolsista)=>resultado&&bolsista
console.log(alunos.map(a=>a.bolsista).reduce2(todosBolsista));
const algunBolsista = (resultado,bolsista)=>resultado || bolsista
console.log(alunos.map(a=>a.bolsista).reduce2(algunBolsista));