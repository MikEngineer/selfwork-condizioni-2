let temperatura = prompt("Inserisci qui la temperatura percepita:");

if (temperatura >= 0 && temperatura <= 20) {
    console.log("Non ci sono più le mezze stagioni");
}else if (temperatura > 20 && temperatura < 30) {
    console.log("Mi dia una peroni sudata");
}else if (temperatura >= 30) {
    console.log("Lu mare, lu sole, lu ientu");
}else if (temperatura < 0 && temperatura >= -10) {
    console.log("non è tanto il freddo quanto l’umidità");
}else {
    console.log("Copriti... ancora ti raffreddi");
}

// creati intervalli corretti per evitare che il <30 assorbisse tutte le altre condizioni, dalla traccia non si evince tale necessità.

let gradi = prompt("Inserisci qui i gradi percepiti:");

switch (true) {
    case gradi >= 0 && gradi <= 20 : console.log("Non ci sono più le mezze stagioni");
        break;
    case gradi > 20 && gradi < 30 : console.log("Mi dia una peroni sudata");
        break;
    case gradi >= 30 : console.log("Lu mare, lu sole, lu ientu");
        break;
    case gradi < 0 && gradi >= -10 : console.log("non è tanto il freddo quanto l’umidità");
        break;
    default : console.log("Copriti... ancora ti raffreddi");
}

// lasciati entrambi i prompt che si susseguono per testare in contemporanea i 2 esercizi.