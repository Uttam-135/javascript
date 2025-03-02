const numberbtn = document.querySelectorAll('#number')
const operator = document.querySelectorAll('#operator')
const eqaulbtn = document.querySelector('#equal')
const input = document.getElementById('input')

const historybutton = document.querySelector('#historybutton')
const cancelbutton = document.querySelector('#cancel')
let calchistory = document.querySelector('#text')
const clearbtn = document.querySelector('#clrbtn')

const screen1 = document.querySelector('.main')
const screen2 = document.querySelector('.history')

const operatervlaue = ['-', '+','*', '/']
let expression = JSON.parse(localStorage.getItem("history")) || [];

numberbtn.forEach( function(e){
    e.addEventListener('click',function(btn){
        input.value += e.value
    })
})
operator.forEach( function(e){
    e.addEventListener('click',function(btn){
        let lastchar = input.value.slice(-1)
        if(!operatervlaue.includes(lastchar)){
            input.value += e.value
        }
    })
})

document.querySelector("#equal").addEventListener("click", () => {
    expression.push(`${input.value} = ${eval(input.value)}`)
    input.value = eval(input.value)
    storeHistory()
    showHistory()
})

document.querySelector('#clear').addEventListener("click", () => {
    input.value = ""
})
document.querySelector('#delete').addEventListener("click", () => {
    input.value = input.value.slice(0, input.value.length -1)
})

clearbtn.addEventListener('click', function(e){
    calchistory.innerHTML = ''
    expression = []
    storeHistory()
})
cancelbutton.addEventListener('click', function(e){
    screen1.style.display = 'block'
    screen2.style.display = 'none'

})
historybutton.addEventListener('click', function(e){
    screen1.style.display = 'none'
    screen2.style.display = 'block'
})

function storeHistory() {
    localStorage.setItem("history", JSON.stringify(expression))
}

function showHistory() {
    expression.forEach( (express) => {
        calchistory.innerHTML += `<p style="display: block">${express}</p>`
    })
}

window.addEventListener("load", showHistory)