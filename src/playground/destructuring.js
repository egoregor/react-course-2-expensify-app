// const person = {
//     name: 'Egor',
//     age: 28,
//     location: {
//         city: 'Omsk',
//         temp: 92
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);


// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self-Publushed'} = book.publisher;

// console.log(publisherName);

const item = ['coffee', '2', '3', '4'];

const [name, , mediumCost] = item;

console.log(`A medium ${name} costs ${mediumCost}`);