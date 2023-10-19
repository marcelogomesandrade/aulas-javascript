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

const subtitulo_dom = document.getElementById("subtitulo_dom");
const desenho = document.querySelector("figure");
const descricao = document.querySelector("descricao");

console.log(desenho);
console.log(descricao);

const varioselementos = document.querySelectorAll("h3,a");
console.log(varioselementos);

// Modificando o DOM


const titulo = document.querySelector("h1");
titulo.textContent = "Olá Javascript!";
titulo.style.textAlign = "center"; //CSS inline via JS 
titulo.classList.add("destaque");// Classe CSS via JS

const linksReferencias = document.querySelectorAll("ul li a");

console.log(linksReferencias);

let quantidadeDeLinks = linksReferencias.length;

///for(let i = 0; i < quantidadeDeLinks; i++) {
//  link.setAttribute ("target","_blank");
//}

for (let link of linksReferencias) {
    link.setAttribute("target", "_blank");


}

/*  Manipulando Eventos / Ações*/

const pagina = document.querySelector("body");
const exemplo1 = document.querySelector("#exemplo1");
const mensagem = document.querySelector("#mensagem");

const reprodutorAudio = document.querySelector("#reprodutor-audio");
const imageMeme = document.querySelector("#imagem-meme");

//Ouvinte de evento 
exemplo1.addEventListener("click", function () {

    pagina.style.fontFamily = "Verdana";
    mensagem.textContent = "Fonte alterada!";
    mensagem.style.backgroundColor = "yellow";

    //Executamos o aúdio com play

    reprodutorAudio.play();

    //Removemos o atributo hidden (portando a imagem aparecer)

    imageMeme.removeAttribute("hidden");

    ;
});

// Exemplo modo noturno 

const botao = document.querySelector("#noturno");
botao.addEventListener("click", gerenciarModoNoturno);

function gerenciarModoNoturno() {

    pagina.classList.toggle("modo-noturno");
}

