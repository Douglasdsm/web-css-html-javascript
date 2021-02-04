console.log(typeof Array,typeof new Array, typeof[]);
let aprovados = new Array('Bia','Carlos','Ana')
console.log(aprovados);
aprovados = ['Bia','Carlos','Ana']
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
aprovados[3]='Paulo'
aprovados.push('Douglas')// adiciona elemento
console.log(aprovados.length);
aprovados[9]='Rafael'
console.log(aprovados.length);
console.log(aprovados);
aprovados.sort() // ordena o array original 
console.log(aprovados);
delete aprovados[1]
console.log(aprovados[1]);
aprovados.sort()
console.log(aprovados[1]);
aprovados.splice(1,1)// delete elemento 1
console.log(aprovados); 
aprovados.splice(2,2)//deleta dois elemento apartis do indice 2
console.log(aprovados);
aprovados.splice(2,2,'Elemento1','Elemento2')// apaga e adciona dois elemento apartir do indice 2
//aprovados.splice(2,0,'Elemento1','Elemento2')// se colocar zero nao exclui

console.log(aprovados);
aprovados.splice(1,0,'Elemento1','Elemento2')// apaga e adciona dois elemento apartir do indice 2
console.log(aprovados);
