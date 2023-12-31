"use strict"

/* Sobre Funções 

Funções são blocos de código que podem ser executados e reaproveitados em praticamente qualquer lugar de uma aplicação/site 

Usar funções também é benefício do ponto de vista de organização de código

O JS já possui centenas de funções prontas, exemplos:

log ()
alert ()
prompt ()
toFixed ()
entre outras 



*/


/* Como escrever funções no JS?*/

// Forma 1: função anômina
const exemplo1 = function () {
    console.log("função anômina");
};

// Forma 2: função nomeada /declarada
function exemplo2() {

    console.log("função nomeada/declarada");
}

// Forma 3: arrow function 

const exemplo3 = () => {
    console.log("arrow function");
};

// Chamada de função para excução 

exemplo1();
exemplo2();
exemplo3();

// Função com parâmetros e retorno de dados/resultados
function somar(valor1, valor2) {
    return valor1 + valor2;

}
// Chamamos a função diversas vezes e passando valores diferentes como parâmetros 
console.log(somar(10, 20));
console.log(somar(15, 50));
console.log(somar(30, 47.8));


/* Formatação de valores em Reais */


let preco = 1000;
let desconto = preco * 0.10; //10%
let precoFinal = preco - desconto;

function formatarPreco(valor) {
    let opcoes = {
        style: "currency",
        currency: "BRL"

    };
    return valor.toLocaleString("pt-br", opcoes);
}

console.log(`preco: ${formatarPreco(preco)}`);
console.log(`desconto: ${formatarPreco(desconto)}`);
console.log(`Preço Final ${formatarPreco(precoFinal)}`);


console.log (`------------`)

// Sobre Arrow Function 

// Sintaxe moderno para funções no JS, bastante usada por bibliotecas, Frameworks (React,Angular,Vue e etc.)

// A sintaxe geral é:
// const algumNome = () ==> {};
// No entanto, esta sintaxe pode ser mais concisa. 

//function dobra (){

   // return valor *2;

//}

//versão 2 (Arrow Function)


//
//const dobra = (valor)=>{
 //   return valor *2
//};

// Versão 3 (Arrow Function com retorno implícito)

const dobra = valor => valor *2;

//Chamadas 
console.log(dobra(10));
console.log(dobra(1325));
console.log(dobra(55.47));


