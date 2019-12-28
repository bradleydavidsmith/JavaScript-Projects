/* Open the "pop-up" modal */
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

/* Close the "pop-up" modal */
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

/* Set-up the Modal when loading*/
var slideIndex = 1;
showSlides(slideIndex);

/* plusSlides(n) is used with the
   next and previous link "buttons" */
function plusSlides(n) {
  showSlides(slideIndex += n);
}

/* Set the current Slide to number "n" */
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/* Show slide number "n" */
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
} 