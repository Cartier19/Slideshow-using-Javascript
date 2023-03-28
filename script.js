var currentSlide = 1;

// add an event listener to document.body here
var btn = document.body
btn.addEventListener('click', () => {
  console.log('clicked')
  console.log(currentSlide)
  var slides = document.querySelector('.s-' + currentSlide)
  slides.classList.add('hidden')
  currentSlide = currentSlide + 1
  // slides.classList.remove('hidden')
  console.log(slides)
})