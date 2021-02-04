const carinho = [
    '{"nome":"Borracha","preco":3.45,"tag":"Escola"}',
    '{"nome":"Caderno","preco":13.90,"tag":"Escola"}',
    '{"nome":"Kit de Lapis","preco":41.22,"tag":"Escola"}',
    '{"nome":"Caneta","preco":7.50,"tag":"Escola"}'
]
// Retornar um array apenas com os precos
//1 transformar em objeto
const paraObjetos = json => JSON.parse(json)
const apenasPrecos = produto => produto.preco
const resultado = carinho.map(paraObjetos).map(apenasPrecos)
console.log(resultado);


// apenas nome
const objetosArray = json => JSON.parse(json)
const nomes = abc => abc.nome
const res = carinho.map(objetosArray).map(nomes)
console.log(res);

// apenas tags
const paraObjetoTags = json => JSON.parse(json)
const tags = tg => tg.tag
const resTg = carinho.map(paraObjetos).map(tags)
console.log(resTg);