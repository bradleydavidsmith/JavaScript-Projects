/* Basic countdown function */

function countdown() {
  var seconds = document.getElementById("seconds").value;

  function tick() {
    seconds = seconds - 1;
    timer.innerHTML = seconds;
    setTimeout(tick, 1000);
    if (seconds == -1) {
      alert("Time's up!");
    }
  }
  
  tick();
}

/* Slideshow */
var slideIndex = 0;
showSlides();

// Next/previous controls
function pulsSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/* Automatic Slideshow */
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  console.log("slides.length = " + slides.length);
  for (i = 0; i < slides.length; i++) {
    console.log("i = " + i);
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  console.log("slideIndex = " + (slideIndex-1));
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}