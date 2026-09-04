function contar() {
    var inicio = window.document.getElementById('txtinicio')
    var fim = window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtpasso')
    var pulo = 
    //alert(inicio.value + fim.value + passo.value)
    while (Number(inicio.value) <= (fim.value)) {
        alert(pulo.value)
        pulo.value += inicio.value + passo.value
    }
}