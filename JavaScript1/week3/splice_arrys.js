let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

favoriteAnimals.push('turtle')
console.log(favoriteAnimals) //[ 'blowfish', 'capricorn', 'giraffe', 'turtle' ]

favoriteAnimals.splice(1, 0,'meerkat'); // At position 1, remove 0 items, add N item
console.log(`I expect : 'blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle'`)
console.log(favoriteAnimals) //[ 'blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle' ]

console.log(`The array has a length of: ${favoriteAnimals.length}`)
favoriteAnimals.splice(3,1) // At position 3, remove 1 items
console.log(favoriteAnimals)

let removeMeerkat = favoriteAnimals.indexOf('meerkat');
console.log(`The item you are looking for is at index: ${removeMeerkat}`)

if (removeMeerkat != false) {
    favoriteAnimals.splice(removeMeerkat, 1);
}
console.log(favoriteAnimals) // [ 'blowfish', 'capricorn', 'turtle' ]