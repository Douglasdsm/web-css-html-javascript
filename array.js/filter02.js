Array.prototype.filter2 = function(callback){
    const vetor = []
    for(let i = 0; i < this.length; i++ ){
        if(callback(this[i],i,this)){
            vetor.push(this[i])
        }
    }
    return vetor
}
Array.prototype.filter3 = function(callback){
    const array = []
    for(let j = 0; j < this.length; j++){
        if(callback(this[j],j,this)){
            array.push(this[j])
        }
    }
}
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
const res = produtos.filter2(caro).filter2(fragil)
console.log(res);