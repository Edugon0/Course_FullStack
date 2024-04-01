// Short-circuit
/*

valores que o && (AND) considera como falso, mas tem certos caso que ele tá curto circuito por causa que ele considera alguns valores vazias

->False

->null/ undefined

->NaN

-> qualquer coisa que está com aspa ou crase vazia ("", '', ``)

-> 0

*/

console.log('luiz' && 'maria'); // curto circuito (short-circuit)

console.log('luiz' && 0 && 'maria');

console.log('luiz' && null && 'maria');

console.log('luiz' && NaN && 'maria');

console.log('luiz' && ""&& 'maria');


function falaOi(){
    return 'oi';
}
const vaiExecutar = 'João';
console.log(vaiExecutar && falaOi())


//valor de || (OR) precisa apenas um dos valores serem verdadeira para ser true

console.log(0 || "eduardo Victor" || 0 || true)

const CorUsuario = 'vermelho';
const corPadrao = CorUsuario ||'preto';

console.log(corPadrao)