"use strict";
// Comandos de Repetição 

//Instruções para realizar ações para uma quantidade especifica de vezes. 

// Comandos tradicionais : 

// - while -> ENQUANTO 

// - do/while -> FAÇA/ENQUANTO

// - for -> PARA 


/* OBS.: normalmente o loop é controlado através de uma variável contadora.*/

//let contador = 1;
//while (contador <=5 ){ 
//console.log (`valor de contador: ${contador}`);
//contador++;// ++ incremento 

//}

// Exemplo do/while (FAÇA/ENQUANTO)

//let i = 1;
//do {
// console.log(`Contador vale : ${i}`);
//i++;

//} while (i <= 3)

// obs. normalmente variável de controle de repetição são chamadas de i, j, ou k. Exemplo 'contador' pode mudar pela i, por exemplo.

// EXEMPLO FOR (PARA)
//for ( let i= 1; i<=10; i++){
//console.log(`i Vale ${i}`);

//}

/* Loop com array*/

let clientes = ["Gallin", "Martin", "Hughes", "MC Hammer", "Madonna", "Preta Gil", "Pink"];

//"Cache/Memória" da quantidade de elementos do array

let quantidade = clientes.length;

for (let i = 0; i < quantidade; i++) {
    console.log(`Cliente: ${clientes[i]}`);


}

console.log('--------');

// for/of --> para arrays 

let bandas = ["Slayer", "Dream Theater", "Nightwish"];

//para BANDA DE BANDAS
for (let banda of bandas) {
    console.log(banda);
}



// for/in --> para objetos 

let livro = {
    titulo: "HTML5",
    autor: "Maujor",
    ano: 2016,
    editora: "Novatec",
    edição: 3,
    site: "http://maujor.com"
};

// para PROPRIEDADES dentro/em livro 

for (let propriedades in livro) {
    //Acessar APENAS a propriedades

    //console.log(dados);

    //Acessar VALOR de cada propriedades 

    //console.log(livro[dados])

    console.log(`${propriedades} -> ${livro[propriedades]} `)


}





