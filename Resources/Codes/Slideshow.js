// JavaScript Document

var slideIndexG = 1;
showSlidesG(slideIndexG);

// Next/previous controls
function plusSlidesG(n) {
  	showSlidesG(slideIndexG += n);
}

// Thumbnail image controls
function currentSlideG(n) {
  	showSlidesG(slideIndexG = n);
}

function Start() {
    showSlidesG(1);
}

function showSlidesG(n) {
  	var i;
  	var slides = document.getElementsByClassName("GallerySlide");
  	var dots = document.getElementsByClassName("GalleryDemo");
  	var captionText = document.getElementById("GalleryCaption");
  	if (n > slides.length) {slideIndexG = 1}
  	if (n < 1) {slideIndexG = slides.length}
  	for (i = 0; i < slides.length; i++) {
    	slides[i].style.display = "none";
  	}
	for (i = 0; i < dots.length; i++) {
  		dots[i].className = dots[i].className.replace(" active", "");
  	}
  	slides[slideIndexG-1].style.display = "block";
  	dots[slideIndexG-1].className += " active";
  	captionText.innerHTML = dots[slideIndexG-1].alt;
}