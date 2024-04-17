const main = (params) => {
    const gerarFibonacci = (n) => {
        if (n <= 0) {
            return []; 
        }

        const sequenciaFibonacci = [0, 1]; 
        while (sequenciaFibonacci.length < n) {
            const proximoTermo = sequenciaFibonacci[sequenciaFibonacci.length - 1] +
                sequenciaFibonacci[sequenciaFibonacci.length - 2];

            sequenciaFibonacci.push(proximoTermo);
        }
        return sequenciaFibonacci;
    };

    const inputTermos = 8;
    const resultadoFibonacci = gerarFibonacci(inputTermos);
    console.log(`A sequência de Fibonacci com ${inputTermos} termos: ${resultadoFibonacci}`);
};

main();
