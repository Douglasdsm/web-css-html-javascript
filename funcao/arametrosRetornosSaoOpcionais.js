function area(largura,altura){
    const tarea = largura*altura
    if(tarea > 20){
        console.log(`Valor de area acima do permitido: ${tarea} m2`);

    }else{
        return tarea
    }
}
console.log(area(2,78,5,6));