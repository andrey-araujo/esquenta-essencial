const pessoas = [
    { nomeCompleto: 'Lucas Silva' },
    { nomeCompleto: 'Ana Paula' },
    { nomeCompleto: 'Pedro Santos' },
    { nomeCompleto: 'Maria Oliveira' },
];

const primeirosNomes = pessoas.map((pessoa) => pessoa.nomeCompleto.split(' ')[0]);

console.log(primeirosNomes);

function triple(arrayElement) {
    return arrayElement * 3;
}

function hundredTimes(arrayElement) {
    return arrayElement * 100;
}

const numeros = [1, 2, 3, 4, 5];
const triplos = numeros.map(triple);
const triplosPLus100 = numeros.map(triple).map(hundredTimes);
console.table(triplos);
console.table(triplosPLus100);
