"use strict";

//Requisitos da escola para aprovação
const mediaMinima= 7;
const limiteDeFaltas= 10;

//Resultados do aluno fictício
let aluno= "Jean";
let mediaFinal= 8.5;
let faltas= 30;
let resultado ;

/* Operador lógico e (AND)*/

//if(mediaFinal >= mediaMinima && faltas <= limiteDeFaltas){
    resultado = "aprovado";

//} else {
    resultado = "reprovado";


//}

if(mediaFinal >= mediaMinima && faltas <= limiteDeFaltas){
    resultado = "aprovado";
} else if (faltas > limiteDeFaltas){
    resultado = "reprovado por faltas";
} else {
    resultado = "reprovado";
    

}

console.log(`O aluno ${aluno} está ${resultado}!`);
console.log(`Média do aluno: ${mediaFinal}`);
console.log(`Faltas do aluno : ${faltas}`);






