// Arrow function 
const students = [
    {name : "mohammed", age : 22 , numbers:790129096 , mojer:"CIS" },
    {name : "ahmad", age:23 , numbers: 7901348343 , mojer: "cs"}
];

// const allStudent = () => ({
//     students.forEach(student in students) {
//         return student
//     }
// })
// console.log(allStudent())
const addArrow = (a, b) => a + b;

addArrow(1,3)

const double = n => n*2 ;  
const sayHi = () => "Hi"

const fuelReport = (level) => {
    return level > 50 ? "ok" : "low";
}

console.log(fuelReport(40))
console.log(addArrow(4,5))
console.log(double(4))

const makePlanet = (name, moons) => ({name : name, moons: moons})
console.log(makePlanet("mars" ,2))



const crew = ["Mohammad" , "faqeeh" , "sara"]

crew.forEach( 
    (m) => console.log(`Checking in : ${m}`)
)

const rover = {
    model: "Explorer" ,
    regular: function() {
        return this.model
    },
    arrow : () => {
        return this.model
    }
}

console.log(rover.regular(), rover.arrow())


// ================= destructring =========

const planets = ["Mercury" , "Venus" , "Earth" , "Mars"]

const first = planets[0]
const  second = planets[1]

const [p1, p2] = planets
console.log(p1,p2)


const [, , p] = planets

console.log(p)

const [x, y, z,w , extra = "jepiter"] = planets
console.log(extra)



const planet = {
    name:"mars",
    moons:3,
    type:"Rockt",
    rings:true
}

const {name, moons} = planet

console.log(name , moons)

const {type:planetType} = planet
console.log(planetType)


const {rings = false} = planet
console.log(rings)


// Nest destructuring


const mission = {
    title: "Interstillar",
    commandor: {fullName: "Mohammed ALfaqeeh", city: "irbid"}
}

const {
    commandor : {city}
} = mission

console.log(city)

// destructuring function parameters 
const pName = planet.name
function describe(pName ,{name, moons, type}) {
    return `${name} is ${type} and has ${moons}`
}

console.log(describe(pName,planet))
// console.log(describe(typeof planet))



// destructuring function parameters  with defulte parameters 

function launch({ rocket = "Falcon" ,crew = 3 , site = "Wadi RUm"} = {}) {
    return `${rocket} launching ${crew} from ${site}`
}

console.log(launch({rocket: "Orion" , crew : 5 }))

function totalFuel (...tanks) {
    let sum = 0
    for (const i of tanks ) {
        sum +=i
    }
    return sum
}

console.log(totalFuel(1,2,3,4))

