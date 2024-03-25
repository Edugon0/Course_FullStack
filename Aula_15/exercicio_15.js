let numero = Number(prompt("Digite algum valor:"));


const MyValue = document.getElementById('MeuValor');
const MyRaiz = document.getElementById('raiz');
const n_digitado = document.getElementById('Numero_digitado');
const n_inteiro = document.getElementById('inteiro');
const n_nan = document.getElementById('not_number');
const n_baixo = document.getElementById('baixo');
const n_cima = document.getElementById('cima');
const n_decimo = document.getElementById('numero_decimal');

MyValue.innerHTML = numero;
MyRaiz.innerHTML = Math.sqrt(numero);
n_digitado.innerHTML = numero;
n_inteiro.innerHTML = Number.isInteger(numero);
n_nan.innerHTML = Number.isNaN(numero);
n_baixo.innerHTML = Math.floor(numero);
n_cima.innerHTML = Math.ceil(numero);
n_decimo.innerHTML = numero.ToFixed(2);

/* 

document.body.innerHTML += `O valor que digitou foi: <strong>${meuValor}</strong><br />`;
document.body.innerHTML += `Raiz quadrada do seu valor:<strong> ${Math.sqrt(meuValor)}</strong><br />`;
document.body.innerHTML += `${meuValor} é inteiro: <strong>${Number.isInteger(meuValor)}</strong><br />`;
document.body.innerHTML += `é NaN: <strong>${Number.isNaN(meuValor)}</strong><br />`;
document.body.innerHTML += `Arredondando para baixo: <strong>${Math.floor(meuValor)}</strong><br />`;
document.body.innerHTML += `Arredondando para cima: <strong>${Math.ceil(meuValor)}</strong><br />`;
document.body.innerHTML += `Com duas casas decimais: <strong>${meuValor.toFixed(2)}</strong><br />`;


*/



