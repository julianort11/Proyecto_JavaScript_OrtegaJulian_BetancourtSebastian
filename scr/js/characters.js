import { addCharacter } from "../js/AddCaharacter.js";
const characters = async () => {
    try {
        const response = await fetch('https://www.dnd5eapi.co/api/classes');
        
        const data = await response.json();

        if (!data || !data.results) {
            console.error("No se encontraron resultados.");
            return;
        }

        let charactersHTML = `
            <h2>Personajes</h2>
            <dialog id="characterDialog" class="dialog__Add">
              <div class="dialog__container">
                <button class="button__close" id="closeDialog">X</button>
                <div class="dialog__header">
                  <h2>Create your character</h2>
                </div>
                <div class="dialog__content">
                  <!-- Campo de nombre -->
                  <div class="div__form">
                    <form id="characterForm">
                      <span>Write name of character: </span>
                      <input type="text" name="name" id="name" placeholder="Enter character name" required />
                      <span>Write detail of character: </span>
                      <input type="text" name="details" id="details" placeholder="Enter character details" />
                    
                  </div>

                  <!-- Carrusel de clases -->
                  <div class="classGame">
                    <strong>Choose your Class:</strong>
                    <div class="carousel">
                      <div class="carousel-inner" id="classCarousel">
                        <!-- Clases se cargarán dinámicamente aquí -->
                      </div>
                      <button class="carousel-control prev" id="prevButton">❮</button>
                      <button class="carousel-control next" id="nextButton">❯</button>
                    </div>
                  </div>

                  <!-- Selector de raza -->
                  <div class="raceGame">
                    <strong>Choose your Race:</strong>
                    <select id="raceSelect" class="select-group"></select>
                  </div>

                  <!-- Selector de género -->
                  <div class="genderGame">
                    <strong>Choose your Gender:</strong>
                    <select id="genderSelect">
                      <option value="Male">Masculino</option>
                      <option value="Female">Femenino</option>
                      <option value="Other">Otro</option>
                    </select>
                  </div>

                  <!-- Equipo y armas -->
                  <div class="armorWeapons">
                    <strong>Choose your Armor and Weapons:</strong>

                    <select id="equipmentSelect"></select>
                  </div>

                  <!-- Habilidades -->
                  <div class="abilities">
                    <strong>Abilities:</strong>
                    <select id="abilities"></select>
                  </div>

                  <!-- Habilidades especiales -->
                  <div class="specialSkills">
                    <strong>Special Skills:</strong>
                    <select id="skills"></select>
                  </div>

                  <!-- Accesorios -->
                  <div class="accessories">
                    <strong>Accessories:</strong>
                    <select id="accessories"></select>
                  </div>

                  <!-- Botón de guardar -->
                  <input type="submit" id="saveCharacter" value="Save Character">
                </form>
                  </div>
              </div>
            </dialog>

            <div class="div__characters">
                <div class="div__add">
                    <button class="button__add" id="openDialog">
                        <div class="button__add">
                            <img src="../../assets/img/Add.svg" alt="Add Character">
                        </div>
                    </button>
                </div>
        `;

        for (const character of data.results) {
            const subClassesResponse = await fetch(`https://www.dnd5eapi.co${character.url}`);
            const subClassesData = await subClassesResponse.json();

            const subClass = subClassesData.subclasses.length > 0 ? subClassesData.subclasses[0].name : 'N/A';

            const characterCard = `
                <div class="div__card">
                    <a href="#">
                        <div class="card-frame">
                            <div class="card-top-banner"><strong>Walk</strong></div>
                            <div class="card-image">
                                <img src="../../assets/img/${character.name}.png" alt="${character.name}">
                            </div>
                            <div class="card-separator"></div>
                            <div class="card-info">
                                <p>
                                    <strong>Clase:</strong> ${character.name}<br><br>
                                    <strong>Subclase:</strong> ${subClass}<br><br>
                                    <strong>Raza:</strong> Humano (Ejemplo)
                                </p>
                            </div>
                            <div class="card-footer">
                                <a href="#">View More..</a>
                            </div>
                        </div>
                    </a>
                </div>
            `;

            charactersHTML += characterCard;
        }

        charactersHTML += '</div>';

        return charactersHTML;
    } catch (error) {
        console.error('Error al cargar los personajes:', error);
    }
};

export const renderCharacters = async () => {
    const charactersSection = document.getElementById('mainContent'); 
    charactersSection.innerHTML = await characters();
    addCharacter();
};

