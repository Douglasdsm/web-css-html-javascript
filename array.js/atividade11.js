function filtrarNumeros(array){
    const resultado = []
    for(let item of array){
        if(typeof item ==="number")
        resultado.push(item)

    }
    return resultado
}
function filtrarNumeros(array) {
    return array.filter(item => typeof item === "number")
    }
function filtro(elemento){
    return elemento.filter(e => typeof e ==="number")
}
console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20])); // retornará [1, 20]
console.log(filtrarNumeros(["a", "c"])) // retornará []
console.log(filtro(["Javascript", 1, "3", "Web", 20])); // retornará [1, 20]