/*Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês.
*/
function ganhos(horas,valorDaHora){
    return `Salario igual a R$ ${horas*valorDaHora}`
}

const Douglas = ganhos(120,350)
const Deivid = ganhos(196,20)
console.log(Douglas);
console.log(Deivid);