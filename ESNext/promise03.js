function gerarNumerosEntre(min,max){
    if(min > max) [max,min] = [min,max]

    return new Promise(resolve =>{
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random()*fator) + min
        resolve(aleatorio)
    })
}

/*gerarNumerosEntre(1,60)
    .then(num => num * 10)
    .then(numX10 => `O numero gerado foi ${numX10}`)
    .then(console.log)*/
    gerarNumerosEntre(1,60)
    .then(console.log)
    .then(num =>`Numero 1: ${num}`)
    gerarNumerosEntre(1,60)
    .then(console.log)
    .then(num =>`Numero 2: ${num}`)
    gerarNumerosEntre(1,60)
    .then(console.log)
    .then(num =>`Numero 3: ${num}`)
    gerarNumerosEntre(1,60)
    .then(console.log)
    .then(num =>`Numero 4: ${num}`)
    gerarNumerosEntre(1,60)
    .then(console.log)
    .then(num =>`Numero 5: ${num}`)
    gerarNumerosEntre(1,60)
    .then(console.log)
    .then(num =>`Numero 6: ${num}`)

/*51
54
14
17
26
25*/