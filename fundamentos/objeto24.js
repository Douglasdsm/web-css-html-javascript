const prod = {}
prod.nome = "Notebook"
prod.preco = 4561.25

prod['Desconto Legal'] =0.4 // evitar atributos com espaco 
console.log(prod);

const prod2 = {
    nome:"Celular",
    preco: 561.25,
    obj: {
        blabla: 245,
        preco: 254
    }
}
console.log(prod2);