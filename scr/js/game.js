import { bookshop, loadedBookshop } from "./library.js";
import { renderCharacters } from "./characters.js";


document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.getElementById("mainContent");

  document.querySelector('a[href="#Character"]').addEventListener("click", (e) => {
    e.preventDefault();
    renderCharacters();
  });

  document.querySelector('a[href="#Library"]').addEventListener("click", (e) => {
    e.preventDefault();

    mainContent.innerHTML = bookshop();
    loadedBookshop();
  });

  document.querySelector('a[href="#Contact"]').addEventListener("click", (e) => {
    e.preventDefault();
    mainContent.innerHTML = `
    <h2>Contacto</h2>
  <div class="div__contact">
    <p>Para dudas</p>
    <h3>informacion:</h3>
  </div>
  <div class="div__name">
    <div class="div__name_img">
      <h4>Julian Ortega</h4>
      <div class="backgr__img">
        <div class="backgr__img_git">
          <a href="https://github.com/julianort11"><img src="/assets/img/github.png" alt="GitHub"></a>
        </div>
        <div class="backgr__img_insta">
          <a href="https://www.instagram.com/ort_ga._?igsh=b2tjcWF2dHdiMGVi&utm_source=qr"><img src="/assets/img/instagram.png" alt="Instagram"></a>
        </div>
      </div>

      <h4>Setabastian Betancourt</h4>
      <div class="backgr__img">
        <div class="backgr__img_git">
          <a href="https://github.com/sebasBetancourt"><img src="/assets/img/github.png" alt="GitHub"></a>
        </div>
        <div class="backgr__img_insta">
          <a href="https://www.instagram.com/08_"><img src="/assets/img/instagram.png" alt="Instagram"></a>
        </div>
      </div>
    </div>
  </div>
      `;
  });
});
