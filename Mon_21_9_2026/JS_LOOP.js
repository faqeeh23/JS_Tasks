
let currentNumber = 1;
while (currentNumber <= 10) {
    console.log(currentNumber);
    currentNumber++;
}


const numbersArray = [1, 2, 3, 4, 5];
let resultString = "";
for (let i = 0; i < numbersArray.length; i++) {
    resultString += numbersArray[i];
}
console.log(resultString); 




for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}




let totalSum = 0;
for (let i = 1; i <= 10; i++) {
    totalSum += i;
}
console.log(totalSum); 




const values = [1, 2, 3, 4, 5];
let maxVal = values[0];
for (let i = 1; i < values.length; i++) {
    if (values[i] > maxVal) {
        maxVal = values[i];
    }
}
console.log(maxVal); 



const scores = [1, 2, 3, 4, 5];
let sumOfScores = 0;
for (let i = 0; i < scores.length; i++) {
    sumOfScores += scores[i];
}
let average = sumOfScores / scores.length;
console.log(average); // Output: 3



const num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log(factorial); // Output: 120

console.log("\n--- Exercise 8: Fibonacci Sequence ---");
const fibLimit = 10;
let fibSequence = [0, 1];
for (let i = 2; i < fibLimit; i++) {
    let nextNum = fibSequence[i - 1] + fibSequence[i - 2];
    fibSequence.push(nextNum);
}
console.log(fibSequence.join(" "));

const primeLimit = 20;
let primes = [];
for (let n = 2; n <= primeLimit; n++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        primes.push(n);
    }
}
console.log(primes.join(" "));



const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let flatOutput = "";
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        flatOutput += matrix[i][j] + " ";
    }
}
console.log(flatOutput.trim()); 

const originalArray = [1, 2, 3, 4, 5];
let reversedOutput = "";
for (let i = originalArray.length - 1; i >= 0; i--) {
    reversedOutput += originalArray[i] + " ";
}
console.log(reversedOutput.trim());

const stepArray = [1, 2, 3, 4, 5];
const step = 2;
let stepOutput = "";
for (let i = 0; i < stepArray.length; i += step) {
    stepOutput += stepArray[i];
}
console.log(stepOutput);

const freqArray = [1, 2, 1, 3, 2, 1];
const targetNum = 1;
let count = 0;
for (let i = 0; i < freqArray.length; i++) {
    if (freqArray[i] === targetNum) {
        count++;
    }
}
console.log(count); 

const heros = [
    { name: 'Iron Man', power: 'Tech' },
    { name: 'Spider-Man', power: 'Spider abilities' },
    { name: 'Thor', power: 'Godly powers' },
    { name: 'Hulk', power: 'Super strength' }
];

const newHeros = heros.map((heroObj, index) => {
    return {
        hero: heroObj.name,
        power: heroObj.power,
        id: index
    };
});
console.log(newHeros);

const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
const longWords = inputWords.filter(word => word.length > 7);
console.log(longWords); 

console.log("\n--- Exercise 16: Reduce Method (Square & Sum) ---");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumSquaredDivisibleBy5 = numbers.reduce((accumulator, currentNum) => {
    if (currentNum % 5 === 0) {
        return accumulator + (currentNum * currentNum);
    }
    return accumulator;
}, 0);
console.log(sumSquaredDivisibleBy5);