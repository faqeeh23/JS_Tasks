// 1

const { act } = require("react");

function Cashflow(cash, cur_liab) {
    let total = cash / cur_liab
    return total
}

let totalCash = Cashflow(1000, 500)
console.log(total);

// 2

function NetIncome(rev , expen) {
    let incom = rev - expen
    return incom
}

let TotalIncom = NetIncome(1000,750)

console.log(TotalIncom);

// 3

function TotalAssets(lib, equ) {
    let totalAsse = lib + equ
    return totalAsse
}
let TotalAssen = TotalAssets(10000, 7234)

console.log(TotalAssen)

// 4

function NetIncomeWithProfit(sales, profit) {
    let totalincom = sales * profit
    return totalincom
}

let incomWithProfit = NetIncomeWithProfit(1000, 6)


console.log(incomWithProfit);


// 5

function Average(num1 , num2, num3) {
    let sumOfnum = num1 + num2 + num3 
    let average = sumOfnum / 3
    return average
}

let avg = Average(2 ,9 ,7)
console.log(avg);

// 6 

function Discount(actPrice, disc) {
    let discAmout = actPrice * (disc / 100)
    let finalPrice = actPrice - discAmout
    return finalPrice
}

let result = Discount(150 , 30)
console.log(result)

// 7 

function AgeLimit(age) {
    if (age > 18 && age < 30) {
        return true
    }else {
        return false
    }
}

console.log(AgeLimit(22))

//  8 

function Exponential(num, exp) {
    return num**exp
}

console.log(Exponential(2,3));


//  9 

function Remainder(num1, num2) {
    return num1%num2
}

console.log(Remainder(10, 2));


/* ======== String  =================*/



let str = "Welcome to Orange" 

console.log(str.toUpperCase);

console.log(str.toLowerCase);

console.log(str.toUpperCase);


let extract = str.slice(8, 10)

console.log(extract)

console.log(str.replace("Welcome to", "Hello from"))

console.log(str.length())

let newStr = "Welcom to "

console.log("welcom to \"Orange\"");

console.log(str + " Jordan");



function replaceFirstLetter(str) {
    if (str.length === 0) return str

    let firstchar = str[0]
    let restOfStr = str.slice(1)
    let modified = restOfStr.replaceAll(firstchar, '*')

    return firstchar + modified
}

console.log(replaceFirstLetter(str))


let arr = ["Coding", "Academy", "By", "Orange"];

console.log([...arr, "Jordan"]);


console.log(arr.slice(0, 2));
console.log(["Welcom", "To" , ...arr]);
console.log(arr.slice(1));
console.log(arr.join(" "));
console.log([...arr]);
console.log([arr[0], arr[arr.length -1]]);


var fruit = ["banana", "apple", "orange", "watermelon"]; 
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()

fruit.shift()

let orangeInex = fruit.indexOf("orange")


fruit.push(orangeInex)

vegetables.push(vegetables.length)

var  food = fruit.concat(vegetables)

food.splice(4, 2)

food.reverse()

console.log(food.toString());


function Age(birthDay) {
    let currentYear = new Date().getFullYear();
    let age =currentYear - birthDay

    if (age > 60) console.log("You may join the seniors’ program.");
    else if (age > 30) console.log("You are not eligible. You may join other programs.");
    else if (age >= 18 && age <= 30) console.log("You are eligible. Start your application.");
    console.log("You may join the kids' program.");
    
    }

Age(2004)



