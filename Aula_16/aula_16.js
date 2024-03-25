// Array
// vantagem de ter uma ARRAY é buscar informação ou dados especificos
//Posso colocar qualquer valor dentro da minha ARRAY, como boolean, string, int
//posso fazer alteração dos meus valores especificos
//posso adicionar mais um valor dentro da nossa ARRAY

const aluno = ['Eduardo', 'Pedro', 'Liander', 'Camille'];
console.log(aluno[0])

aluno[0] = 'Marcelo';
console.log(aluno)

//Pra saber o tamanho da minha ARRAY
console.log(aluno.length);

//Forma de adicionar itens para minha ARRAY
aluno [aluno.length] = 'Nayra'
aluno [aluno.length] = 'Gustavo'
aluno [aluno.length] = 'Andre'
aluno [aluno.length] = 'Roberta'
console.log(aluno)

// adicionar o valor no final da minha ARRAY
aluno.push('Bruno');
console.log(aluno);

// adicionar antes o meu valor na minha ARRAY
aluno.unshift('Ana');
console.log(aluno);

//Caso queira tirar um valor no final da minha ARRAY
aluno.pop();
console.log(aluno);

//Caso queira tirar um valor no começo da minha ARRAY
aluno.shift();
console.log(aluno);

//posso deletar o meu valor e transformando essa indice do valor apagado vazia, ou seja ela continua existindo mas sem valor 
delete aluno[5]
console.log(aluno)

//Fatiar os meus valores dentro da minha ARRAY
console.log(aluno.slice(0,3));


