const aprovados = ['Marli','Zico','Josiel','Marta']
aprovados.forEach(function(nome,indice){
    console.log(`${indice+1}) ${nome}`);
})

aprovados.forEach(nome => console.log(nome))
console.log('Metodo VAriavel Armazena Funcao');
const exibirAprovados = aprovados => console.log(aprovados);
aprovados.forEach(exibirAprovados)
