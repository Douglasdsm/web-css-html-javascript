/*) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/
function jurosSimples(capitalIncicial,taxa,tempo){
    let juros = capitalIncicial*taxa*tempo
    let montante = juros+capitalIncicial
    return montante
}
function jurosComposto(capitalIncicial,taxa,tempo){
    let juros = 0
    let capital = capitalIncicial
    for(let i = 0; i < tempo; i++){
        juros = capital*taxa
        capital = capital + juros
    }
    
    
    let montante = capital
    return montante
}

console.log('Montante Juros Simples = ',jurosSimples(1000,0.1,3));
console.log('Montante Juros Compostos = ',jurosComposto(10000,0.1,3));