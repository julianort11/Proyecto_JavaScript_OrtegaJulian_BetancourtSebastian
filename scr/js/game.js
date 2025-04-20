import { fetchClasses, fetchRaces, fetchArmors, fetchWeapons, fetchFeatures } from "./ddApi.js";

document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.getElementById("mainContent");

    document.querySelector('a[href="#Character"]').addEventListener("click", (e) => {
      e.preventDefault();
      mainContent.innerHTML = `
        <h2>Personajes</h2>
        <p>Acá podrás crear tus personajes personalizados.</p>
      `;
    });
  
    document.querySelector('a[href="#Library"]').addEventListener("click", (e) => {
        e.preventDefault();
    
        mainContent.innerHTML = `
          <h2>Librería</h2>
          <p>Consulta habilidades, razas, clases, armas y armaduras.</p>
          <div id="libraryContent"></div>
        `;
    
        const libraryContent = document.getElementById("libraryContent");
    
        fetchClasses().then(data => {
          const classList = data.results.map(c => `<li>${c.name}</li>`).join("");
          libraryContent.innerHTML = `
            <h3>Clases disponibles:</h3>
            <ul>${classList}</ul>
          `;
        });
    
        fetchRaces().then(data => {
          const raceList = data.results.map(r => `<li>${r.name}</li>`).join("");
          libraryContent.innerHTML += `
            <h3>Razas disponibles:</h3>
            <ul>${raceList}</ul>
          `;
        });
    
        fetchWeapons().then(data => {
          const weaponList = data.results.map(w => `<li>${w.name}</li>`).join("");
          libraryContent.innerHTML += `
            <h3>Armas disponibles:</h3>
            <ul>${weaponList}</ul>
          `;
        });
    
        fetchArmors().then(data => {
          const armorList = data.results.map(a => `<li>${a.name}</li>`).join("");
          libraryContent.innerHTML += `
            <h3>Armaduras disponibles:</h3>
            <ul>${armorList}</ul>
          `;
        });
    
        fetchFeatures().then(data => {
          const featureList = data.results.map(f => `<li>${f.name}</li>`).join("");
          libraryContent.innerHTML += `
            <h3>Habilidades especiales disponibles:</h3>
            <ul>${featureList}</ul>
          `;
        });
      });
  
    document.querySelector('a[href="#Contact"]').addEventListener("click", (e) => {
      e.preventDefault();
      mainContent.innerHTML = `
        <h2>Contacto</h2>
        <p>Para dudas</p>
      `;
    });
  });