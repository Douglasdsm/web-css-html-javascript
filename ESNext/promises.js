
function falarDepois(segundos,frase){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(frase)
        },segundos * 1000)
    })
}

falarDepois(3,'Que legal!')
.then(frase => frase.concat('?!?'))
.then(outraFrase => console.log(outraFrase));


function falarDepois2(segundos,frase){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(frase)
        },segundos * 1000)
    })
}

falarDepois2(3,'Que legal!')
.then(frase => frase.concat('?!?'))
.then(outraFrase => console.log(outraFrase))
.catch(e=>console.log(e))
