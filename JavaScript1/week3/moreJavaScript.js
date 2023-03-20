// 1. Create a function that takes 3 arguments and returns the sum of the these arguments.
function sumNumber(num1, num2, num3) {
    let sum =  num1+num2+num3
    return sum
}
sumNumber(2,3,4) // 9

// 2. Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
function colorCar(color) {
    let colorCar = `a ${color} car`
    return colorCar
}
colorCar('red')

// 3. Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
const car = {
    type:"Toyota", 
    model:"500", 
    color:"Black"
};

function carPrint(param) {
    return param
}
carPrint(car)

// 4. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)
function vehicleType(color, code) {
    if (code === 1){
        return `a ${color} motorbike`
    }else if(code === 2) {
        return `a ${color} car`
    }
}
vehicleType("blue",2) // 'a blue motorbike'

// 5. Can you write the following without the if statement, but with just as a single line with console.log(...);?
// if (3 === 3) {
//     console.log("yes");
//   } else {
//     console.log("no");
//   }
3 === 3 ? console.log("yes") : console.log("no") 

// 6. Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'
function vehicle(color, code, age) {
    if (code === 1 && age > 1){
        return `a ${color} used car`
    }
}
vehicle("blue", 1, 5) // 'a blue used car'

// 7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
let vehicles = ["motorbike", "caravan", "bike", "car"];

// 8. How do you get the third element from that list?
console.log(vehicles[2]) // bike

// 9. Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".


// 10. Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

// 11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?

// 12. Create an empty object.
let person = {}

// 13. Create an object that contains the teachers that you have had so far for the different modules.
let myTeachers = {
    anna : 'reading',
    john : 'writing',
    mimi : 'history'
}

// 14. Add a property to the object you just created that contains the languages that they have taught you.

// 15. Add a property to the object you just created that contains the languages that they have taught you.

// 16. Take a look at the following code:

// 17. What does the following code return? (And why?)