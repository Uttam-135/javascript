
const calculate = document.querySelector('#calculate')
console.log(calculate)

calculate.addEventListener('click', function(e) {
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    e.preventDefault();

  if(height == '' || height <= 0 || isNaN(height) ){
      results.innerHTML = `Please enter a valid height ${height}`;
  }
  else if(weight == '' ||  weight <= 0 || isNaN(weight) ){
      results.innerHTML = `Please enter a valid height ${weight}`
  }
   else{
    const bmiresults= parseInt((weight / ((height * height) / 10000)).toFixed(2))
    if(bmiresults > 0 && bmiresults < 18.6 ){
        results.innerHTML = ('Under Weight');
    }
     else if(bmiresults >= 18.6 && bmiresults < 24.9){
        results.innerHTML = ('Normal Weight');
    }
    else if( bmiresults >= 24.9){
        results.innerHTML = ('Over Weight');
    }

    console.log(bmiresults);
    
   }
})


