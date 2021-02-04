console.log(this === global);
console.log(this===module);

console.log(this === exports)
console.log(this === module.exports);;
console.log('\n Dentro da Funcao');
function thisLog(){
    console.log(this === global);
    console.log(this===module);

    console.log(this === exports)
    console.log(this === module.exports);;
}

thisLog()