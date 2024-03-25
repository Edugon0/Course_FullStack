//Funções
//serva para mandar um valor ou receber um valor
//Tem a mesma regra de criar uma variavel
//Todo o seu codigo é feito dentro da função, ela so vai funcionar dentro dela e isso não prejudicarar o restante do codigo que está fora da funçao
//não pode ser modificado o meu codigo dentro da minha função

function saudacao(nome) {
return `Hello ${nome}, Welcome for JavaScript`;
}

const variavel = saudacao('Eduardo');
console.log(variavel);


function soma (n1, n2){
    const result = n1 + n2;
    return result; // serve como finalização do meu codigo dentro da minha funçao, ou seja tudo que for escrito logo abaixo do return não sairar o valor
}
console.log(soma(2, 2));

// funçao anonima( necessario o ; no final da minha fuction)
const raiz = function(n){
    return Math.sqrt(n)
};

console.log(raiz(9))

//funçao arrow (simplificar o meu codigo)
const test = (n3) => n3 + 50

console.log(test(5))