// Atribuição via desestruturação (arrays)

let a= 'A';
let b= 'B';
let c= 'C';

// dessa forma que faz a desestruturação com atribuição
const ArrayLetra = [b,c,a];
[a, b, c] = ArrayLetra;

console.log(a,b,c);
//                   0 1 2 3 4 5 6 7 8 -> indice
const ArrayNumero = [1,2,3,4,5,6,7,8,9];// -> valor das minhas indice
const [n1, n2, ...rest] = ArrayNumero; // esse "...rest" é pra pegar o restante valores da minha array
console.log(n1, n2);
console.log(rest);


//                           0        1        2 -> indice da minha indice
//                         0 1 2    0 1 2    0 1 2 -> minha indice dos meus valores
const ArrayListaNumero = [[1,2,3], [4,5,6], [7,8,9]] // -> valores
const [lista1, lista2,lista3] = ArrayListaNumero;
console.log(lista1[2], lista2[1], lista3[0])


