const notas = [7.7,5.6,6.5,8.9,3.6,7.1,9.0]
// sem callback = []
let notasBaixas=[]
for(let i in notas){
    if(notas[i]<7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas);
notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})
const notasBaixas3 = notas.filter(notas=> notas<7)
console.log(notasBaixas2);
console.log(notasBaixas3);