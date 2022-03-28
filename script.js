function pintar(eventoDeOrigem) {
  const div = eventoDeOrigem.target;
  const selecionado = document.getElementsByClassName('selected')[0];
  const cor = selecionado.classList[1];
  div.style.backgroundColor = cor;
}

for (let x = 0; x < 25; x += 1) {
  const pixel = document.createElement('div');
  pixel.classList = 'pixel';
  pixel.addEventListener('click', pintar);
  const pai = document.getElementById('pixel-board');
  pai.appendChild(pixel);
}

const black = document.getElementsByClassName('color')[0];
const blue = document.getElementsByClassName('color')[1];
const red = document.getElementsByClassName('color')[2];
const green = document.getElementsByClassName('color')[3];

function addselected(eventoDeOrigem) {
  black.classList.remove('selected');
  blue.classList.remove('selected');
  red.classList.remove('selected');
  green.classList.remove('selected');
  const liClicada = eventoDeOrigem.target;
  liClicada.classList.add('selected');
}

black.addEventListener('click', addselected);
blue.addEventListener('click', addselected);
red.addEventListener('click', addselected);
green.addEventListener('click', addselected);

function limpar() {
  for (let x = 0; x < 25; x += 1) {
    const pixel = document.getElementsByClassName('pixel');
    pixel[x].style.backgroundColor = 'white';
  }
}

const btn = document.getElementById('clear-board');
btn.addEventListener('click', limpar);
