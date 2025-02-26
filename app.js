alert('Bem vindo ao...');

let amigos = []; 

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do Amigo Secreto!';
let paragrafo = document.querySelector('h2');
paragrafo.innerHTML = 'Digite o nome dos seus Amigos';

let listaAmigos = document.querySelector('#listaAmigos');

function adicionarNome() {
  let inputElement = document.querySelector('#amigo');
  let nome = inputElement.value;

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
  if (amigos.length === 0) {
    alert('Digite pelo menos um nome');
    return;
  }

  let amigoAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[amigoAleatorio];

  let resultadoElement = document.querySelector("#resultado");
  resultadoElement.textContent = `O amigo secreto é: ${amigoSorteado}`;
}

let botao = document.querySelector('.button-add');
botao.innerHTML = 'Adicionar Nome';
botao.onclick = adicionarNome;

function novoJogo() {
  amigos = [];
  atualizarListaAmigos();

  let resultadoElement = document.querySelector("#resultado");
  resultadoElement.textContent = "";

  let inputElement = document.querySelector('#amigo');
  inputElement.value = "";

  let buttonDraw = document.querySelector('.button-draw');
  buttonDraw.disabled = false;
}