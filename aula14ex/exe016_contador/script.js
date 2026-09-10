function contar() {
    var inicio = window.document.getElementById('txtinicio').value  
    var fim = window.document.getElementById('txtfim').value
    var passo = window.document.getElementById('txtpasso').value
    
    
    if (inicio.trim() === "" || fim.trim() === "") {
        res.innerHTML = "Impossivel contar!";
        return;
    }    

    inicio = Number(inicio)
    fim = Number(fim)
    passo = Number(passo)
    var contador = inicio

    if (passo <= 0) {
    window.alert("Passo inválido, Considerando Passo 1")
    passo = 1   
    }

    res.innerHTML = "Contando: <br>"
    
    if (contador < fim) {
    // contagem crescente 
        while (contador <= fim) {        
            res.innerHTML += (`${contador} 👉 `)
            contador += passo
        }
    } else {
    // cntagem regresiva
        while (contador >= fim) {        
            res.innerHTML += (`${contador} 👉 `)
            contador -= passo  
        }
    }    
        res.innerHTML += "🏁";
 
}