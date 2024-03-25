let n1 = Number(prompt('Digite o primeiro valor: '));
let n2 = Number(prompt('Digite o segundo valor: '));

const MyNumber1 = document.getElementById('Primary_value');
const MyNumber2 = document.getElementById('second_value');
const plus = document.getElementById('soma');
const minus = document.getElementById('menos');
const multiplicar = document.getElementById('multi')
const division = document.getElementById('divisao')

MyNumber1.innerHTML = n1;
MyNumber2.innerHTML = n2;

//ADIÇÃO
result_soma = n1 + n2
plus.innerHTML= `${n1} + ${n2} = ${result_soma}`;

//SUBTRAÇÃO
result_menos = n1 - n2
minus.innerHTML= `${n1} - ${n2} = ${result_menos}`;

//MULTIPLICAÇÃO
result_multi = n1 * n2
multiplicar.innerHTML= `${n1} x ${n2} = ${result_multi}`;

//DIVISÃO
result_divisao = n1 / n2
division.innerHTML= `${n1} / ${n2} = ${result_divisao}`;
