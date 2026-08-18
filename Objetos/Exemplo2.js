let vetor = [ 
{
    nome: "Mouse",
    descricao: "mouse recarregavel",
    preco: 75.00,
    qtde: 4
},
{
    nome: "Teclado Redragon",
    descricao: "teclado semi-mecanico",
    preco: 159.90,
    qtde: 3
}
] 
// usar aspas somente em texto
console.log(vetor)
console.log("Nome" + vetor[0].nome)
console.log(vetor[0])
console.log("Preço" + vetor[1].preco)

// desconto no produto
vetor[0].preco = vetor[0].preco - (vetor[0].preco * 0.10)

// diminuir a quantidade de produtos
vetor[1].qtde = vetor[1].qtde - 1 

console.log(vetor)
