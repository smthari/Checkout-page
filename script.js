var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
  /* console.log(slideIndex); */
}

function changeSlide(n) {
  showSlides((slideIndex += n));
  /* console.log(slideIndex); */
}

// we have to pass n as an parameter in function
// we'll get the value of n by calling function and passing slideIndex as an argument
function showSlides(n) {
  // console.log(slideIndex);

  var i;
  var slides = document.getElementsByClassName("mySlides");
  // console.log(typeof slides + " " + slides.length);
  var dots = document.getElementsByClassName("change");

  // let's write condition to loop a slideshow
  // when n is greater then slides.length then value of slideIndex should be 1
  if (n > slides.length) {
    slideIndex = 1;
  }
  // when n is less then 1 then value of slideIndex should be equal to slides.length
  if (n < 1) {
    slideIndex = slides.length;
  }

  /* hiding all images by default using display none  */
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    // console.log(slides[i])
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  // console.log(`slide index ${slideIndex - 1}`);
  dots[slideIndex - 1].className += " active";
}