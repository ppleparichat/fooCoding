
'use strict';

// 1.1

function doubleOddNumbers(numbers) {
  let oddNumbers = numbers.filter(num => num % 2);
  let doubleOddNumbers = oddNumbers.map(odd => odd * 2);
  return doubleOddNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));


// 1.2

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 1.0
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

let mondayByHours = monday.map(task=> {return task.duration / 60});
let tuesdayByHours = tuesday.map(task=> {return task.duration / 60})

let mondayHours = mondayByHours.filter(hour => hour >= 2)
console.log(mondayHours)
let tuesdayHours = tuesdayByHours.filter(hour => hour >= 2)
console.log(tuesdayHours)

let totalHours = mondayHours.concat(tuesdayHours)
console.log(totalHours)

totalHours.forEach((duration, index) => {
  totalHours[index] = duration * 20;
});
console.log(totalHours);

const earnings = totalHours.reduce((acc, curr) => acc + curr, 0);
console.log(`€:${earnings}`);