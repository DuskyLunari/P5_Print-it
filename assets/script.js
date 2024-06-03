const slides = [
	{
		"image":"/assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"/assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"/assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"/assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const left = document.querySelector(".arrow_left");
const right = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");
const img = document.querySelector(".banner-img");
const txt = document.querySelector(".img-txt");

let slidePosition = 0;

for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div")
	dot.addEventListener("click", () => {
		console.log(i);
		slidePosition = i;
		changeSlide();
		dotSelected();
	})
	dot.classList.add("dot");
	if (i == 0) {
		dot.classList.add("dot_selected");
	} 
	dotsContainer.append(dot)
}

const dots = document.querySelectorAll(".dot");

left.addEventListener("click", () => {
	slidePosition--;
	if (slidePosition < 0) {
		slidePosition = slides.length-1; 
	} 
	changeSlide();
	dotSelected ();
	console.log("Click on left arrow");
});

right.addEventListener("click", () => {
	slidePosition++;
	if (slidePosition > slides.length-1) {
		slidePosition = 0;	
	}
	changeSlide();
	dotSelected ();
	console.log("Click on right arrow");
});

function changeSlide () {
	img.src = slides[slidePosition].image;
	txt.innerHTML = slides[slidePosition].tagLine;
};

function dotSelected () {
	console.log(dots);
	dots.forEach ((dot, i) => {
		if (dot.classList.contains('dot_selected')) {
			dot.classList.remove('dot_selected');
		}
		if (i === slidePosition) {
			dot.classList.add('dot_selected');
		}
	})
}
