let docReady = function() {
  console.log('ready');
}

let fizzBuzz = function(){
	// count from 1 to 100
	// if num is a multiple of 3, print fizz
	// if num is multiple of 5, print buzz
	// if num is multiple of 3 & 5, print fizzBuzz
	// otherwise: print number

	for(let counter = 1; counter <= 100; counter++){
		if(counter % 3 == 0 && counter % 5 == 0){
			console.log('fizzBuzz');
		}else if(counter % 5 == 0){
			console.log('buzz');
		}else if(counter % 3 == 0){
			console.log('fizz');
		}else{
			console.log(counter);
		}
	}	
}

//wrie function that takes two parameters and prints the smaller one

let printMin = function(a, b){
	if(a < b){
		console.log(a);
	}else{
		console.log(b);
	}
}

//tell the browser what to run when page is loaded
document.addEventListener('DOMContentLoaded', function() {
    //docReady();
    fizzBuzz();
}, false);
