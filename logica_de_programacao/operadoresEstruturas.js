console.clear(); 

// Declaração de variáveis
let minRoll = 1;
let maxRoll = 20;
let minDmg = 8;
let maxDmg = 16;
let minGold = 1;
let maxGold = 4;

let dragonHp = 50;
let dragonGold = 100;

let countTurnos = 7;

console.log("----------------------------------------------------------------------------------")
console.log("Você foi escolhido para enfrenter o terrível dragão e recuperar o tesouro roubado")
console.log("O destino do reino está em suas mãos, boa sorte")

while (countTurnos > 0) {   // Estrutura de repeticção
    let roll = Math.floor(Math.random() * (maxRoll - minRoll + 1)) + minRoll;
    let rollDmg = Math.floor(Math.random() * (maxDmg - minDmg + 1)) + minDmg;
    let goldDiv = Math.floor(Math.random() * (maxGold - minGold + 1)) + minGold;
    console.log("----------------------------------------------------------------------------------")
    console.log("O valor da minha rolagem é: " + roll);

    let valorJogada = roll + 7;
    let erroCritico = valorJogada - 15;
    let critico = rollDmg * 3;

    console.log("Somando a rolagem com o modificador fica: " + valorJogada);

    if (valorJogada >= 20 && roll < 20) {
        console.log("Você acertou o Dragão! Seu dano foi: " + rollDmg);
        dragonHp -= rollDmg;
    } else if (roll == 20) {
        console.log("Você tirou um acerto crítico! Seu dano foi: " + critico);
        dragonHp -= critico;
    } else if (roll == 1) {
        console.log("Você teve uma falha crítica! Com uma penalidade de: " + erroCritico);
    }

    // Condição de Vitória
    if (dragonHp <= 0) {
        dragonGold = dragonGold / goldDiv;
        dragonGold = parseFloat(dragonGold.toFixed(2));
        console.log("Você matou o Dragão!!! Você recebeu " + dragonGold + " de ouro");
        console.log("----------------------------------------------------------------------------------")
        break;
    }

    countTurnos--;
}

// Condição de Derrota
if (dragonHp > 0) {
    console.log("Você não foi forte o bastante para matar o Dragão...");
    console.log("----------------------------------------------------------------------------------")
}