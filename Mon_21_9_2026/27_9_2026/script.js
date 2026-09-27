let name = "Jone"; 
console.log(name); 
function test() { 
    let x = 10;
    let y = 20;  
    if (x >= y) { 
        console.log(x)
    } 
    console.log(y); 
} 
test(); 
// console.log(x); 


// Exercise 2 ======= 

function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.greet = function() {
    console.log(`Hello ${this.name}`)
}

var person1 = new Person("Mohammed", 22)
var person2 = new Person("Ahmad" , 23)

console.log(person2)
console.log(person1.name)

person1.greet()
person2.greet()

// console.log(Person.prototype)


function Employee(name, age, employeeId, position) {
    Person.call(this, name, age)
    this.employeeId = employeeId
    this.position = position
}



// emp1.greet() Error emp1 its not a function

Employee.prototype = Object.create(Person.prototype)

var emp1 = new Employee("Mohammed", 22, 101, "Developer")

console.log(emp1.name)

emp1.greet()

Employee.prototype.greet = function() {
    console.log(
        `
        Hello ${this.name}
        , I am a ${this.position}
        `
    )
}


var emp1 = new Employee("Mohammed", 22, 101, "Developer")
var emp2 = new Employee("Ahmad", 23, 102, "Designer")
var emp3 = new Employee("Sara", 25, 103, "Manager")

emp1.greet()
emp2.greet()
emp3.greet()

console.log(emp1 instanceof Employee) // true
console.log(emp1 instanceof Person)   // true

// Exercise 3 (Arrays and json) ============


var studentsGroup1 = [
    "Mohammed", "Ahmad", "Ali", "Omar", "Yousef",
    "Khaled", "Mahmoud", "Ibrahim", "Hamza", "Adam",
    "Tareq", "Zaid", "Sami", "Anas", "Fadi",
    "Rami", "Laith", "Hassan", "Bilal", "Naser",
    "Ammar", "Bashar", "Wael", "Majd", "Saleh"
]

var studentsGroup2 = [
    "Sara", "Lana", "Noor", "Hala", "Rana",
    "Maya", "Lina", "Aya", "Reem", "Diana",
    "Farah", "Dana", "Rania", "Salma", "Nour",
    "Jana", "Mariam", "Aseel", "Yara", "Haneen",
    "Sama", "Ruba", "Leen", "Shahd", "Rawan"
]


var allStudents = studentsGroup1.concat(studentsGroup2)

console.log("All Students:")
console.log(allStudents)


allStudents.sort()

console.log("Sorted Students:")
console.log(allStudents)


allStudents.reverse()

console.log("Reversed Students:")
console.log(allStudents)


var studentName = "Mohammed"

if (allStudents.includes(studentName)) {
    console.log(studentName + " exists in the students list")
} else {
    console.log(studentName + " does not exist in the students list")
}


console.log("Students List:")

allStudents.forEach(function(student, index) {
    console.log(index + " - " + student)
})

// Exercise 4 ===========



var students = [
    { id: 1, name: "Mohammed", grade: 85 },
    { id: 2, name: "Ahmad", grade: 78 },
    { id: 3, name: "Ali", grade: 92 },
    { id: 4, name: "Omar", grade: 67 },
    { id: 5, name: "Yousef", grade: 88 },
    { id: 6, name: "Khaled", grade: 73 },
    { id: 7, name: "Mahmoud", grade: 81 },
    { id: 8, name: "Ibrahim", grade: 95 },
    { id: 9, name: "Hamza", grade: 76 },
    { id: 10, name: "Adam", grade: 89 },
    { id: 11, name: "Tareq", grade: 64 },
    { id: 12, name: "Zaid", grade: 91 },
    { id: 13, name: "Sami", grade: 84 },
    { id: 14, name: "Anas", grade: 77 },
    { id: 15, name: "Fadi", grade: 69 },
    { id: 16, name: "Rami", grade: 87 },
    { id: 17, name: "Laith", grade: 82 },
    { id: 18, name: "Hassan", grade: 74 },
    { id: 19, name: "Bilal", grade: 90 },
    { id: 20, name: "Naser", grade: 68 },
    { id: 21, name: "Ammar", grade: 93 },
    { id: 22, name: "Bashar", grade: 79 },
    { id: 23, name: "Wael", grade: 86 },
    { id: 24, name: "Majd", grade: 72 },
    { id: 25, name: "Saleh", grade: 83 },
    { id: 26, name: "Sara", grade: 96 },
    { id: 27, name: "Lana", grade: 71 },
    { id: 28, name: "Noor", grade: 88 },
    { id: 29, name: "Hala", grade: 75 },
    { id: 30, name: "Rana", grade: 94 },
    { id: 31, name: "Maya", grade: 80 },
    { id: 32, name: "Lina", grade: 66 },
    { id: 33, name: "Aya", grade: 85 },
    { id: 34, name: "Reem", grade: 91 },
    { id: 35, name: "Diana", grade: 70 },
    { id: 36, name: "Farah", grade: 89 },
    { id: 37, name: "Dana", grade: 78 },
    { id: 38, name: "Rania", grade: 97 },
    { id: 39, name: "Salma", grade: 73 },
    { id: 40, name: "Nour", grade: 82 },
    { id: 41, name: "Jana", grade: 87 },
    { id: 42, name: "Mariam", grade: 65 },
    { id: 43, name: "Aseel", grade: 90 },
    { id: 44, name: "Yara", grade: 84 },
    { id: 45, name: "Haneen", grade: 76 },
    { id: 46, name: "Sama", grade: 92 },
    { id: 47, name: "Ruba", grade: 81 },
    { id: 48, name: "Leen", grade: 69 },
    { id: 49, name: "Shahd", grade: 86 },
    { id: 50, name: "Rawan", grade: 98 }
];



students.splice(
    2,
    0,
    { id: 51, name: "Abdullah", grade: 88 }
);



students.splice(5, 1);



students.splice(
    10,
    1,
    { id: 52, name: "Kareem", grade: 93 }
);



var copiedStudents = students.slice(0, 10);

console.log("Copied Students:");
console.log(copiedStudents);



students.sort(function(a, b) {
    return b.grade - a.grade;
});



console.log("Final Students List:");

students.forEach(function(student, index) {

    console.log(
        (index + 1) +
        " - ID: " + student.id +
        " | Name: " + student.name +
        " | Grade: " + student.grade
    );

});


// Exercise 5 ==============

var product = {
    id: 1,
    name: "Laptop",
    price: 750,
    category: "Electronics",
    available: true
};


var jsonProduct = JSON.stringify(product);

console.log("JSON String:");
console.log(jsonProduct);


var convertedProduct = JSON.parse(jsonProduct);

console.log("Original Object:");
console.log(product);

console.log("Converted Object:");
console.log(convertedProduct);



var invalidJSON = '{"id": 1, "name": "Laptop",}';

try {

    var result = JSON.parse(invalidJSON);

    console.log(result);

} catch (error) {

    console.log("Invalid JSON!");
    console.log(error.message);

}


// Exercise 6  ===========


var inventory1 = [
    { id: 1, name: "Laptop", price: 750, category: "Electronics", quantity: 5 },
    { id: 2, name: "Mouse", price: 20, category: "Accessories", quantity: 15 },
    { id: 3, name: "Keyboard", price: 45, category: "Accessories", quantity: 10 },
    { id: 4, name: "Monitor", price: 300, category: "Electronics", quantity: 7 },
    { id: 5, name: "Headphones", price: 80, category: "Audio", quantity: 12 }
];
var inventory2 = [
    { id: 6, name: "Phone", price: 600, category: "Electronics", quantity: 8 },
    { id: 7, name: "Speaker", price: 120, category: "Audio", quantity: 6 },
    { id: 8, name: "Webcam", price: 90, category: "Accessories", quantity: 9 },
    { id: 9, name: "Tablet", price: 400, category: "Electronics", quantity: 4 },
    { id: 10, name: "Smart Watch", price: 200, category: "Wearables", quantity: 11 }
];


var inventory = inventory1.concat(inventory2);

console.log("Merged Inventory:");
console.log(inventory);


inventory.sort(function(a, b) {
    return a.price - b.price;
});

console.log("Sorted by Price:");
console.log(inventory);


var categories = [
    "Electronics",
    "Accessories",
    "Audio",
    "Wearables"
];

var categoryToCheck = "Audio";

if (categories.includes(categoryToCheck)) {
    console.log(categoryToCheck + " category is available");
} else {
    console.log(categoryToCheck + " category is not available");
}



var disIndex = -1;

for (var i = 0; i < inventory.length; i++) {

    if (inventory[i].name === "Webcam") {
        disIndex = i;
        break;
    }
}

if (disIndex !== -1) {
    inventory.splice(disIndex, 1);
}

console.log("Inventory after removing discontinued product:");
console.log(inventory);


var firstFiProd = inventory.slice(0, 5);

console.log("First Five Products:");
console.log(firstFiProd);


console.log("Final Inventory:");

inventory.forEach(function(product, index) {

    console.log(
        (index + 1) +
        " - " + product.name +
        " | Price: $" + product.price +
        " | Category: " + product.category +
        " | Quantity: " + product.quantity
    );

});


// Exercise 7 ========================




const square = (number) => number * number;

console.log(square(5)); 


const isEven = (number) => number % 2 === 0;

console.log(isEven(4)); 
console.log(isEven(7)); 
const products = [
    { name: "Laptop", price: 750 },
    { name: "Mouse", price: 20 },
    { name: "Keyboard", price: 45 },
    { name: "Monitor", price: 300 }
];

const calculateTotal = (products) => {
    return products.reduce((total, product) => {
        return total + product.price;
    }, 0);
};
console.log(calculateTotal(products)); 


const numbers = [1, 2, 3, 4, 5, 6];
const squaredNumbers = numbers.map((number) => number * number);

console.log(squaredNumbers);

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

const total = numbers.reduce((sum, number) => sum + number, 0);

console.log(total);



//  Exercise 8
const user = {
    name: "Mohammed",
    email: "mohammed@example.com",
    age: 22,
    address: "Amman, Jordan"
};
const { name: username, email, age, address } = user;

console.log(name);
console.log(email);
console.log(age);
console.log(address);


const { name: userName } = user;

console.log(userName);


const skills = ["JavaScript", "React", "PHP", "Laravel"];

const [firstSkill, secondSkill, thirdSkill] = skills;

console.log(firstSkill);
console.log(secondSkill);
console.log(thirdSkill);

const createUser = (
    name = "Unknown",
    email = "No Email",
    age = 18
) => {
    return {
        name: name,
        email: email,
        age: age
    };
};

const user1 = createUser(
    "Ahmad",
    "ahmad@example.com",
    25
);

console.log(user1);

const user2 = createUser(
    "Ali",
    "ali@example.com"
);

console.log(user2);


// Exercise 9 ==========



const group1 = [101, 102, 103, 104, 105];
const group2 = [104, 105, 106, 107, 108];


const allStudents = [...group1, ...group2];

console.log("All Students:");
console.log(allStudents);


const uniqueStudents = new Set(allStudents);

console.log("Unique Students:");
console.log(uniqueStudents);
const uniqueStudentsArray = [...uniqueStudents];

console.log("Unique Students Array:");
console.log(uniqueStudentsArray);


const calculateAverage = (...grades) => {

    const total = grades.reduce(
        (sum, grade) => sum + grade,
        0
    );

    return total / grades.length;
};


console.log(
    "Average:",
    calculateAverage(80, 90, 70, 100)
);


const studentGrades = new Map();

studentGrades.set(101, 85);
studentGrades.set(102, 90);
studentGrades.set(103, 78);
studentGrades.set(104, 92);
studentGrades.set(105, 88);

console.log("Student Grades:");
console.log(studentGrades);

studentGrades.set(106, 95);

console.log("After Adding:");
console.log(studentGrades);
studentGrades.set(102, 97);

console.log("After Updating Student 102:");
console.log(studentGrades);
const studentGrade = studentGrades.get(103);

console.log("Student 103 Grade:");
console.log(studentGrade);
studentGrades.delete(104);

console.log("After Deleting Student 104:");
console.log(studentGrades);
const finalStudents = [...studentGrades];

console.log("Final Student Data:");
console.log(finalStudents);



// Exercise 10

const students = [
    { id: 1, name: "Mohammed", grade: 90 },
    { id: 2, name: "Ahmad", grade: 45 },
    { id: 3, name: "Sara", grade: 78 },
    { id: 4, name: "Omar", grade: 55 },
    { id: 5, name: "Lana", grade: 38 }
];

const reportsContainer = document.getElementById("reports");

students.forEach(student => {
    const status = student.grade >= 50 ? "Pass" : "Fail";

    const report = `
        <div>
            <h2>Student Report</h2>
            <p>Name: ${student.name}</p>
            <p>ID: ${student.id}</p>
            <p>Grade: ${student.grade}</p>
            <p>Status: ${status}</p>
        </div>
    `;

    reportsContainer.innerHTML += report;
});