alert('Bem vindo ao...');

let amigos = []; 

function textoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
}
textoNaTela('h1', 'Jogo do Amigo Secreto');

let listaAmigos = document.querySelector('#listaAmigos');

function adicionarNome() {
  let inputElement = document.querySelector('#amigo');
  let nome = inputElement.value.trim();

  if (nome === '') {
    alert('Por favor, insira um nome.');
    return;
  }

  amigos.push(nome);
  inputElement.value = '';
  atualizarListaAmigos();
}
function atualizarListaAmigos() {
  listaAmigos.innerHTML = '';

  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement('li');
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }
}
function sortearAmigoSecreto() {
  if (amigos.length < 1) {
    alert('Sortei pelo menos 1 amigo.');
    return;
  }
  let indiceAleatorio = getIndiceAleatorio(amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];

  let resultadoElement = document.querySelector("#resultado");
  resultadoElement.textContent = `O amigo secreto é: ${amigoSorteado}`;

  amigos = [];
  atualizarListaAmigos();

  let inputElement = document.querySelector('#amigo');
  inputElement.value = "";

  let buttonDraw = document.querySelector('.button-draw');
  buttonDraw.disabled = false;
}
function novoJogo() {
    console.log('Elemento amigos:', amigos);
  console.log('Elemento listaAmigos:', listaAmigos);

    amigos = [];
    atualizarListaAmigos();
  
    let inputElement = document.querySelector('#amigo');
    inputElement.value = "";

    let resultadoElement = document.querySelector("#resultado");
    resultadoElement.textContent = "";
  
    let buttonDraw = document.querySelector('.button-draw');
    buttonDraw.disabled = false;
}
  let buttonNewGame = document.querySelector('.button-new-game');
  buttonNewGame.onclick = novoJogo;

function getIndiceAleatorio(max) {
  return Math.floor(Math.random() * max);
}
  let botao = document.querySelector('.button-add');
  botao.innerHTML = 'Adicionar Nome';
  botao.onclick = adicionarNome;

  let buttonDraw = document.querySelector('.button-draw');
  buttonDraw.onclick = sortearAmigoSecreto;
