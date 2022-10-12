// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = { 
//     name: 'max',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

// CUSTOM TYPE, which why Role is capitalized
// this assigns each item in this object a number starting with 0;
// if you wanted to start with a dif number you can do 'ADMIN = 5', then the enum starts with 5
enum Role { ADMIN, READ_ONLY, AUTHOR};

const person = { 
    name: 'max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
};


let favoriteActivities: string[];

console.log(person.name);

for (const hobby of person.hobbies) {
    // toUpperCase() only works on strings
    console.log(hobby.toUpperCase());
    // below throws an error because 'hobby' is not an array. it is just a string we created by using a for loop on the 'person.hobbies' array to crreate a string out of each individual output.
    // .map() only works on arrays.
    // console.log(hobby.map()); // ERROR!!!
}

if (person.role === Role.AUTHOR) {
    console.log('is admin');
}