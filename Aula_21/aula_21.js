// Operadores de comparação
//Eles sempre vão devolver valores booleano( true ou false)

// > (Maior que)
    console.log(10 > 5);
    console.log(5>10)
// >= (Maior que ou igual a)
    console.log(10 >=5)
    console.log(10 >= 10)
// < (Menor que)
    console.log(5<10)
    console.log(10<5)

// <= (menor que ou igual a)
    console.log(5<=10)
    console.log(10<=10)

// == (igualdade, verifica o valor)
//Ele pode tá problema futuramente pq não verifica o tipo da variavel
    const n1 = 5;//number
    const n2 = "5"; //string
    const igual = n1 == n2;

    console.log(igual)
//=== (igualdade estrita, verifica o valor e o tipo)
//Ele consegue perceber quando uma é string e outro é number
    const n3 = 5;
    const n4 = "5";
    const igual_estrita = n1 === n2;

console.log(igual_estrita)

//!= (diferente, verifica o valor)
    console.log("5" != 5);
    console.log(6 != 5)

//!== (diferente estrita, verifica o valor e o tipo)
//Ele consegue perceber quando uma é string e outro é number
console.log("5" !== 5);
console.log(5 !== 5)