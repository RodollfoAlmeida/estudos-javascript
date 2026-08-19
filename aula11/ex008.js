

function calcular()  {
    var velocidade = window.document.getElementById('txtvel')
    var vel = Number(velocidade.value)

    if (vel < 60) {
        res.innerHTML = `Sua velocidade atua é de ${vel} Km/h. Boa viagem`
    } else {
         res.innerHTML = `Sua velocidade atua é de ${vel} Km/h. Voce sera multado`
    }


}
