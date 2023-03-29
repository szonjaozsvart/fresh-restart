// 6kyu
//1. Multiples of 3 or 5
function solution(number) {
    let sum = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i
        }
    }
    return sum
}

// console.log(solution(10))

//2. Create Phone Number
function createPhoneNumber(numbers) {
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}

// console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))

//3. Sum of Digits

function digitalRoot(n) {
    let givenNumber = n;
    let splitted = givenNumber.toString();
    let sum = 0;
    for (let j = 0; j < splitted.length; j++) {
        sum += Number(splitted[j])
    }
    if (splitted.length > 1) {
        return digitalRoot(sum) // If the splitted has more than one digit, recursively call the digitalRoot 
                                // function with sum as the argument and return its result. This will 
                                // continue the process of summing the digits until a single-digit number is produced.
    }
    return sum
}

console.log(digitalRoot(16)) //7
console.log(digitalRoot(456)) //6