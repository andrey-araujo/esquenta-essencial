function execAll(...functions) {
    for (let fun of functions) {
        fun();
    }
}

const goodMorning = () => console.log('Good morning!');
const goodAfternoon = () => console.log('Good afternoon!');

function goodNight() {
    console.log('Good night!');
}

execAll(goodMorning, goodAfternoon, goodNight);
