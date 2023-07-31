var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
const initialColor1 = '#ff0000';
const initialColor2 = '#ffff00';

function displayInitialStyle(){
	color1.value = initialColor1;
	color2.value = initialColor2;
	css.innerHTML = ;
}

displayInitialStyle();


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = `${body.style.background};`;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);