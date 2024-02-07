let resposta = document.getElementById('resposta')

function calculartemperatura(){
    let fh = Number(document.getElementById('fh').value)
    console.log(fh)

    let grausCelcius = (fh - 32) / 1.8

    resposta.innerHTML = "Valor em celcius = " + grausCelcius.toFixed(2)


}