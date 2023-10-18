"use strict"

let valorEmDolares = 1000;
let valorCotacao = 5.03;

function converterMoeda(valor, cotação) {
    return valor * cotação;
}
;
let valorConvertido = converterMoeda(valorCotacao, valorEmDolares);



console.log(formatarMoeda(valorEmDolares, "en","USD"));
console.log(formatarMoeda(valorConvertido, "pt-br","BRL"));


function formatarMoeda(valor,local,moeda) {
    let opcoes = {
        style: "currency",
            currency: moeda


};

    return valor.toLocaleString(local, opcoes)  

}












