async function chuckNorrisFacts() {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    return data.value;
}

const fact1 = chuckNorrisFacts();
const fact2 = chuckNorrisFacts();
const fact3 = chuckNorrisFacts();

Promise.all([fact1, fact2, fact3]).then(console.log);
