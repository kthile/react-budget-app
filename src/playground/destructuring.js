//
// OBJECT DESTRUCTURING
/*
const person = {
  name: 'Bob',
  age: 23,
  location: {
    city: "Philadelphia",
    temp: 92
  }
};

//same as const name = person.name, etc.
const { name:firstName = "DefaultName", age } = person;

console.log(`${firstName} is ${age}`);

const { city, temp: temperature } = person.location;

if (city && temperature) {
  console.log(`It's ${temperature} in ${city}`);
}

const book = {
  title: "ego is the enemy",
  author: "ryan holiday",
  publisher: {
    name: "penguin"
  }
};

const { name: publisherName = "self-published" } = book.publisher;
console.log(publisherName);*/

//
/* ARRAY DESTRUCTURING */

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [street, city, state = 'new york', zip] = address; //matches data up by position
console.log(`You are in ${city}, ${state}`);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, smallPrice, mediumPrice, largePrice] = item;
console.log(`A medium ${coffee} costs ${mediumPrice}`)