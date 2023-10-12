// filter method
// returns a new array
// can manipulate the size of the new array (unlike map)
// returns based on condition
// does not mutate original array
// filter() is chainable
// callback function:
//      - returns either true or false
//      - if true, item is added to the array
//      - if false, item is not added to the array
//      - does not change the original array
//      - can take in 3 arguments: item, index, array
//      - item: the current item in the array
//      - index: the current index of the item in the array
//      - array: the original array itself
//      - you can pass in less than 3 arguments, but not more
//      - you can pass in a function that takes in 0 or more arguments


const people = [
    {
        name: 'John Doe',
        age: 20,
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

// example 1
// return a new array of people over 30
const over30 = people.filter(function(person) {
    return person.age > 30;
});
console.log(`People over 30:`);
console.table(over30);
// example 2
// return a new array of people under 30
const under30 = people.filter(function(person) {
    return person.age < 30;
});
console.log(`People under 30:`);
console.table(under30);


// example 3
// return a new array of people who are designers
const designers = people.filter(function(person) {
    return person.position === 'designer';
});
console.log(`Designers:`);
console.table(designers);

// example 4
// return a new array of people who are not designers
const nonDesigners = people.filter(function(person) {
    return person.position !== 'designer';
});
console.log(`Non-designers:`);
console.table(nonDesigners);

// example 5
// return a new array of people who are developers
const developers = people.filter(function(person) {
    return person.position === 'developer';
});
console.log(`Developers:`);
console.table(developers);