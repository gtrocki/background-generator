var css = document.querySelector("h3");
var color1 = document.querySelector(".color1"); 
var color2 = document.querySelector(".color2");
var body =  document.getElementById("gradient");
var random = document.querySelector("button.random");


function setGradient() {
	body.style.background = "linear-gradient(to right," 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";

	css.textContent = body.style.background + ";";
}


function generateRandomHexString(){
	var rand = "#";
	var x;
	var y;
	var h;

	for (var i = 0; i < 3; i++){
		x = Math.random(); //generates a random number between 0 (inclusive) and 1 (exclusive).
		y = Math.floor(x * 256); //Multiply the number by 256 and take the floor to get a random number between 0 (inclusive) and 255 (inclusive).
		h = y.toString(16); //Convert the number to a hexadecimal string.

		// A check so that no numbers are only one digit.
		if (h.length < 2) {
			h = "0" + h;
		}

		rand = rand + h;
	}

	return rand;
}

function setRandomGradient() {
	
	color1.value = generateRandomHexString();
	color2.value = generateRandomHexString();

	setGradient();
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", setRandomGradient);



//you can use any of the below 2 lines to achive the background and css display being generated on the first page load. 
// ----------------------------------------------------------
// body.onload = setGradient();

document.addEventListener("DOMContentLoaded", setGradient);
// ----------------------------------------------------------





