const prompt = require("prompt-sync")();
let notas = [];
for (let i = 0; i < 6; i++) {
    notas [i] = Number(prompt("Informe uma nota:"));
}
let soma = 0; ""
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
let media = soma / notas.length
console.log("A soma das notas é:" + soma);
console.log("A média das notas é:" + media);