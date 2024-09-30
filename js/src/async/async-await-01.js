function awaitFor(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, seconds * 1000);
    });
}

async function execute() {
    console.log('Início');

    await awaitFor(2);
    console.log('Depois de 2 segundos');

    await awaitFor(3);
    console.log('Depois de 3 segundos');

    await awaitFor(5);
    console.log('Depois de 5 segundos');

    console.log('Fim');
}

execute();
