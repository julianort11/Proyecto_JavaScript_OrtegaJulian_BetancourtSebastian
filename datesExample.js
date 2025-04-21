const characters = [
  {
    name: "Drake",
    race: {
      name: "Humano",
      subrace: "Humano Estándar",
      traits: ["Versatilidad"]
    },
    class: {
      name: "Barbarian",
      level: 5,
      description: "A mighty warrior who relies on brute strength.",
      subclasses: [
        {
          name: "Berserker",
          description: "A savage warrior, specializing in reckless combat."
        },
        {
          name: "Storm Herald",
          description: "A barbarian who draws power from the elements."
        }
      ],
      features: ["Rage", "Unarmored Defense", "Reckless Attack"],
      resources: { 
        rage: 3,
        hitDie: "1d12"
      }
    },
    attributes: {
      strength: 16,
      dexterity: 12,
      constitution: 14,
      intelligence: 8,
      wisdom: 10,
      charisma: 13
    },
    skills: {
      athletics: 5,
      acrobatics: 2,
      perception: 4,
      survival: 6
    },
    hp: 45,
    equipment: [
      "Battleaxe", 
      "Shield", 
      "Explorer's Pack"
    ],
    spells: [],  // Empty for Barbarian (no spells), but would list spells if applicable
    feats: ["Tough", "Great Weapon Master"],
    monsters: ["Ogre", "Goblin", "Troll"], // List of monsters encountered
    background: "Drake comes from a small tribe in the north, where he learned to survive through strength and the wilderness.",
    traits: ["Brave", "Loyal"],
    norms: ["Never back down from a fight", "Help those in need"],
    imageSrc: "/assets/img/barbaro.png",
    saveLink: "#"
  },





  {
    name: "Aria",
    race: {
      name: "Elfo",
      subrace: "Elfo Alto",
      traits: ["Visión en la oscuridad", "Trance"]
    },
    class: {
      name: "Wizard",
      level: 3,
      description: "A master of arcane magic.",
      subclasses: [
        {
          name: "Evocation",
          description: "A wizard who specializes in destructive magic."
        },
        {
          name: "Illusion",
          description: "A wizard who creates illusions to deceive enemies."
        }
      ],
      features: ["Arcane Recovery", "Spellcasting", "Wizard's Familiar"],
      resources: { 
        spellSlots: [4, 2, 1], 
        hitDie: "1d6"
      }
    },
    attributes: {
      strength: 8,
      dexterity: 14,
      constitution: 10,
      intelligence: 18,
      wisdom: 12,
      charisma: 10
    },
    skills: {
      arcana: 7,
      history: 6,
      perception: 4,
      stealth: 3
    },
    hp: 18,
    equipment: [
      "Wand of Magic", 
      "Robes", 
      "Spellbook"
    ],
    spells: [
      "Fireball",
      "Shield",
      "Mage Armor"
    ],
    feats: ["Spell Sniper", "Elemental Adept"],
    monsters: ["Dragon", "Giant Spider", "Skeleton"],
    background: "Aria was raised in the magical forests of the Elven kingdom, where she learned to manipulate magic from a young age.",
    traits: ["Curious", "Intelligent"],
    norms: ["Always seek knowledge", "Trust in the arcane arts"],
    imageSrc: "/assets/img/wizard.png",
    saveLink: "#"
  }
];
