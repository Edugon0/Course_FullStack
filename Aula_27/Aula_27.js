// Objeto Date
// O objeto date é uma função construtora


// Usando o Date() com string
const dataString = new Date('2024-04-14 20:20:59');
console.log(dataString.toString());
console.log('Dia:', dataString.getDate()); // como ver apenas o dia
console.log('Mês:', dataString.getMonth() + 1); // como ver apenas o mes
console.log('Ano:', dataString.getFullYear()); // como ver apenas o ano
console.log('hora:', dataString.getHours()); // como ver apenas a horas
console.log('minuto:', dataString.getMinutes()); // como ver apenas o  minuto
console.log('segundo:', dataString.getSeconds()); // como ver apenas o segundo
console.log('milisegundo:', dataString.getMilliseconds()); // como ver apenas o milisegundo
console.log('Dia da semana:', dataString.getDay()); // como ver apenas do dia da semana (toma cuidado que ele começa a partir do zero, ou seja, 0 = domingo e 6 = sabado)

console.log('------------------------------------------------------------------------------------')


function AddZeroData (num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
const dia = AddZeroData(data.getDate());
const mes = AddZeroData(data.getMonth());
const ano = AddZeroData(data.getFullYear());
const hora = AddZeroData(data.getHours());
const min = AddZeroData(data.getMinutes());
const segundo = AddZeroData(data.getSeconds());

return `Data de hoje: ${dia}/${mes}/${ano} Horas: ${hora}:${min}:${segundo}`
}

const data = new Date();
const DataAtual = formataData(data)
console.log(DataAtual)