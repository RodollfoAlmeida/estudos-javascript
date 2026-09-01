let pizza = 13;

function comerFatia() {
    pizza--; // Reduz 1 fatia da pizza
    console.log(`Sobraram ${pizza} fatias.`);
}

function comerPizza() {
    while (pizza > 0) {
        comerFatia();
    }
}

// Executa a função para comer a pizza
comerPizza();

// Agora o alert mostrará 0, pois todas as fatias foram comidas
alert(`Fim da pizza! Fatias restantes: ${pizza}`);