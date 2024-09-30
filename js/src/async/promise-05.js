function chuckNorrisFacts() {
    return fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => response.json())
        .then((data) => data.value);
}

// async function chuckNorrisFacts() {
//     const response = await fetch('https://api.chucknorris.io/jokes/random');
//     const data = await response.json();
//     return data.value;
// }

const fato1 = chuckNorrisFacts();
const fato2 = chuckNorrisFacts();
const fato3 = chuckNorrisFacts();

Promise.all([fact1, fact2, fact3]).then(console.log);
