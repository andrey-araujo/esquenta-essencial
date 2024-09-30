const pessoa = {
    nome: 'Ana',
    idade: 28,
    cidade: 'Rio de Janeiro',
};

// a função Object.freeze() evita que o objeto seja alterado
// const pessoa = Object.freeze({
//     nome: 'Ana',
//     idade: 28,
//     cidade: 'Rio de Janeiro',
// });

pessoa.nome = 'Maria';
pessoa.estado = 'RJ';

// erro, pois não é possível adicionar um novo objeto a um objeto existente através do operador de atribuição
// pessoa = {
//     nome: 'Carlos',
//     idade: 30,
//     cidade: 'São Paulo',
// };

delete pessoa.idade;

console.log(`Nome: ${pessoa.nome}`);
console.log(pessoa);
