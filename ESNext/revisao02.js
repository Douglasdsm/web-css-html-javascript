// function Arrow
const soma = (a,b)=> a + b
console.log(soma(2,3));

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()
// parametro default
function log(texto = 'Node'){
    console.log(texto);
}

log()
log(undefined)
log(null)
log('Sou mais forte');
// operador rest
function total(...numeros){
    let total = 0
    console.log(numeros);
    numeros.forEach(n=>total+=n)
    return total
}

console.log(total(2,6,5,4,2,3));