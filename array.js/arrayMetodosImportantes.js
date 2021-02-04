const pilotos = ['Vettel','Alonso','Raikkone','Massa']
pilotos.pop() // remove ultimo elemento
console.log(pilotos);

pilotos.push('Verstapper')  // adiciona na ultima posicao
console.log(pilotos); 
pilotos.shift() // remove primeiro elemento
console.log(pilotos);
pilotos.unshift('Hamilton')// adiciona no primeiro elemento 
console.log(pilotos);
// splice pode adicionar ou remover elementos
pilotos.splice(2,0,'Bottas','Senna')
console.log(pilotos);
pilotos.splice(3,1)// removeu elemento numero 3
console.log(pilotos);

// slice
const algunsPilotos = pilotos.slice(2)// novo array`
console.log(algunsPilotos);
const algunsPilotos2 = pilotos.slice(0,3)// criar array dos indices 0 1 2  
console.log(algunsPilotos2); 