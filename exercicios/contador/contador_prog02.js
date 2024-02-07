let resposta = document.getElementById("resposta");

function contar(){
    let num = Number(document.getElementById('num').value)
    let contagem = 0

    do{
        contagem += 1 //contagem = contagem + 1
        
        resposta.innerHTML += "valor = " + contagem + "<br>"

    }while(contagem < num)


}