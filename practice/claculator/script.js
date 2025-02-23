const one = document.querySelectorAll('.button')
const input = document.getElementById('input')

one.forEach( function(btn) {
    btn.addEventListener("click", () => {
        input.value += btn.value
    })
})

document.querySelector("#equal").addEventListener("click", () => {
    input.value = eval(input.value)
})

document.querySelector('#clear').addEventListener("click", () => {
    input.value = ""
})
document.querySelector('#delete').addEventListener("click", () => {
    input.value = input.value.slice(0, input.value.length -1)
})
