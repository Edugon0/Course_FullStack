const form = document.querySelector('.formulario'); // captura o nosso formulario

form.addEventListener('submit', function(event) {            //foi criado uma função que faz um evento, nesse evento impedi que o nosso formulario esse enviado no mesmo instante
    event.preventDefault();                                 //quando clicado no button de enviar, ou seja, ele armazena as informações dentro do navegador do usuario
    const inputNome = event.target.querySelector('.nome');     
    const inputPeso = event.target.querySelector('.peso');      
    const inputAltura = event.target.querySelector('.altura'); 

    const nome = inputNome.value;                   //
    const peso = Number(inputPeso.value);           // esses sao os input que estão dentro do meu formulario, onde vai puxar os meus valores que coloca pelo meu usuario
    const altura = Number(inputAltura.value);       //

    if (!nome || !peso || !altura) { // Aqui foi criado uma condição para os campus que não foram preeenchido ou valores incorretos
        setResult('Por favor, preencha todas as informações.', false); 
        return;
    }

    const imc = getimc(peso, altura); // foi criado uma função especifica para fazer o calculo de IMC
    const nivelImc = getNivelIMC(imc);

    const msg = `Olá ${nome}, seu IMC é ${imc} (${nivelImc}).`;
    setResult(msg, true);
});

function getNivelIMC(imc) { // aqui foi criado uma função especifica para os niveis de IMC e tambem foi criado uma condição para saber o nivel, alem de ter colocar uma array com os niveis de IMC
    const nivel = ['muito abaixo do peso', 'abaixo do peso', 'peso normal', 'acima do peso', 'obesidade grau I', 'obesidade grau II ou obesidade grau III'];

    if (imc < 18.5) {
        return nivel[0];
    } else if (imc <= 25) {
        return nivel[1];
    } else if (imc <= 30) {
        return nivel[2];
    } else if (imc <= 35) {
        return nivel[3];
    } else if (imc <= 40) {
        return nivel[4];
    } else {
        return nivel[5];
    }
}

function getimc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
}

function criaParagrafo() { // função para adicionar um paragrafo com saida do valor para o meu usuario
    const p = document.createElement('p');
    return p;
}

function setResult(msg, isValid) { // função para saida do meu resultado, onde modificação do CSS dependo da saida do resultado
    const result = document.querySelector('.resultado');
    result.innerHTML = '';
    const p = criaParagrafo();
    if (isValid) {
        p.classList.add('paragrafo-resultado-correct');
    } else {
        p.classList.add('paragrafo-resultado-incorrect');
    }
    p.innerHTML = msg;
    result.appendChild(p);
}
