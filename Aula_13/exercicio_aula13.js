const nome = prompt('Digite o seu nome completo:');



document.body.innerHTML += `O seu nome é: <strong>${nome}</strong><br />`;
//pra quantos caracteres tem o valor da minha string no caso o meu nome
document.body.innerHTML += `Seu nome tem <strong>${nome.length}</strong> letras<br />`;
// pra saber a indice do meu nome
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong><br />`;
//ele vai pegar indice antes do R
document.body.innerHTML += `Qual o primeiro índice da letra R no seu nome: <strong>${nome.indexOf('r')}</strong><br />`;
//ele vai pegar indice depois do R
document.body.innerHTML += `Qual o ultimo índice da letra R no seu nome: <strong>${nome.lastIndexOf('r')}</strong><br />`;
// quando deixo -3 indica pra fazer a busca até o final
document.body.innerHTML += `As última 3 letras do seu nome são: <strong>${nome.slice(-3)}</strong><br />`;
//nesse caso so coloca ' ', ja faz a separação de todas as palavras do meu nome
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong><br />`;
// deixa o meu nome todo maiusculo
document.body.innerHTML += `Seu nome como letras maiúsculas: <strong>${nome.toLocaleUpperCase()}</strong><br />`;
// deixa o meu nome todo minusculo
document.body.innerHTML += `Seu nome como letras minúsculas: <strong>${nome.toLocaleLowerCase()}</strong><br />`;




