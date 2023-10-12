// dumm array of objects to be used for testing
const people = [
    {
        name: 'John Doe',
        age: 28,
        position: 'developer',
    },
    {
        name: 'Jane Doe',
        age: 32,
        position: 'designer',
    },
    {
        name: 'James Doe',
        age: 41,
        position: 'the boss',
    },
    {
        name: 'Jenny Doe',
        age: 36,
        position: 'marketing',
    },
    {
        name: 'Jack Doe',
        age: 22,
        position: 'intern',
    }
];


// map() method
// returns a new array
// does not change the size of the original array (unlike filter)
// uses values from original array when making new one
// does not mutate original array
// map() is chainable
// callback function:
//      - must return something
//      - usually returns a value
//      - returns undefined if you don't return anything
//      - can take in 3 arguments: item, index, array
//      - item: the current item in the array
//      - index: the current index of the item in the array
//      - array: the original array itself
//      - you can pass in less than 3 arguments, but not more
//      - you can pass in a function that takes in 0 or more arguments


// example 1
// return a new array of names
const names = people.map(function(person) {
    return person.name;
});
console.log(names);

// example 2
// return a new array of ages
const ages = people.map(function(person) {
    return person.age;
});

// example 3
// return a new array of names and ages
const namesAges = people.map(function(person) {
    return `${person.name} (${person.age})`;
});
console.log(namesAges);

// example 4
// return a new array of names and ages using arrow function
const namesAgesArrow = people.map(person => `${person.name} (${person.age})`);
console.log(namesAgesArrow);

// example 5
// return a new array of names and ages using arrow function and chaining
const namesAgesArrowChain = people
    .map(person => `${person.name} (${person.age})`)
    .join(', ');
console.log(namesAgesArrowChain);

