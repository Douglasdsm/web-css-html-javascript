const a = 1
const b = 2
const c = 3
const obj1 = {a:a,b:b,c:c}
const obj2 = {a,b,c}
console.log(obj1,obj2);

const nomeAtt = 'nota'
const valorAtt = 7.89
const obj3 = {}

obj3[nomeAtt]=valorAtt
console.log(obj3)
const obj4 = {[nomeAtt]: valorAtt}
console.log(obj4);

const obj5 = {
    funcao: function(){
        //...
    },funcao2(){
        //...
    }
}
console.log(obj5);