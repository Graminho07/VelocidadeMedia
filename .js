let arraya = []

function calcular(){
    document.getElementById('resultado').innerHTML = ''
    let deslocamento = document.getElementById('distancia').value;
    let tempo = document.getElementById('tempo').value;
    let desloFloat = parseFloat(deslocamento)
    let tempoFloat = parseFloat(tempo)
    let resultados;

    if (deslocamento && tempo){
        resultados = desloFloat / tempoFloat
        arraya.push(resultados)
        document.getElementById('velocidade').value = resultados
    }

    for (let i in arraya){
        document.getElementById('resultados').innerHTML += arraya[i] + "<br>"
    }
}

function limpar(){
    document.getElementById('distancia').value=''
    document.getElementById('tempo').value=''
    document.getElementById('velocidade').value=''
    arraya = []
}