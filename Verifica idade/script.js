function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
   if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente')
   } else {
    var fsex = window.document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    //res.innerHTML = `Idade calculada: ${idade} ano(s)`
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        genero = 'Homem'  
        if (idade >= 0 && idade < 10) {
            // Criança
            img.setAttribute('src', 'bebe-masculino.jpg')
        } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'criança-masculino.jpg')
        } else {
            // idoso
            img.setAttribute('src', 'adulto-masculino.jpg')
        }      
    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            // Criança
            img.setAttribute('src', 'bebe-feminino.jpg')
        } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'criança-feminino.jpg')
        } else {
            // idoso
            img.setAttribute('src', 'adulto-feminino.jpg')
        } 
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
    
   }
}
  