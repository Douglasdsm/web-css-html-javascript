const x = 'Global'
function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}
const minhaFuncao =  fora(0)
    console.log(minhaFuncao())