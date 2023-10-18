"use strict";

/* Funções de seleção no Dom 

- getElementsById()

Selecione UM elemento através de um id 

- querySelector()

Selecione UM elemento através de um seletor

- querySelectorAll()

Selecione VÁRIOS elementos através de um/vários seletor(es)/*

/* Exemplos*/

// Acessando o DOM

const subtitulo_dom = document.getElementById ("subtitulo_dom");
const desenho = document.querySelector ("figure");
const descricao = document.querySelector ("descricao");

console.log (desenho);
console.log (descricao);

const varioselementos = document.querySelectorAll("h3,a");
console.log(varioselementos);

// Modificando o DOM


const titulo = document.querySelector ("h1");
titulo.textContent = "Olá Javascript!";
titulo.style.textAlign = "center"; //CSS inline via JS 
titulo.classList.add("destaque");// Classe CSS via JS

const linksReferencias = document.querySelectorAll ("ul li a");

console.log(linksReferencias);

let quantidadeDeLinks = linksReferencias.length;

for(let i = 0; i < quantidadeDeLinks; i++) {
    linksReferencias[i].setAttribute ("target","_blank");
}



