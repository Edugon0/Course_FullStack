const form = document.querySelector('.formulario');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputNome = event.target.querySelector('.nome');
    const inputPeso = event.target.querySelector('.peso');
    const inputAltura = event.target.querySelector('.altura');

    const nome = inputNome.value;
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!nome || !peso || !altura) {
        setResult('Por favor, preencha todas as informações.', false);
        return;
    }

    const imc = getimc(peso, altura);
    const nivelImc = getNivelIMC(imc);

    const msg = `Olá ${nome}, seu IMC é ${imc} (${nivelImc}).`;
    setResult(msg, true);
});

function getNivelIMC(imc) {
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

function criaParagrafo() {
    const p = document.createElement('p');
    return p;
}

function setResult(msg, isValid) {
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
