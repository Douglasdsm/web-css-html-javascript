

const produtos = [
    {nome:'Notebook',preco: 4254.25,fragil: true},
    {nome:'Ipod',preco: 2548.25,fragil: true},
    {nome:'Copo de Vidro',preco: 14.25,fragil: true},
    {nome:'Copo Plastico',preco: 4.5,fragil: false}

]

console.log(produtos.filter(function(p){
    return p.preco > 2500 && p.fragil==true
}));

const caro = produto => produto.preco > 2500
const fragil = produto => produto.fragil == true
const res = produtos.filter(caro).filter(fragil)
console.log(res);