// const user1 = new Object() // singleton obj
// const user2 = {} // non-singleton obj 

const regularUser = {
    email: 'some@gmail.com',
    fullname: {
        userName: {
            firstName: "uttam",
            lastName: "kumar"
        }
    }
}

// console.log(regularUser.fullname); // { userName: { firstName: 'uttam', lastName: 'kumar' } }

//******************* */ merging object ******************************

// const obj1 = {1: "a", 2: "b", 3: "c"}
// const obj2 = {4: "a", 5: "b", 6: "c"}

// const obj3 = {obj1 , obj2}
//  const obj3 = Object.assign({},obj1,obj2) 

//  console.log(obj3);

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const user1 = {
    name: "uttam",
    email: "kumar@gmail.com",
    isLoggedIn: false
}

// console.log(Object.keys(user1));
// console.log(Object.values(user1)); //return values as a array

// console.log(Object.entries(user1));

// console.log(user1.hasOwnProperty('isLoggedIn'));



