let n1 = 10;
let n2 = 50;



//Faz os meus valores number virar valores string(fica temporariamente string mas ainda continua number)
console.log(n1.toString() + n2);


//caso queira alterar o valor da minha variavel permanentemente
n1= n1.toString();
console.log(typeof n1);

//quero transformar numero em binario
console.log(n1.toString(2));

// caso queira arredondar o algum valor
console.log(n1.toFixed(2));

// caso queira descobrir se algum valor que está dentro da minha variavel é inteiro
console.log(Number.isInteger(n1));

//caso queria saber se o valor da minha variavel é NaN
console.log(Number.isNaN(n1));

//n1 = n1 + n2
n1 +=n2;

// tranformo o meu number para float
console.log(n1.parserFloat(n1))
