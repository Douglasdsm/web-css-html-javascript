function produto(iten,qt,preco) {
    return{
        iten,
        qt,
        preco
    }
    
}

const lista = []
// lista[0]=new produto('Cadeira',5,(1200*100))
// lista[1]=new produto('Mesa',5,(600*100))
// lista[2]=new produto('Notebook',5,(9200*100))
// lista[3]=new produto('Mouse',5,(2330*100))
// lista[4]=new produto('Luminaria',5,(180*100))
// lista[5]=new produto('Caderno',5,(18*100))
// lista[6]=new produto('canetas',28,(3*100))
lista[0]=new produto('Caneta',1,(11*100))


const precoTotal = (produto)=>produto.preco*produto.qt
const orcamento= lista.map(precoTotal).reduce(function total(acumulador,atual){
    console.log(acumulador);
    return atual+acumulador
})

const bancoDeClientes = []
for(let i = 1; i <= 3;i++){
    bancoDeClientes.push(`cliente${i}@Stone.com`)
}

function divisaoDePrecos(lista,bancoDeClientes,orcamento){
    const dicionario = new Map()
    let tamanho = bancoDeClientes.length
    let valorDividido = Math.floor(orcamento/(tamanho))
    
    // console.log(`Valor Dividido = R$${valorDividido}`);
    let provaDeValor = valorDividido*tamanho
    
        if(provaDeValor == orcamento){
            console.log(` Igual R$${provaDeValor} = R$${orcamento}`);
        }else{
             console.log(` Diferente R$${provaDeValor} = R$${orcamento}`);
             let sobra = orcamento-provaDeValor
             console.log(`Sobra= ${sobra} `);
             for(let j = 0; j < tamanho;j++ ){
                 if(sobra > 0){
                dicionario.set(bancoDeClientes[j],valorDividido+1)
                sobra--
                 }else{
                    dicionario.set(bancoDeClientes[j],valorDividido)
                 }
             }

             console.log(dicionario);
            
            
        }
}

divisaoDePrecos(lista,bancoDeClientes,orcamento)



// console.log(bancoDeClientes);


// console.log(orcamento);


// console.log(lista);

