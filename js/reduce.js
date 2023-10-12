// reduce method

// returns a single value (unlike filter and map)
// can be used to iterate through the array
// works on arrays of numbers
// uses a callback function
// reduces to a single value - number, array, object
// 1st parameter ('acc') - total of all calculations
// 2nd parameter ('curr') - current iteration/value
// 3rd parameter ('index') - index of current iteration/value
// 4th parameter ('arr') - the original array itself
// acc + curr - returns number
// acc - returns number
// acc + curr.age - returns number
// acc + curr.age / arr.length - returns number
// [...acc, curr] - returns array
// [...acc, curr.age] - returns array
// { ...acc, ...curr } - returns object
// callback function:
//      - must return something
//      - usually returns a value
//      - returns undefined if you don't return anything
//      - can take in 4 arguments: accumulator, current, index, array
//      - accumulator: the total of all calculations
//      - current: the current iteration/value
//      - index: the index of current iteration/value
//      - array: the original array itself
//      - you can pass in less than 4 arguments, but not more
//      - you can pass in a function that takes in 0 or more arguments

const people = [
    {
        name: 'John Doe',
        age: 20,
        position: 'developer',
    },
    {
        name: 'Jane Doe',
        age: 30,
        position: 'designer',
    },
    {
        name: 'James Doe',
        age: 40,
        position: 'the boss',
    },
    {
        name: 'Jenny Doe',
        age: 50,
        position: 'marketing',
    },
    {
        name: 'Jack Doe',
        age: 60,
        position: 'intern',
    }
];

// example 1
// return the total age of all people
const totalAge = people.reduce(function(acc, currItem) {
    console.log(`Total ${acc}`); // 0, 20, 40, 80, 130
    console.log(`Current ${currItem.age}`); // 20, 20, 40, 50, 60
    acc += currItem.age; // 0 + 20, 20 + 20, 40 + 40, 80 + 50, 130 + 60
    return acc; // 20, 40, 80, 130, 190
}, 0);

// console.log(`Total age: ${totalAge}`);
// console.log(`Average age: ${totalAge / people.length}`);
// console.log(totalAge)
// document.getElementById('totalAge').innerHTML = totalAge;

// example 2
// return the total age of all people
const newPeople = people.reduce(function(acc, currItem) {
    acc.push(currItem.age);
    return acc;
}, [0, 1, 2]);

console.log(newPeople);


newPeople.forEach(function(person) {
    console.log(person);
}
);

// example 3

 const countAge = people.reduce(function(acc, currItem) {
    console.log(`Total ${acc}`); // 0, 20, 40, 80, 130
    // console.log(`Current ${currItem.age}`); // 20, 20, 40, 50, 60
    acc += currItem.age; // 0 + 20, 20 + 20, 40 + 40, 80 + 50, 130 + 60
    return acc; // 20, 40, 80, 130, 190
}, 0);

console.log(countAge);