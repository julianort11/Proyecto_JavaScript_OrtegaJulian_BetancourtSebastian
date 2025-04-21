document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
  
    function updateCarousel() {
      carouselItems.forEach(item => item.classList.remove('active'));
      carouselItems[currentIndex].classList.add('active');
    }
  
    nextButton.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      updateCarousel();
    });
  
    prevButton.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      updateCarousel();
    });
  
    updateCarousel();
  
    const addCharacter = document.querySelector('#openDialog');
    addCharacter.addEventListener('click', () => {  
      const dialog = document.querySelector('#characterDialog');
      dialog.showModal();
    });
  
    const closeDialog = document.querySelector('#closeDialog');
    closeDialog.addEventListener('click', () => {
      const dialog = document.querySelector('#characterDialog');
      dialog.close();
    });
  });
  