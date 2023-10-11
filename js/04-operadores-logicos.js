"use strict";

//Requisitos da escola para aprovação
const mediaMinima = 7;
const limiteDeFaltas = 10;

//Resultados do aluno fictício
let aluno = "Jean";
let mediaFinal = 8.5;
let faltas = 11;
let resultado;

/* Operador lógico e (AND)*/

//if(mediaFinal >= mediaMinima && faltas <= limiteDeFaltas){
resultado = "aprovado";

//} else {
resultado = "reprovado";


//}

//if(mediaFinal >= mediaMinima && faltas <= limiteDeFaltas){
resultado = "aprovado";
//} else if (faltas > limiteDeFaltas){
resultado = "aprovado por faltas";
//} else {
resultado = "reprovado";


//}

if (faltas > limiteDeFaltas) {
    resultado = "reprovado por faltas";
} else if (mediaFinal >= mediaMinima) {
    resultado = "aprovado";
} else {
    resultado = "reprovado";
}

console.log(`O aluno ${aluno} está ${resultado}!`);
console.log(`Média do aluno: ${mediaFinal}`);
console.log(`Faltas do aluno : ${faltas}`);

console.log("---------------");

/* Operador lógico || (OR - OU)*/

let diaDaSemana = "segunda";
if (diaDaSemana == "sábado" || diaDaSemana == "domingo") {
    console.log("Final de semana :)");
} else {
    console.log("vá trabalhar...");
}


console.log("---------------");

/* Operador lógico ! (NOT - NÃO/NEGAÇÃO)*/

let blackFriday = true;

if (!blackFriday) {
    console.log("Preços normais...");
} else {
    console.log("Preços com desconto...");
}



