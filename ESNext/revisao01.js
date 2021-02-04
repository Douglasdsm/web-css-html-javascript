// let  e const
{
    var a = 2
    let b = 3
    console.log(b);
}
console.log(a);

// template string
const produto = 'iPad'
console.log(`${produto} é caro!`);

// destructuring
const [l,e,...tras] = "coder"
console.log(l,e,tras);
const [x,y] = [1,2]
console.log(x, y);
const [n, , m] = [1, 2, 3]
console.log(n,m);
const {idade:i,nome} = {nome:'Ana', idade: 25}
console.log(i,nome);