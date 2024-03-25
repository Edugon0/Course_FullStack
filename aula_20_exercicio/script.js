//Criei uma função que fica monitorando os evento do meu usuario(Nesse caso eu coloquei pra manter a minha informação do usuario sem que resert o site e perde as informação)
//Essa é maneira mais antiga de usar esse monitoramento
/*
function test() {
    const form = document.querySelector('.form');
    form.onsubmit = function(evento){
        evento.preventDefault()
        alert('Coloque as suas informações')
        console.log('Foi enviado com Sucesso')
    };
}

test()

*/


function usuario() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoa = [];

   function recebeEvento(evento){
    evento.preventDefault();
    const nome = form.querySelector('.first_name');
    const sobrenome = form.querySelector('.last_name');
    const idade = form.querySelector('.age');
    const altura = form.querySelector('.altura');

    function chamada(){
        return{
            name: nome.value,
            sobreN: sobrenome.value,
            age: idade.value,
            altura: altura.value
        };
    }
    console.log(chamada())
    resultado.innerHTML += `Seu nome é ${nome.value}<br />`
    resultado.innerHTML += `Seu sobrenome é ${sobrenome.value}<br />`
    resultado.innerHTML += `Sua idade é ${idade.value}<br />`
    resultado.innerHTML += `Sua altura é ${altura.value}<br />`
   }  
   form.addEventListener('submit', recebeEvento);
}
usuario()




