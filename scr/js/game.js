import { bookshop, loadedBookshop } from "./library.js";
import { renderCharacters } from "./characters.js";
import { renderContact } from "./contact.js";

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
    renderContact(mainContent)
  });
});
