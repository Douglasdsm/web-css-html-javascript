const notas = [6.7,7.4,5.3,6.8,9.4,10]
for(i in notas){
    console.log(i, notas[i]);
}
const pessoa = {
    nome:'Douglas',
    sobrenome:'Martins',
    idade: 24,
    peso: 79
}
for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`);
}