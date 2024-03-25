// Objeto

const pessoa_1 = {
    nome : 'eduardo',
    sobrenome: 'Victor',
    idade: 19
};

const pessoa_2 = {
    nome : 'Pedro',
    sobrenome: 'Dimas',
    idade: 20
};
console.log(pessoa_1)


// Usar o objeto com função
function cadastro(nome, sobrenome, idade){
    return { // esse return ajuda na criação de um cadastro ou usuario
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa_3 = cadastro('Liander', 'Silva', 19);
const pessoa_4 = cadastro('Camille', 'Andrade', 20);
console.log(pessoa_3.nome);
console.log(pessoa_4.nome);