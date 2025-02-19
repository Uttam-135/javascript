const myNum1 = 400
// console.log(myNum1); // 400

const myNum2 = new Number(100)
// console.log(myNum2); //[Number: 100]

// console.log(myNum2.toString().length); //3
// console.log(myNum2.toFixed(2)); // 100.00

const n1 = 112.63682888
// console.log(n1.toPrecision(3)); //113
// console.log(n1.toPrecision(2)); //1.1e+2
// console.log(n1.toPrecision(4)); //112.6
//precision from start not after decimal

const n = 5156651615
// console.log(n.toLocaleString('en-US')); // 5,156,651,615
// console.log(n.toLocaleString('en-IN')); // 5,15,66,51,615

// ****************** Maths *******************************

// console.log(Math); //Object [Math] {}

// console.log(Math.abs(-112)); // 112
// console.log(Math.round(5.6)); // 6
// console.log(Math.floor(5.6)); // 5
// console.log(Math.ceil(5.6)); // 6
// console.log(Math.sqrt(225)); // 15

// console.log(Math.min(6,9,6,7,2,3,8)); //2
// console.log(Math.max(6,9,6,7,2,3,8)); //9


// console.log(Math.random()); // always less than 1
// console.log(Math.random()*10); //0 to n
// console.log((Math.random()*10)+1); // 1 to n

const min = 1
const max = 6

// console.log((Math.random()*(max-min+1))+min); //between 1 and 6 but with decimal
// console.log(Math.floor((Math.random()*(max-min+1))+min)); //between 1 and 6 but withot decimal

//******************* Date *****************************

let myDate = new Date()
// console.log(myDate); // 2025-02-12T21:17:33.104Z

// console.log(myDate.toString()); // Thu Feb 13 2025 02:48:40 GMT+0530 (India Standard Time)

// console.log(myDate.toDateString()); // Thu Feb 13 2025
// console.log(myDate.toTimeString()); // 02:53:13 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString()); // 2025-02-12T21:23:13.828Z
// console.log(myDate.toLocaleTimeString()); // 2:53:13 am
// console.log(myDate.toJSON('date')); // 2025-02-12T21:23:13.828Z
// console.log(myDate.getFullYear()); // 2025
// console.log(myDate.getTimezoneOffset()); // -330
// console.log(myDate.getHours()); // 2

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023

// let myCreatedDate = new Date(2023,0,23,5,3)
// console.log(myCreatedDate.toLocaleString()); // 23/1/2023, 5:03:00 am

let myCreatedDate = new Date("2023-01-23")
// console.log(myCreatedDate.toLocaleString()); //23/1/2023, 5:30:00 am

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);

console.log(newDate.toLocaleString('default',{
    weekday: "short"
}));


