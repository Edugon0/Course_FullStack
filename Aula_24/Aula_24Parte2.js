// if, else if, else  parte 2

// comportamento do codigo vai variando com uso do IF, ELSE ou ELSE IF
//se o não valor for verdadeiro a informa não será exibido, caso use duas saida um dentro do if e outro fora, exemplo abaixo
const numero = 15;

if(numero>= 0 && numero <=5){
    console.log("O valor está entre 0 a 5")
}

console.log("O valor não está entre 0 a 5"); // percebe-se que a saida apareceu nesse console.log, por causa que o valor dentro da if não é verdadeira, mas seu colocar como verdadeira sairá os dois valores


// Toma cuidado com logica de como vai usar o IF, ELSE IF ou Else, pois pode causar erro total no meu codigo, ocasionando falha em toda a logica 
function ExemploAula(){
    if (numero >= 0 && numero <= 5){
        return 'O numero está entre 0 a 5'
    }else if(numero >= 6 && numero <=8){
        return 'numero está entre 6 a 8'
    } else if(numero >= 9 && numero <= 11){
        return 'numero está entre 9 a 11'
    } else{
        return 'O numero não está entre 0 a 11'
    }
}

console.log(ExemploAula())