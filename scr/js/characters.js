import { addCharacter } from "../js/AddCaharacter.js"; 

const characters = async () => {
    let charactersHTML = ``;

    try {
        const response = await fetch('https://6806325bca467c15be6b8c11.mockapi.io/personajes');
        const data = await response.json();
        console.log(data);

        charactersHTML = `
            <div class="main__characters">
                <h2>Characters</h2>
                <p>Create your character and get ready for the adventure</p>
            </div>
            <dialog id="characterDialog" class="dialog__Add">
                <div class="dialog__container">
                    <button class="button__close" id="closeDialog">X</button>
                    <div class="dialog__header">
                        <h2>Create your character</h2>
                    </div>
                    <div class="dialog__content">
                        <form id="characterForm">
                            <div class="div__form">
                                <span>Write name of character: </span>
                                <input type="text" name="name" id="name" placeholder="Enter character name" required />
                                <span>Write detail of character: </span>
                                <input type="text" name="details" id="details" placeholder="Enter character details" />
                            </div>

                            <div class="classGame">
                                <strong>Choose your Class:</strong>
                                <div class="carousel">
                                    <div class="carousel-inner" id="classCarousel"></div>
                                    <button class="carousel-control prev" id="prevButton" type="button">❮</button>
                                    <button class="carousel-control next" id="nextButton" type="button">❯</button>
                                </div>
                            </div>

                            <div class="raceGame">
                                <strong>Choose your Race:</strong>
                                <select id="raceSelect" class="select-group"></select>
                            </div>

                            <div class="genderGame">
                                <strong>Choose your Gender:</strong>
                                <select id="genderSelect">
                                    <option value="Male">Masculino</option>
                                    <option value="Female">Femenino</option>
                                    <option value="Other">Otro</option>
                                </select>
                            </div>

                            <div class="armorWeapons">
                                <strong>Choose your Armor and Weapons:</strong>
                                <select id="equipmentSelect"></select>
                            </div>

                            <div class="abilities">
                                <strong>Abilities:</strong>
                                <select id="abilities"></select>
                            </div>

                            <div class="specialSkills">
                                <strong>Special Skills:</strong>
                                <select id="skills"></select>
                            </div>

                            <div class="accessories">
                                <strong>Accessories:</strong>
                                <select id="accessories"></select>
                            </div>

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

        for (const character of data) {
            charactersHTML += `
                <div class="div__card">
                    <a href="#">
                        <div class="card__frame">
                            <div class="card__top_banner"><strong>${character.name}</strong></div>
                            <div class="card__image">
                                <img src="../../assets/img/${character.class}.png" alt="${character.class}">
                            </div>
                            <div class="card__separator"></div>
                            <div class="card__info">
                                <p>
                                    <strong>Clase:</strong> ${character.class}<br><br>
                                    <strong>Details:</strong> ${character.details}<br><br>
                                    <strong>Raza:</strong> ${character.race}
                                </p>
                            </div>
                            <div class="card__footer">
                                <a href="#viewMore" class="view-more-btn" data-id="${character.id}">View More..</a>
                            </div>
                        </div>
                    </a>
                </div>

                <dialog class="dialog__card" id="card__more_${character.id}">
                    <div class="dialog__contentMore">
                        <div class="card__top_bannerMore"><strong>${character.name}</strong></div>
                        <div class="card__imageMore">
                            <img src="../../assets/img/${character.class}.png" alt="${character.class}">
                        </div>
                        <div class="card__separatorMore"></div>
                        <div class="card__infoMore">
                            <div class="oneInfo">
                                <div><strong>Details:</strong><p>${character.details}</p></div>
                                <div><strong>Gender:</strong><p>${character.gender}</p></div>
                                <div><strong>Race:</strong><p>${character.race}</p></div>
                                <div><strong>Class:</strong><p>${character.class}</p></div>
                            </div>
                            <div class="twoInfo">
                                <div><strong>Abilities:</strong><p>${character.abilities}</p></div>
                                <div><strong>Skills:</strong><p>${character.skills}</p></div>
                                <div><strong>Accessories:</strong><p>${character.accessories}</p></div>
                                <div><strong>Equipment:</strong><p>${character.equipment}</p></div>
                            </div>
                        </div>
                        <div class="card__footerMore"><span>${character.id}</span></div>
                    </div>
                </dialog>
            `;
        }

        charactersHTML += `</div>`;
    } catch (error) {
        console.error('Error al cargar los personajes:', error);
    }

    return charactersHTML;
};

export const renderCharacters = async () => {
    const charactersSection = document.getElementById('mainContent');
    if (!charactersSection) {
        console.error('Elemento con id="mainContent" no encontrado en el HTML');
        return;
    }

    charactersSection.innerHTML = await characters();
    addCharacter(); 
};