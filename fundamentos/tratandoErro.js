function tratarErroLancar(erro){
    throw new error('Ola Sou Douglas Engenheiro Responsavel por esta plataforma, peso desculpas pelo incoviniente dentro de instantes esse problema sera resolvido')
}
function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase()+'!!!');

    }catch(e){
        tratarErroLancar(e)
    }
}


const obj = {nome:'Roberto'}
imprimirNomeGritado(obj)