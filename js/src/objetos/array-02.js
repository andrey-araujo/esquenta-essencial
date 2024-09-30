const frutas = ['maçã', 'banana', 'laranja', 'tomate'];
const vegetais = ['cenoura', 'tomate', 'batata'];

const comida = frutas.concat(vegetais);
console.table(comida);

const index = comida.indexOf('tomate');
if (index !== -1) {
    console.log('Encontrei o tomate na posição', index);
    //a funcão splice está passando o index  em que vai começar e quantos elementos vai excluir
    comida.splice(index, 1);
}

console.log(comida);
//a função sort altera o array e ordena por ordem alfabetica
comida.sort();
console.log(comida);

console.log(typeof 123);
console.log(typeof 'texto');
console.log(typeof {});
console.log(typeof comida);
