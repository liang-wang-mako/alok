const slides = document.querySelectorAll('.slide');
let slideIndex = 0;
let intervalId = null

document.addEventListener('DOMContentLoaded', initializeSlider)

function initializeSlider() {
  if (slides.length > 0) {  
    slides[slideIndex].classList.add('active');
    intervalId = setInterval(nextSlide, 4000);
  }
}

function showSlide(index) {
  slides.forEach(slide => {
    slide.classList.remove('active')
  })
 
  slides[index].classList.add('active');
}

function prevSlide(){

  clearInterval(intervalId);
  
  slideIndex--;
  if (slideIndex > slides.length - 1) 
    {
      slideIndex = 0;
    }
  if (slideIndex < 0) 
    {
      slideIndex = slides.length - 1;
    }

  showSlide(slideIndex);
}

function nextSlide(){
  slideIndex++;
  if (slideIndex > slides.length - 1) 
    {
      slideIndex = 0;
    }
  if (slideIndex < 0) 
    {
      slideIndex = slides.length - 1;
    }
  showSlide(slideIndex);
}