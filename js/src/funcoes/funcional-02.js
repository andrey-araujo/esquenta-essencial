function retornarUmaFuncao() {
    return function () {
        console.log('Olá, mundo!');
    };
}

const souUmaFuncao = retornarUmaFuncao();
souUmaFuncao();

// Invocando a função 'retornarUmaFuncao()' e o segundo '()' invoca a função que está no 'return'
retornarUmaFuncao()();
