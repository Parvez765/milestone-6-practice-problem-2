/* 1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ]. Now convert this array into an even array (array with even numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map() method. Hints: add one to any odd number and it will become an even
number. */

const arr = [1, 3, 5, 7, 9];

// Using For Loop
let newarr = []
for (let i = 0; i < arr.length; i++){
    let newArrElement = arr[i] + 1;
    newarr.push(newArrElement);
}
console.log(newarr);

// Using map
const elementOfArr = arr.map(x => x + 1);
console.log(elementOfArr);

/* 2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now return/get all the elements which are divisible by 10 using array.filter() method. */

const divisibleArr = [33, 50, 79, 78, 90, 101, 30];
const divided = divisibleArr.filter(x => x % 10 === 0); 
console.log(divided);

const divisible = [33, 50, 79, 78, 90, 101, 30];
const dividedbyFind = divisibleArr.find(x => x % 10 === 0); 
console.log(dividedbyFind);

/* You have an array [ 1, 9, 17, 22 ]. Add the all elements of this array and give output. Do this using for loop & array.reduce() method.*/

const sumArr = [1, 9, 17, 22];

// Using For Loop
let sum = 0;
for (let i = 0; i < sumArr.length; i++){
    sum += sumArr[i];
}
console.log(sum);

// Using Reduce
const totalSumArr = sumArr.reduce((previous, current) => previous + current, 0);
console.log(totalSumArr);


/* Challenging Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?

20 + 15 + 22 = 57 . The output will be 57 */


const people = [
    {name: "Meena", age: 20},
    {name: "Rina", age: 15},
    {name: "Suchorita", age: 22},
]

// Do it with for loop.

let peopleSum = 0;
for (let i = 0; i < people.length; i++){
    let sumTotal = people[0].age + people[1].age + people[2].age ;
    peopleSum = sumTotal;
}
console.log(peopleSum);

// array.reduce()

let peopleTotalSum = people.reduce((previous, current) => previous + current.age, 0);
console.log(peopleTotalSum);

// Access Object Value

const student = {
    name: "Fredie",
    age: 26
};
console.log(student.age);

let data = {
    location: [
        {
            latitude: '34.5 , 37.8',
            longitude: '98.77 , 58.7',
            city: 'Hyderabad',
            country: 'India'
        }
    ]
};

console.log(data.location[0].city);

const  personAll = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496"
    }
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
  }
}

// Console the value of email
console.log(personAll.email);

// Console the value of address
console.log(personAll.address);

// Console the value of city
console.log(personAll.address.city);

// Console the value of lat
console.log(personAll.address.geo.lat);

// Console the value of company name

console.log(personAll.company.name);