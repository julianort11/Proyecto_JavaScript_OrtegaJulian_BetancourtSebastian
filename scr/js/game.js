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
        <p>Para dudas</p>
        <h3>informacion:</h3>
        <div class="div__name">
          <h4>Jose Julian Ortega Navarro</h4>
            <div class="div__name_img">
                <div class="backgr__img">
                   <a href=""><img src="/assets/img/klipartz.com.png"></a>
                </div>
                <div>
                   <a href=""><img src="/assets/img/logig.png"></a>
                </div>
            </div>
        </div>
      `;
  });
});
