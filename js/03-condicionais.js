/* Estruturas de Controle Condicional 

Comando que permitem analisar uma ou mais condições. 
E a partir do resultado desta análise (verdadeiro ou falso), o programa pode executar ações diferentes.

Comandos mais comuns : if (se), else (senão), else if (senão, se)*/

let usuario = prompt ("Qual é o seu nome?");
let idade = prompt("Qual é a sua idade?");
let mensagem; //indefenida

// Verificar a idde e determinar se é menor ou maior 

if (idade >= 18) { 
    mensagem= "maior";
    

} else {
    mensagem= "menor";
}

// Apresentando os resultados APOS a condicional
console.log(`${usuario} é ${mensagem} de idade!`);

alert(`${usuario} é ${mensagem} de idade!`);

