// Baby steps - 8kyu 
//1. Multiply
function multiply(a, b) {
    return a * b
}

// console.log(multiply(2,3))

// 2. Even and Odds
function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

// console.log(evenOrOdd(6))

//3. Opposite number

function opposite(numero) {
    let stringing = numero.toString();
    let poppedBaby = stringing.substring(1);
    if (stringing[0] === '-') {
        return poppedBaby
    } else {
        return `-${numero}`
    }
}

// console.log(opposite(-21.2342))

// Toddler steps - 7kyu
// 1. Vowel Count