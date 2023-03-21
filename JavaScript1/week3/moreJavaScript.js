// 1. 
function sumNumber(num1, num2, num3) {
    let sum =  num1+num2+num3
    return sum
}
sumNumber(2,3,4) // 9

// 2. 
function colorCar(color) {
    let colorCar = `a ${color} car`
    return colorCar
}
colorCar('red')

// 3. 
const car = {
    type:"Toyota", 
    model:"500", 
    color:"Black"
};

function carPrint(param) {
    return param
}
carPrint(car)

// 4. 
function vehicleType(color, code) {
    if (code === 1){
        return `a ${color} motorbike`
    }else if(code === 2) {
        return `a ${color} car`
    }
}
vehicleType("blue",2) // 'a blue motorbike'

// 5. 
3 === 3 ? console.log("yes") : console.log("no") 

// 6. 
function vehicle(color, code, age) {
    if (code === 1 && age > 1){
        return `a ${color} used car`
    }
}
vehicle("blue", 1, 5) // 'a blue used car'

// 7. 
let vehicles = ["motorbike", "caravan", "bike", "car"];

// 8. 
console.log(vehicles[2]) // bike

// 9. 
function vehicleTwo(color, code, age) {
  let car = vehicles[code -1];
  let vehicleAge = age > 0 ? "used" : "new";
  console.log(`a ${color} ${vehicleAge} ${car}`);
};
vehicleTwo("green", 3, 1);

// 10. 
let advertisement = `Amazing Joe's Garage, we service`

// 11. 

// 12. 
let person = {}

// 13. 
let myTeachers = {
    anna : 'reading',
    john : 'writing',
    mimi : 'history'
}

// 14. 
myTeachers['Tommy'] = 'HTML'
myTeachers['Sahin'] = 'JavaScript'

console.log(myTeachers)

// 15. 
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
// I think x == y, x === y and z == y and z == x, They are equal

if (x == y && x === y && z == y && z == x) {
    console.log("TRUE")
} else {
    console.log("FALSE") // FALSE
}
// They are not equal

// 16. 
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

// 17. 
let bar = 42;
typeof typeof bar;