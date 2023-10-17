"use strict";

/*  */

 

const alunos = [

{id: 1,
nome: "Joazinho" ,},

{id: 2,
nome: "mariazinha" ,} ,
    
{id: 3,
nome: "Giuseppezinho" ,}
]


/*   */



let quantidadeAlunos = alunos.length;

for (let i = 0; i < quantidadeAlunos; i++) {
    console.log(`Aluno: ${alunos[i].nome}`);}


  console.log (`---------`)  

  let i =0;
  while (i < quantidadeAlunos){
    console.log(alunos[i].nome);
    i++;

  }

