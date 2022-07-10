//recupero elementi dal dom

const countdownElement = document.getElementById("countdown");
const numbersElement = document.getElementById("numbers-list");

//variabili numeri da randomizzare

const min = 1;
const max = 99;
const totalNumbers = 5;
let time = 5;


//funzione per generare i numeri random 
const getRandomUniqueNumbers = (min, max, totalNumbers) => {
    const numbers = [];
    
    while (numbers.length < totalNumbers) {
        const randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min;
        if (!numbers.includes(randomNumber)) numbers.push(randomNumber);
    }
    
    return numbers;
}

//funzione per chiedere numero tra min e max 
const getUserNumberInRange = (min, max) => {
    let userNumber;
    while (isNaN(userNumber) || userNumber < min || userNumber > max) {
        userNumber = parseInt(prompt(`inserisci un numero tra ${min} e ${max}`))
    }
    return userNumber;
}
const numbers = getRandomUniqueNumbers(min, max, totalNumbers)
console.table(numbers)




//stampo in pagina

let items = '';

for (let i = 0; i < totalNumbers; i++) {
    items += `<li>${numbers[i]}</li>`;
}

numbersElement.innerHTML = items;

//conto alla rovescia in pagina 

const countdown = setInterval(() => {
    if (time === 0) clearInterval(countdown);
    else countdownElement.innerText = --time;

}, 1000);

setTimeout(() => {
    numbersElement.className = "hidden"
}, 5000)

//chiedo numeri all utente

setTimeout(() => {
    const userNumbers = [];

    while (userNumbers.length < totalNumbers) {
        const userNumber = getUserNumberInRange(min, max);
        if (!userNumbers.includes(userNumber)) userNumbers.push(userNumber);

    }

    let userPoints = 0;
    let correctAnswer = []
    for (let i = 0 ; i < totalNumbers; i++ ) {
        if(numbers.includes(userNumbers[i])) correctAnswer.push(userNumbers[i])
    }

    alert(`hai totalizzato ${correctAnswer.length}`)

}, 5200)


//funzione prompt utente da usare a riga 57

