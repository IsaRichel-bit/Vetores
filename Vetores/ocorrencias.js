const prompt = require ("prompt-sync")()
    // informe nome da cidade
    let cidade = prompt("Informe nome da cidade")
    // informe a vogal
    let vogal = prompt("Informe a vogal de seu interesse")
    //percorre e conta
    let contador = 0
    for(let i=0;i<cidade.lenght;i++){
        if (cidade[i] == vogal){
            contador++
    }
}
// mostra o resultado
if (contador == 0){
    console.log("Nenhuma ocorrencia")
}
else {
    console.log( contador + " ocorrencias")
}