async function chuckNorrisFacts() {
    const resp = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await resp.json();
    return data.value;
}

async function obterFatosEmSequencia() {
    const fato1 = await chuckNorrisFacts();
    const fato2 = await chuckNorrisFacts();
    const fato3 = await chuckNorrisFacts();
    return ['Sequência', fato1, fato2, fato3];
}

function obterFatosEmParalelo() {
    const label = Promise.resolve('paralelo');
    const fato1 = chuckNorrisFacts();
    const fato2 = chuckNorrisFacts();
    const fato3 = chuckNorrisFacts();
    return Promise.all([label, fato1, fato2, fato3]);
}

obterFatosEmSequencia().then(console.log);
obterFatosEmParalelo().then(console.log);
