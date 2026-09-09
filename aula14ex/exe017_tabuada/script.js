function tabuada() {

var numero = window.document.getElementById("txtnum").value


if (numero === "") {
    window.alert("Por favor digite um número")
    res.value = "Digite um número acima"
    return
}

var numero = Number(numero)
var contador = 1

res.value = ""

while (contador <= 10) {
     res.value += `${numero} x ${contador} = ${numero * contador}\n`
     contador++
}

}
