let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Douglas','Deivid','Marcelo','Marta'])
})
const primeiro = elemento => elemento[0]
const Minuscula = m=>m.toLowerCase()

p
    .then(primeiro)
    .then(primeiro)
    .then(Minuscula)
    .then(console.log)