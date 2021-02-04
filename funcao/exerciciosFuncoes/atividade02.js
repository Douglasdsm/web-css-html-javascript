/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

function Teste(a,b,c){
    if(a==b && a == c){
        console.log('Triangulo Equilatero');
    }else if(a==b || b==c || a==c){
        console.log('Triangulo Isosceles');
    }else{
        console.log('Triangulo Escaleno');
    }
}

Teste(4,4,4)
Teste(4,2,2)
Teste(2,2,4)
Teste(2,4,2)
Teste(4,3,2)