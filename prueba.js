const prevButton = document.getElementById('prevButton');
const nextButton = document.querySelector("#nextButton")
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function updateCarousel() {
  carouselItems.forEach(item => item.classList.remove('active'));
  carouselItems[currentIndex].classList.add('active');
}

nextButton.addEventListener('click', function(e) {
    e.preventDefault()
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
  });

prevButton.addEventListener('click', function(e) {
    e.preventDefault()
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  updateCarousel();
});


const addCharacter = document.querySelector('#openDialog');
addCharacter.addEventListener('click', () => {  
  const dialog = document.querySelector('#characterDialog');
  if (!dialog.open) {
    dialog.showModal();
}

});

const closeDialog = document.querySelector('#closeDialog');
closeDialog.addEventListener('click', () => {
  const dialog = document.querySelector('#characterDialog');
  dialog.close();
});