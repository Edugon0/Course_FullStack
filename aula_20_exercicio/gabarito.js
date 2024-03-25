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
    pessoa.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        idade: idade.value,
        altura: altura.value
    });
    console.log(pessoa)
    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${idade.value} ${altura.value}</p>`
   }  
   form.addEventListener('submit', recebeEvento);
}
usuario()