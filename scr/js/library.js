import { fetchClasses, fetchRaces, fetchArmors, fetchWeapons, fetchFeatures } from "./ddApi.js";

export function bookshop() {
    return `
          <div class="main__library">
          <h2>Library</h2>
          <p>Browse abilities, races, classes, weapons, and armor.</p>
          </div>
          <div id="libraryContent"></div>
        `;
}

export function loadedBookshop() {

    const libraryContent = document.getElementById("libraryContent");

    Promise.all([fetchClasses(), fetchRaces(), fetchWeapons(), fetchArmors(), fetchFeatures()])
        .then(([classes, races, weapons, armors, features]) => {
            if (classes?.results) {
                const classList = classes.results.map(c => `<li>${c.name}</li>`).join("");
                libraryContent.innerHTML += `
                <div class="library__section">
                  <h3 class="displayed__list">Available Classes:</h3>
                  <ul>${classList}</ul>
                </div>
              `;
            }

            if (races?.results) {
                const raceList = races.results.map(r => `<li>${r.name}</li>`).join("");
                libraryContent.innerHTML += `
                <div class="library__section">
                  <h3 class="displayed__list">Available Races:</h3>
                  <ul>${raceList}</ul>
                </div>
              `;
            }

            // Weapons
            if (weapons?.equipment) {
                const weaponList = weapons.equipment.map(w => `<li>${w.name}</li>`).join("");
                libraryContent.innerHTML += `
                <div class="library__section">
                  <h3 class="displayed__list">Available Weapons:</h3>
                  <ul>${weaponList}</ul>
                </div>
              `;
            }

            // Armor
            if (armors?.equipment) {
                const armorList = armors.equipment.map(a => `<li>${a.name}</li>`).join("");
                libraryContent.innerHTML += `
                <div class="library__section">
                  <h3 class="displayed__list">Available Armor:</h3>
                  <ul>${armorList}</ul>
                </div>
              `;
            }

            if (features?.results) {
                const featureList = features.results.map(f => `<li>${f.name}</li>`).join("");
                libraryContent.innerHTML += `
                <div class="library__section">
                  <h3 class="displayed__list">Available Special Features:</h3>
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
};
