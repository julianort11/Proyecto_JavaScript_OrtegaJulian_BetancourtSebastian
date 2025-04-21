import { fetchClasses, fetchRaces, fetchArmors, fetchWeapons, fetchFeatures } from "./ddApi.js";
import {renderCharacters} from "./characters.js";


document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.getElementById("mainContent");

    document.querySelector('a[href="#Character"]').addEventListener("click", (e) => {
        e.preventDefault();
        renderCharacters();
    });

    document.querySelector('a[href="#Library"]').addEventListener("click", (e) => {
        e.preventDefault();
      
        mainContent.innerHTML = `
          <h2>Librería</h2>
          <p>Consulta habilidades, razas, clases, armas y armaduras.</p>
          <div id="libraryContent"></div>
        `;
      
        const libraryContent = document.getElementById("libraryContent");
      
        Promise.all([fetchClasses(), fetchRaces(), fetchWeapons(), fetchArmors(), fetchFeatures()])
          .then(([classes, races, weapons, armors, features]) => {
            if (classes?.results) {
              const classList = classes.results.map(c => `<li>${c.name}</li>`).join("");
              libraryContent.innerHTML += `
                <div class="library__section">
                  <h3 class="displayed__list">Clases disponibles:</h3>
                  <ul>${classList}</ul>
                </div>
              `;
            }
      
            if (races?.results) {
              const raceList = races.results.map(r => `<li>${r.name}</li>`).join("");
              libraryContent.innerHTML += `
                <div class="library__section">
                  <h3 class="displayed__list">Razas disponibles:</h3>
                  <ul>${raceList}</ul>
                </div>
              `;
            }
      
            if (weapons?.results) {
              const weaponList = weapons.results.map(w => `<li>${w.name}</li>`).join("");
              libraryContent.innerHTML += `
                <div class="library__section">
                  <h3 class="displayed__list">Armas disponibles:</h3>
                  <ul>${weaponList}</ul>
                </div>
              `;
            }
      
            if (armors?.results) {
              const armorList = armors.results.map(a => `<li>${a.name}</li>`).join("");
              libraryContent.innerHTML += `
                <div class="library__section">
                  <h3 class="displayed__list">Armaduras disponibles:</h3>
                  <ul>${armorList}</ul>
                </div>
              `;
            }
      
            if (features?.results) {
              const featureList = features.results.map(f => `<li>${f.name}</li>`).join("");
              libraryContent.innerHTML += `
                <div class="library__section">
                  <h3 class="displayed__list">Habilidades especiales disponibles:</h3>
                  <ul>${featureList}</ul>
                </div>
              `;
            }
      
            document.querySelectorAll('.displayed__list').forEach(header => {
              header.addEventListener('click', () => {
                const ul = header.nextElementSibling;
                ul.classList.toggle('show');
              });
            });
          });
      });

    });