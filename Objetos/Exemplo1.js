let prod = {
    nome: "Mouse",
    descricao: "mouse recarregavel",
    preco: 75.00,
    qtde: 4
}
let prod2 = {
    nome: "Teclado Redragon",
    descricao: "teclado semi-mecanico",
    preco: 159.90,
    qtde: 3
}
// usar aspas somente em texto
console.log(prod)
console.log("Nome de prod" + prod.nome)
console.log(prod2)
console.log("Preço de prod2" + prod2.preco)

// desconto no produto
prod.preco = prod.preco - (prod.preco * 0.10)
console.log("Preço de prod com desconto: " + prod.preco)

// diminuir a quantidade de produtos
prod2.qtde = prod2.qtde - 1
console.log("Quantidade de prod2: " + prod2.qtde)
