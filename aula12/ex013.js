var agora = new Date()
var diaSem = agora.getDay()
/*
Domingo
Segunda
Terça
Quarta
Quinta
Sexta
Sabado
*/
 switch(diaSem) {
    case 0:
        console.log("Hoje é domingo")
        break
    case 1:
        console.log("Hoje é segunda-feira")
        break
    case 2:
        console.log("Hoje é Terça-feira")
        break
    case 3:
        console.log("Hoje é Quarta-feira")
        break
    case 4:
        console.log("Hoje é Quinta-Feira")
        break
    case 5:
        console.log("Hoje é Sexta-feira")
        break
    default:
        console.log("Hoje é sabado")
 }

