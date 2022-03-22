var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

body.onload = function displayProperties () {
	body.style.background = "linear-gradient(0.25turn, " 
		+ color1.value + ", " 
		+ color2.value + ")";
	css.textContent = body.style.background + ";";
}

function setGradient() {
	body.style.background = "linear-gradient(0.25turn, " 
		+ color1.value + ", " 
		+ color2.value + ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

