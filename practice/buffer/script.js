const button = document.querySelectorAll('.scr4headbtn')

const body1 = document.querySelector('#creator')
const body2 = document.querySelector('#smallBusiness')
const body3 = document.querySelector('#Agencies')

button.forEach( function(btn) {
    btn.addEventListener('click', function(e){
        if (e.target.id === 'scr4headbtn1') {
            body1.style.display = 'block'
            body2.style.display = 'none'
            body3.style.display = 'none'
            button[0].style.backgroundColor = 'rgb(2, 33, 2)'
            button[1].style.backgroundColor = 'white'
            button[2].style.backgroundColor = 'white'

            button[0].style.color = 'rgb(108, 233, 108)'
            button[1].style.color = 'black'
            button[2].style.color = 'black'
        }
        else if (e.target.id === 'scr4headbtn2') {
            body1.style.display = 'none'
            body2.style.display = 'block'
            body3.style.display = 'none'
            button[0].style.backgroundColor = ''
            button[1].style.backgroundColor = 'rgb(2, 33, 2)'
            button[2].style.backgroundColor = ''

            button[0].style.color = 'black'
            button[1].style.color = 'rgb(108, 233, 108)'
            button[2].style.color = 'black'
        }
        else if (e.target.id === 'scr4headbtn3') {
            body1.style.display = 'none'
            body2.style.display = 'none'
            body3.style.display = 'block'
            button[0].style.backgroundColor = 'white'
            button[1].style.backgroundColor = 'white'
            button[2].style.backgroundColor = 'rgb(2, 33, 2)'

            button[0].style.color = 'black'
            button[1].style.color = 'black'
            button[2].style.color = 'rgb(108, 233, 108)'
        }
        
    })
})