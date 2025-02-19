const mySym = Symbol("key1")
const jsUser = {
    name: "uttam",
    "full name": 'uttam kumar',
    age: 21,
    location: "patna",
    email: 'google.com',
    [mySym]: "key1",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"],
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(jsUser["full name"]); // this type of value can't be accessed by .(dot) method

// console.log(jsUser[mySym]);

// updating object elements

jsUser.email = "uttam@gmail.com"

// console.log(jsUser.email);

// fixing obj. elements

// Object.freeze(jsUser)
// checking freeze or nor
// jsUser.email = "mukesh@gmail.com" //updating

// console.log(jsUser.email); // uttam@gmail.com


// adding function in object

// jsUser.greeting = function(){
//     console.log("hello js user");
// }
// jsUser.greeting2 = function(){
//     console.log(`hello js user, ${this.name} `);
// }
//  console.log(jsUser.greeting2());
 









