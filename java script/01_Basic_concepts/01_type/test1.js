let score = "33"
// console.log(typeof score);
let valueInNumber = Number(score)
// console.table([typeof valueInNumber ,valueInNumber]);
 
let isLoggedIn = undefined

let isLoggedIn1 = Boolean(isLoggedIn)
// console.log(isLoggedIn1);
function caches(){
     console.log(123);
     
}
// console.log(typeof caches);

// boolean value

// 1 => true; 0 =>false
// null => false "" => false " " => true
// undefined => flase "name" => true

let someNumber = 1.444
let anotherNumber = String(someNumber)

// console.log(anotherNumber);
// console.log(typeof anotherNumber);

// ******************operations*******************
 let value = 3
 let negValue = -value
//  console.log(negValue); -3
  
// console.log(+true); 1

// console.log(null == 0);  false
// console.log(null > 0); false
// console.log(null >= 0); true
// console.log(null < 0); false
// console.log(null <= 0); true

// console.log( "2" === 2); false
// console.log( "2" == 2); true


// ******************Summary***********************

// primitive 

// 7 types : String, Number, boolean, null, undefined, symbol, bigint

const num1 = 123
const num2 = 123.89
const sti = "uttam"
let outsideTemp = null
let userEmail

const id = Symbol("123")
const anotherId =Symbol("123")

// console.log(id === anotherId); false

const bigNumber = 1111111616831n

//  console.log(typeof bigNumber); bigint
 

// reference (non primitive)
//  array, object, functions
const heros = ["shaktiman", "naagraj","arjun"]
let myObj ={
    name: "uttam",
    age: "21",
    college: "ngp",
}
function nyFunc(a,b) {
    return a+b
}
// console.log(nyFunc(1,7));


// *****************************************************

//  Stack ( Primitive), Heap(Non-Primitive)

let c1 = "college"
let c2 = c1

// console.log(c2); //college 

c2 = "School"

// console.table([c1,c2]); //college school 
// call by value (primitive)

const myArr1 = ["mango","apple","banana","grapes"]
const myArr2 = myArr1

// console.log(myArr1); //[ 'mango', 'apple', 'banana', 'grapes' ]
// console.log(myArr2); //[ 'mango', 'apple', 'banana', 'grapes' ]

myArr2[2] ="coconut"

// console.log(myArr1); //[ 'mango', 'apple', 'coconut', 'grapes' ]
// console.log(myArr2); //[ 'mango', 'apple', 'coconut', 'grapes' ]

// call by reference (non-primitive)

// *******************String concanate*********************

const name = "uttam"
const repoCount = 50

// console.log(name +  repoCount +" value"); //uttam50 value

// console.log(`Hello my name is ${name} and my repo count is ${repoCount} .`);

// another method of declaring string
const gameName = new String('Battleground')

// console.log(gameName[2]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());



