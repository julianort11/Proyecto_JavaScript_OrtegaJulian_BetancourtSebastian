const BASE_URL = "https://www.dnd5eapi.co/api";

export function fetchClasses() {
  return fetch(`${BASE_URL}/classes`).then(respu => respu.json());
}

export function fetchRaces() {
  return fetch(`${BASE_URL}/races`).then(respu => respu.json());
}
// no
export function fetchArmors() {
  return fetch(`${BASE_URL}/equipment-categories/armor`).then(respu => respu.json());
}
// no
export function fetchWeapons() {
  return fetch(`${BASE_URL}/equipment-categories/weapon`).then(respu => respu.json());
}

export function fetchFeatures() {
  return fetch(`${BASE_URL}/traits`).then(respu => respu.json());
}