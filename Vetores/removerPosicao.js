const prompt = require("prompt-sync")()

let vetor = []
for(let i=0; i < 6; i++){
    vetor[i] = Number(prompt("Informe elemento do vetor"))

}
let tamanho = vetor.lenght
let posicao = Number(prompt("Qual posição será removida"))
for (let i = posicao; i < tamanho - 1; i++) {

}
tamanho = vetor.lenght - 1
console.log("Depois de Remover")

for(let i=0; i<tamanho; i++){
    console.log(vetor[i])
}
