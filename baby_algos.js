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
function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let splitted = str.split('');
    let all = [];
    for (let i = 0; i < splitted.length; i++) {
        if (vowels.includes(splitted[i])) {
            all.push(splitted[i])
        }
    }

    return all.length;
}

// console.log(getCount('sziaLajos'))

//2. Disemvowel Trolls
function disemvowel(str) {
    let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    let splitted = str.split('');
    let all = [];
    let withoutTrolls = [];

    for (let i = 0; i < splitted.length; i++) {
        if (vowels.includes(splitted[i])) {
            all.push(splitted[i])
        } else {
            withoutTrolls.push(splitted[i])
        }
    }

    return withoutTrolls.join('');
}

// console.log(disemvowel("sziaLajos"))

//3. Highest and Lowest
function highAndLow(numbers) {
    let splitted = numbers.split(' ');
    let negative = [];
    let positive = [];
    for (let i = 0; i < splitted.length; i++) {
        if (splitted[i][0] === '-') {
            negative.push(splitted[i])
        } else {
            positive.push(splitted[i])
        }
        
    }
    negative.sort((a,b) => (a-b));
    positive.sort((a,b)=> (a-b));

    if (negative.length === 0) {
        return `${positive[positive.length-1]} ${positive[0]}`
    } else if (positive.length === 0) {
        return `${negative[negative.length-1]} ${negative[0]}`
    } else {
        return `${positive[positive.length-1]} ${negative[0]}`
    }
}

// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))