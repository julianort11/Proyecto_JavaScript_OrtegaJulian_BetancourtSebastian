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
                  <button id="closeDialog">X</button>
                  <div class="dialog__header">
                    <h2>Create your character</h2>
                  </div>

                  <div class="dialog__content">
                    <div class="classGame">
                      <strong>Choose your Class: </strong>
                    </div>

                    <div class="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img src="../../assets/img/Barbarian.png" alt="Barbarian">
                          <p>Barbarian</p>
                        </div>
                        <div class="carousel-item">
                          <img src="../../assets/img/Bard.png" alt="Bard">
                          <p>Bard</p>
                        </div>
                        <div class="carousel-item">
                          <img src="../../assets/img/Cleric.png" alt="Cleric">
                          <p>Cleric</p>
                        </div>
                        <div class="carousel-item">
                          <img src="../../assets/img/Druid.png" alt="Druid">
                          <p>Druid</p>
                        </div>
                        <div class="carousel-item">
                          <img src="../../assets/img/Fighter.png" alt="Fighter">
                          <p>Fighter</p>
                        </div>
                        <div class="carousel-item">
                          <img src="../../assets/img/Monk.png" alt="Monk">
                          <p>Monk</p>
                        </div>
                        <div class="carousel-item">
                          <img src="../../assets/img/Paladin.png" alt="Paladin">
                          <p>Paladin</p>
                        </div>
                        <div class="carousel-item">
                          <img src="../../assets/img/Ranger.png" alt="Ranger">
                          <p>Ranger</p>
                        </div>
                        <div class="carousel-item">
                          <img src="../../assets/img/Rogue.png" alt="Rogue">
                          <p>Rogue</p>
                        </div>
                        <div class="carousel-item">
                          <img src="../../assets/img/Sorcerer.png" alt="Sorcerer">
                          <p>Sorcerer</p>
                        </div>
                        <div class="carousel-item">
                          <img src="../../assets/img/Warlock.png" alt="Warlock">
                          <p>Warlock</p>
                        </div>
                        <div class="carousel-item">
                          <img src="../../assets/img/Wizard.png" alt="Wizard"><br>
                          <p>Wizard</p>
                        </div>
                      </div>

                      <button class="carousel-control prev" id="prevButton">❮</button>
                      <button class="carousel-control next" id="nextButton">❯</button>
                    </div>
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
                            <div class="card-top-banner"><strong>${character.name}</strong></div>
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

