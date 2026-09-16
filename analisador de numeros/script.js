var numero = []

function adicionar() {
    var numero = [window.document.getElementById("txtnum").value]
        numero.push(numero)

    var opcao = document.createElement("option");
    opcao.text = numero
    document.getElementById("lista").add();

    numero = Number(numero)

    if (numero === "" || numero >= 101 || numero === 0 ) {
        window.alert("Valor Invalido ou ja encontrado na lista.")
        return
    }

}