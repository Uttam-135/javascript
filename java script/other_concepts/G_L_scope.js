let a =300
//globl scope

if (true) {
    let a = 5
    const b = 10
    //block scope
}
// console.log(c);


//                           nested scope


function one(){
    const username = "uttam"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website);
    
    two()
}

// one()

// +++++++++++++++++++++++++ interesting +++++++++++++++++++




