/*Para resolução do trabalho utilizei a linguagem javaScript, criei um objeto com os atributos itens,e posteriormente foi criado um array para ser a lista de compras para lista de emails também foi utilizado um array para inserir dados no array para teste utilizei forma de direta no código fonte da seguinte forma:
 lista[0]=new produto('Cadeira',5,(1200*100))
A inserção de cliente se deu da mesma forma 
lista[0]=new produto(`Cadeira${i}`,5,(1200*100))
foi criado a função “divisaodePrecos” para fazer as operações do desafio 
*/





// cria objeto de cadastro de produtos
function produto(iten,qt,preco) {
    return{
        iten,
        qt,
        preco
    }
    
}
//cria a lista de compras um array
const lista = []
//cria a lista de clientes um array
const bancoDeClientes = []


/* Formas de Teste utiizadas por min +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

//Teste Normal ==========================================================================================
// lista[0]=new produto('Cadeira',5,(1200*100))
// lista[1]=new produto('Mesa',5,(600*100))
// lista[2]=new produto('Notebook',5,(9200*100))
// lista[3]=new produto('Mouse',5,(2330*100))
// lista[4]=new produto('Luminaria',5,(180*100))
// lista[5]=new produto('Caderno',5,(18*100))
// lista[6]=new produto('canetas',28,(3*100))
// for(let i = 1; i <= 6;i++){
//     bancoDeClientes.push(`cliente${i}@Stone.com`)
// }

// Teste de Estresse=========================================================================================
for(let i = 1; i <= 3330000;i++){
    lista[i]=new produto(`Cadeira${i}`,5,(1200*100))
}

for(let i = 1; i <= 330000;i++){
    bancoDeClientes.push(`cliente${i}@Stone.com`)
}
// Teste Produtos Diferentes

//função para se usada no map para pegar o preço do produto e multiplicar pela sua quantidade e fornecer essa dado ao reduce 
const precoTotal = (produto)=>produto.preco*produto.qt

// funcao pedida pelo desafio

    if(lista.length > 0 ){ // verifica se a lista de produtas esta vazia
       if(bancoDeClientes.length > 0){ // verifica se a lista de clientes esta vazia
        const orcamento= lista.map(precoTotal).reduce(function total(acumulador,atual){// calcula valor total
    
            return atual+acumulador
        })
        const dicionario = new Map() // cria o dicionario chave valor
        let tamanho = bancoDeClientes.length // pega tamanho do banco de clientes
        let valorDividido = Math.floor(orcamento/(tamanho))// valor  que cada cliente tem que pagar
        let provaDeValor = valorDividido*tamanho // valor total ao multiplicarmos o valor individual de cada cliente pelo seu respectivos pagamentos
        
            if(provaDeValor == orcamento){ // Teste se o pagamento esta de acordo com o valor da divida caso esteja correto  valor sera atribuido a cada cliente caso contrario primeiro e feito a atribuição a cada cliente e posteriormente a redistribuição do valor que sobra 
                for(let j = 0; j < tamanho;j++ ){
                     
                    dicionario.set(bancoDeClientes[j],valorDividido)// adcionando chave e valor a cada cliente ao Map
                 
             }
            }else{
                 
                 let sobra = orcamento-provaDeValor // descobrir quanto de dinheiro  esta faltando para pagar a divida
                 
                 for(let j = 0; j < tamanho;j++ ){
                     
                        dicionario.set(bancoDeClientes[j],valorDividido)// adcionando chave e valor a cada cliente ao Map
                     
                 }
                 for(let j =0; j < sobra;j++){
                    dicionario.set(bancoDeClientes[j],valorDividido+1) // distribuição do dinheiro que falta para paagmento da divida
                 }
    
                 
               
                
            }
       }else{
                console.log('Lista de Clientes vazia'); 
       }
    }else{
            console.log('Lista de Compras vazia');
    }



