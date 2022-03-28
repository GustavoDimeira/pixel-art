
function pintar (eventoDeOrigem) {
  let div = eventoDeOrigem.target;
  let selecionado = document.getElementsByClassName('selected')[0];
  div.style.backgroundColor = selecionado.classList[1];
}

for (let x = 0; x < 25; x += 1) {
let pixel = document.createElement('div');
pixel.classList = 'pixel';
pixel.addEventListener('click', pintar)
let pai = document.getElementById('pixel-board');
pai.appendChild(pixel);
}

let black = document.getElementsByClassName('color')[0];
let blue = document.getElementsByClassName('color')[1];
let red = document.getElementsByClassName('color')[2];
let green = document.getElementsByClassName('color')[3];

function addselected (eventoDeOrigem) {
  black.classList.remove('selected');
  blue.classList.remove('selected');
  red.classList.remove('selected');
  green.classList.remove('selected');
  let liClicada = eventoDeOrigem.target;
  liClicada.classList.add('selected');
 }

black.addEventListener('click', addselected);
blue.addEventListener('click', addselected);
red.addEventListener('click', addselected);
green.addEventListener('click', addselected);
