let resposta = document.getElementById('resposta')

function contar(){

    let num = Number(document.getElementById("num").value)
    let contagem = 0
    let contadorpar = 0
    if((num > 0)&&(num <= 20)){

     
        while (contagem <= num) {
            if(contagem % 2 == 0){

            contadorpar = contadorpar + 1;
               resposta.innerHTML += "pares=" + contagem +
               "<br>"; 
            

        }
    }
    } else {
        resposta.innerHTML = "Digite um número entre 1 a 20!"
    }
}
    
    
    


