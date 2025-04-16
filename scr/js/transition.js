export function initTransition(selector) {
    const button = document.querySelector(selector);
  
    const transitionDiv = document.createElement('div');
    transitionDiv.classList.add('transition-screen');
    document.body.appendChild(transitionDiv);
  
    if (button) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
  
        transitionDiv.classList.add('active');
  
        setTimeout(() => {
          location.href = button.getAttribute('href');
        }, 800);
      });
    }
  }