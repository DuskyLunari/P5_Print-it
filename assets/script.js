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

// variables du DOM
const left = document.querySelector(".arrow_left");
const right = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");
const img = document.querySelector(".banner-img");
const txt = document.querySelector(".img-txt");

// variable pour gérer la position du slider
let slidePosition = 0;

// Creation des divs dot selon la taille de ta table et affectation de dot selected au premier élement de la table à l'initialisation
for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div")
	dot.addEventListener("click", () => {
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

// Comportement de la flèche gauche du carousel 
left.addEventListener("click", () => {
	slidePosition--;
	if (slidePosition < 0) {
		slidePosition = slides.length-1; 
	} 
	changeSlide();
	dotSelected ();
});

// Comportement de la flèche droite du carousel 
right.addEventListener("click", () => {
	slidePosition++;
	if (slidePosition > slides.length-1) {
		slidePosition = 0;	
	}
	changeSlide();
	dotSelected ();
});

// fonction pour gérer le changement d'image d'une slide et son texte
function changeSlide () {
	img.src = slides[slidePosition].image;
	txt.innerHTML = slides[slidePosition].tagLine;
};

// Creation de variable dots pour sélectionner la totalité des elements du DOM ayant la classe .dot
const dots = document.querySelectorAll(".dot");

// fonction pour repostionner le dot sur le carousel à chaque changement de slide
function dotSelected () {
	dots.forEach ((dot, i) => {
		if (dot.classList.contains('dot_selected')) {
			dot.classList.remove('dot_selected');
		}
		if (i === slidePosition) {
			dot.classList.add('dot_selected');
		}
	})
}
