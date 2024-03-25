let test = "FAZ algum test";

//Pra ver a posição da letra da minha variavel "test"
console.log(test[3])
console.log(test.charAt(1))


//manipulação de saida de string
console.log(test.concat(': um test a cada dia'));
console.log(test + ': um test a cada dia');
console.log(`${test}: um test a cada dia`)

//Pra saber o indice do valor da variavel
console.log(test.indexOf("g"));
console.log(test.lastIndexOf("g"))

// serve para trocar um valor dentro da minha variavel
console.log(test.replace('faz', 'por'));

// pra saber o tamanho da minha variavel string
console.log(test.length);

// serve pra pegar a minha variavel em sting, as numeração que estão dentro do test.slice é para saber em qual posição inicial e final pra fazer a busca da string em que eu estou procurando
console.log(test.slice(0, 3));

//faz criar meio que uma array na minha variavel string
console.log(test.split(' ', 2));

//Faz a minha variavel string fica tudo maiusculo ou minuscula
console.log(test.toUpperCase());
console.log(test.toLowerCase());