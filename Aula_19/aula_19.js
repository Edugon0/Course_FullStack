//valores Primitivos (imutaveis) - string, boolean, number, undefined, null - valores copiado
let nome = 'eduardo'
nome = 'victor'
console.log(nome)

//valores por referencia(nutavel) - arrays, function, object - passados por referencia

let a = [1, 2, 3];
let b = a;
console.log(a, b);

a.push(4);
console.log(a, b)


// Outra forma de copiar uma array

let test = [1, 5, 6, 7];
let test_1 = [...test];

console.log(test_1);

// tá pra fazer na mesma forma no object

const amigo = {
    nome: 'eduardo',
    sobrenome:'victor'
};

const amigo_1 = {...amigo};

amigo.nome = 'Pedro'
console.log(amigo)
console.log(amigo_1)