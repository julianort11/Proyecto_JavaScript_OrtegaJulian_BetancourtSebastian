export const addCharacter = () => {
  const classCarousel = document.getElementById('classCarousel');
  const raceSelect = document.getElementById('raceSelect');
  const equipmentSelect = document.getElementById('equipmentSelect');
  const abilitiesSelect = document.getElementById('abilities');
  const skillsSelect = document.getElementById('skills');
  const accessoriesSelect = document.getElementById('accessories');
  const saveButton = document.getElementById('saveCharacter');
  
  let selectedClass = null;
  let selectedRace = null;

  async function loadClasses() {
    const response = await fetch('https://www.dnd5eapi.co/api/classes/');
    const data = await response.json();

    data.results.forEach((cls, index) => {
      const div = document.createElement('div');
      div.classList.add('carousel-item');
      div.dataset.class = cls.index;

      const classNameImage = cls.name; 
      const imgSrc = `../../assets/img/${classNameImage}.png`;

      const img = document.createElement('img');
      img.src = imgSrc;
      img.alt = cls.name;

      const p = document.createElement('p');
      p.textContent = cls.name;

      div.appendChild(img);
      div.appendChild(p);

      if (index === 0) {
        div.classList.add('active');
      }

      classCarousel.appendChild(div);
    });
  }

  async function loadRaces() {
    const response = await fetch('https://www.dnd5eapi.co/api/races/');
    const data = await response.json();
    data.results.forEach(race => {
      const option = document.createElement('option');
      option.value = race.index;
      option.textContent = race.name;
      raceSelect.appendChild(option);
    });
  }

  async function loadEquipment() {
    const response = await fetch('https://www.dnd5eapi.co/api/equipment/');
    const data = await response.json();
    data.results.forEach(item => {
      const option = document.createElement('option');
      option.value = item.index;
      option.textContent = item.name;
      equipmentSelect.appendChild(option);
    });
  }

async function loadClassAbilities(classIndex) {
  abilitiesSelect.innerHTML = '';
  const response = await fetch(`https://www.dnd5eapi.co/api/classes/${classIndex}`);
  const data = await response.json();
  data.proficiencies.forEach(proficiency => {
    const option = document.createElement('option');
    option.value = proficiency.index;
    option.textContent = proficiency.name;
    abilitiesSelect.appendChild(option);
  });

}

async function loadClassSkills(classIndex) {
  skillsSelect.innerHTML = ''
  const response = await fetch(`https://www.dnd5eapi.co/api/classes/${classIndex}`);
  const data = await response.json();

  for (const subclass of data.subclasses) {
    const subclassResponse = await fetch(`https://www.dnd5eapi.co/api/subclasses/${subclass.index}/features`);
    const subclassData = await subclassResponse.json();
    subclassData.results.forEach(feature => {
      const option = document.createElement('option');
      option.value = feature.index;
      option.textContent = feature.name;
      skillsSelect.appendChild(option);
    });

  }
}
async function loadClassAccessories(classIndex) {
  accessoriesSelect.innerHTML = ''
  const response = await fetch(`https://www.dnd5eapi.co/api/classes/${classIndex}`);
  const data = await response.json();
  data.starting_equipment.forEach(item => {
    const option = document.createElement('option');
    option.value = item.equipment.index;
    option.textContent = item.equipment.name; 
    accessoriesSelect.appendChild(option);
  });
}



  function changeActiveItem(direction) {
    const items = document.querySelectorAll('.carousel-item');
    let activeIndex = -1;

    items.forEach((item, index) => {
      if (item.classList.contains('active')) {
        activeIndex = index;
      }
    });

    items[activeIndex].classList.remove('active');

    let nextIndex = direction === 'next' ? activeIndex + 1 : activeIndex - 1;
    if (nextIndex < 0) {
      nextIndex = items.length - 1;
    } else if (nextIndex >= items.length) {
      nextIndex = 0; 
    }

    items[nextIndex].classList.add('active');
  }

  document.querySelector('.carousel-control.prev').addEventListener('click', () => {
    changeActiveItem('prev');
  });

  document.querySelector('.carousel-control.next').addEventListener('click', () => {
    changeActiveItem('next');
  });

  classCarousel.addEventListener('click', (event) => {
    accessoriesSelect.innerHTML = ''
    skillsSelect.innerHTML = ''
    abilitiesSelect.innerHTML = ''
    if (event.target.closest('.carousel-item')) {
      const selected = event.target.closest('.carousel-item');
      selectedClass = selected.dataset.class; 
      loadClassAbilities(selectedClass);
      loadClassSkills(selectedClass);
      loadClassAccessories(selectedClass);
    }
  });

  saveButton.addEventListener('click', async () => {
    const name = document.getElementById('name').value;
    const details = document.getElementById('details').value;
    const gender = document.getElementById('genderSelect').value;
    const race = raceSelect.value;
  
    
    const character = {
      name: name,
      details: details,
      gender: gender,
      race: race,
      class: selectedClass,
      abilities: abilitiesSelect.value,
      skills: skillsSelect.value,
      accessories: accessoriesSelect.value,
      equipment: equipmentSelect.value
    };
  
    try {
      const response = await fetch('https://6806325bca467c15be6b8c11.mockapi.io/personajes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(character),
      });
  
      if (!response.ok) {
        const errorText = await response.text(); 
        throw new Error(`Server responded with: ${errorText}`);
      }
  
      const data = await response.json();
      alert('Character saved successfully!');
      console.log('Character saved:', data);
    } catch (error) {
      console.error('Error saving character:', error);
      alert('Error saving character');
    }
  });
  

  loadClasses();
  loadRaces();
  loadEquipment();

  const addCharacter = document.querySelector('#openDialog');
  addCharacter.addEventListener('click', () => {
    const dialog = document.querySelector('#characterDialog');
    if (!dialog.open) {
      dialog.showModal();
    }
  });

  const closeDialog = document.querySelector('#closeDialog');
  closeDialog.addEventListener('click', () => {
    const dialog = document.querySelector('#characterDialog');
    dialog.close();
  });
};
