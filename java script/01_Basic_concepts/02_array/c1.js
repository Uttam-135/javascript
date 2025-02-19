// const myArr = [1,2,3,4,5]

// console.log(myArr); //[ 0, 1, 2, 3, 4, 5 ]

// console.log(myArr[3]);
// console.log(myArr.length);

// *********************Array methods **************************

// myArr.push(8) // add item to the end of array
// myArr.pop() // remove item from the end of array

// myArr.unshift(7) //add item to the beginning of array
// [ 7, 1, 2, 3, 4, 5 ]

// myArr.shift() //remove item from the beginning of array
//[ 2, 3, 4, 5 ]


// console.log(myArr.includes(9)); // check item is available

// console.log(myArr.indexOf(3)); // check index of yhe item
// console.log(myArr.indexOf(13)); // return -1 if item is not available

// const newArr = myArr.join() // convert array into string

// console.log(myArr); //[ 1, 2, 3, 4, 5 ]
// console.log(newArr); //1,2,3,4,5
// console.log(typeof newArr); //string

// *******************splice/slice************************

const myArr = [0,1,2,3,4,5] 

// console.log("A",myArr); // A [ 0, 1, 2, 3, 4, 5 ]

// const nArr = myArr.slice(1,3) 
// console.log(nArr); // [ 1, 2 ]
// console.log("B",myArr); // B [ 0, 1, 2, 3, 4, 5 ]

// const nArr1 = myArr.splice(3,3, 100, 200, 300)
// console.log("C",myArr); //C [ 0, 4, 5 ]
// console.log(nArr1); // [ 1, 2, 3 ]

//slice doesn't defect the original array
//splice defect the original array







