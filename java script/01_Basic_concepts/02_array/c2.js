const st1 = ["uttam","mukesh","gurdeep"]
const st2 = ["krish","sonnu"]

// st1.push(st2)
// console.log(st1); //[ 'uttam', 'mukesh', 'gurdeep', [ 'krish', 'sonnu' ] ]

// concat method
// const st3 = st1.concat(st2) 
// console.log(st3); //[ 'uttam', 'mukesh', 'gurdeep', 'krish', 'sonnu' ]

const st4 = [...st1, ...st2]

// console.log(st4); //[ 'uttam', 'mukesh', 'gurdeep', 'krish', 'sonnu' ]

const nArray = [1, 2, 5, 7, [5, 9, 4], 5, [8, 9, 1, [7, 9]]]
const nArray1 = nArray.flat(Infinity)

// console.log(nArray1); //[1, 2, 5, 7, 5, 9,4, 5, 8, 9, 1, 7, 9]
 
//string into array

// console.log(Array.isArray("Uttam")); //false
// console.log(Array.from("Uttam")); // [ 'U', 't', 't', 'a', 'm' ]

// console.log(Array.from({name: "Uttam"})); // [] interesting

let s1 = 100
let s2 = 200
let s3 = 300

// console.log(Array.of(s1, s2, s3)); //[ 100, 200, 300 ]


