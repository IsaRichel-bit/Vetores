const prompt = require("prompt-sync")()
//informar os valores do vetor
let vet = []
let valor = Number(prompt("Informe um número"))
let posicao = 0 // inicia na posicao 0 do vetor
while (valor != -1){
    vet[posicao] = valor
    posicao++ // prepara para o proximo valor
    valor = Number(prompt("Informe outro número. Digite -1 para encerrar"))
}


// descobre o maior e menor
let menor = vet[0] // assumo que o primeiro elemento é maior
let maior = vet[0] // assumo que o primeiro elemento é menor
for(let i = 1; i < vet.length; i++){
    if (vet[i] > maior ){
        maior = vet[i] // encontrei elemento maior
    }
    if (vet[i] < menor){
        menor = vet[i] // encontrei elemento menor
    }
}
console.log("Maior: " + maior + "Menor: " + menor)
