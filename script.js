// declaring slideIndex var and assigning default value 1 ( because we want to show first image bydefault )
var slideIndex = 1;
// calling showSlides function and passing slideIndex as an argument so that we can use this slideIndex value in showSlides function
showSlides(slideIndex);

// creating function to switch slide based on currentSlide value (value of n getting from pagination onClick)
function currentSlide(n) {
  showSlides((slideIndex = n));
  // console.log(slideIndex); // for explanation purpose
}

// function to showSlides
function showSlides() {
  console.log(slideIndex); // for explanation purpose

  var i;
  /* targeting all element by classname imgSlide and pagination  */
  var slides = document.getElementsByClassName("imgSlide");
  var dots = document.getElementsByClassName("pagination");
  // console.log(slides.length); // for explanation purpose
  // console.log(dots.length); // for explanation purpose

  /* hiding all images by default using for loop and display none  */
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  /* removing active class from all dots pagination  */
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  /* show image slide dynamically (The value of slideIndex will dynamically change) */
  slides[slideIndex - 1].style.display = "block";
  // console.log(`slide index ${slideIndex - 1}`); // for explanation purpose

  /* adding active class to respective dots pagination  */
  dots[slideIndex - 1].classList.add("active");
}
