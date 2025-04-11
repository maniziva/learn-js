let person = {
    firstName : 'Manikandan',
    lastName : 'Adaikalam'
    };

// Accessing object properties using dot notation
console.log(person.firstName);
console.log(person.lastName);

// Accessing object properties using bracket notation
console.log(person['firstName']);
console.log(person['lastName']);

// Accessing object properties using dynamic keys
console.log(person['first' + 'Name']);
console.log(person['last' + 'Name']);

// Adding a new property to the object
person.age = 30;
console.log(person.age);
console.log(person);

// Updating an existing property
person.age = 31;
console.log(person.age);

// Deleting a property from the object
delete person.age;
console.log(person.age);
console.log(person);

// Checking if a property exists in the object
console.log('firstName' in person); // true
console.log('age' in person); // false

// Using Object.keys() to get an array of property names
const keys = Object.keys(person);
console.log(keys); // ['firstName', 'lastName']

// Using Object.values() to get an array of property values
const values = Object.values(person);
console.log(values); // ['Manikandan', 'Adaikalam']

// Using Object.entries() to get an array of key-value pairs
const entries = Object.entries(person);
console.log(entries); // [['firstName', 'Manikandan'], ['lastName', 'Adaikalam']]

// Using Object.assign() to copy properties from one object to another
const person2 = {
    age: 25,
    city: 'Chennai'
};

const mergedPerson = Object.assign({}, person, person2);
console.log(mergedPerson); // { firstName: 'Manikandan', lastName: 'Adaikalam', age: 25, city: 'Chennai' }

// Using Object.freeze() to make an object immutable
const frozenPerson = Object.freeze(person);
console.log(frozenPerson); // { firstName: 'Manikandan', lastName: 'Adaikalam' }

// Attempting to modify a frozen object
frozenPerson.firstName = 'John';
console.log(frozenPerson.firstName); // 'Manikandan' (remains unchanged)

// Using Object.seal() to prevent adding or removing properties
const sealedPerson = Object.seal(person);
console.log(sealedPerson); // { firstName: 'Manikandan', lastName: 'Adaikalam' }
// Attempting to add a new property
sealedPerson.age = 30;
console.log(sealedPerson.age); // undefined (property not added)

// Attempting to delete a property
delete sealedPerson.firstName;
console.log(sealedPerson.firstName); // 'Manikandan' (property not deleted)
