function tabuada() {
    var numero = window.document.getElementById("txtnum").value

    if (numero === "") {
        window.alert("Por favor digite um número")
        res.innerHTML = "<option>Digite um número acima</option>"
        return
    }

    numero = Number(numero)
    var contador = 1

    res.innerHTML = ""

    while (contador <= 10) {

        let item = document.createElement("option")

        item.text = `${numero} x ${contador} = ${numero * contador}`

        res.appendChild(item)

        contador++
    }
}