/* Estruturas de Dados

- Arrays (Vetores/Matrizes): Lista de dados indexados, sequenciais e acessíveis por um índice numérico.  

- Objetos : Lista de dados não indexado e formados por propriedades e valores */

// Arrays (os índices sempre começam no zero)

let cursos = ["Node.js", "React", "SQL", "UX/UI Design"];

console.log(cursos); // Saída direta/estruturada (APENAS NO CONSOLE)
console.log(cursos[2]); //SQL

/* Exercicio 

1) Crie uma constante chamada "dados" e coloque nela os dados de uma pessoa: nome, sobrenome, idade, telefone e cidade */

const dados = ["Hélio", "Gomes de Andrade", 54, "6666-55566", "Guarulhos"];

/* 2) Mostre no console uma mensagem contendo somente o nome e a idade da pessoa. Exemplo "Fulano tem 25 anos" */


console.log(`${dados[0]} tem ${dados[2]} anos.`)


console.log("_________________");

// Objeto 

let carro = {
  marca: "Fiat",
  modelo: "Uno com escada",
  portas: 2,
  cor: "branca",
  opcionais: ["Ar Condicionado", "Vidros elétricos", "Alarme"]
};

console.log(carro);
console.log(carro.modelo);
console.log(`Carros da ${carro.marca} tem a cor ${carro.cor}`)
console.log(`Este carro tem ${carro.opcionais[0]} e ${carro.opcionais[2]}`)


/* Exercícios 

1) Crie um novo objeto contendo informações de algo que você gosta (Filme, livro, comida, jogo, etc)

2) Mostre uma mensagem com pelo menos 2 propriedades do objeto */


let filme = {

  titulo: "Batman",
  genero: "Aventura",
  ano: 1989,
  producao: "Warner Bros",
  duracao: "120 minutos",
  opcionais: ["Robin", "Coringa", "Pinguim", "Mulher Gato"],
  idade: "maior de 14"
}

console.log(`O filme ${filme.titulo} é do ano de ${filme.ano} e não teve o personagem ${filme.opcionais[0]}.`)

console.log("____________________")

// Objeto com array e com outro objeto 

let pessoa = {
  nome: "Shiryu",
  idade: 20,
  telefones: ["11-2135-0300", "11-91234-3676"],
  medidas: {
    peso: 65,
    altura: 1.75
  }
};

console.log(`nome:${pessoa.nome}`);
console.log(`celular:${pessoa.telefones[1]}`);
console.log(`peso:${pessoa.medidas.peso}kg.`);



