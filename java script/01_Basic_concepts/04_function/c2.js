function claculateCartPrice(...num1){
    return num1
}

// console.log(claculateCartPrice(22,626,224,2626));//[ 22, 626, 224, 2626 ]


function claculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(claculateCartPrice(22,626,224,2626));//[ 224, 2626 ]

// ********************passing obj in func ***************************

const user = {
    userName: "uttam",
    price: 199
}

function handleObject(anyuser){
    console.log(`username is ${anyuser.userName}. price is ${anyuser.price}`);
    
}

// handleObject(user)





// passing array

const myArr = [1, 2, 3, 4]

function returnsecondArray(getArray){
    return getArray[1]
}

// console.log(returnsecondArray(myArr));




