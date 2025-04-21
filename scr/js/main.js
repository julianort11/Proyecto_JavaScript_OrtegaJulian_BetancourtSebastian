import { initTransition } from './transition.js';

const video = document.getElementById("video__background");
const btnSonido = document.getElementById("actSond");

btnSonido.addEventListener("click", () => {
  video.muted = false;
  video.volume = 1;
  video.play();
  btnSonido.style.display = "none";
});

document.addEventListener('DOMContentLoaded', () => {
  initTransition('.button__game'); 
});
