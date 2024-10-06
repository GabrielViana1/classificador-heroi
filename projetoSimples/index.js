//Estrutura de decisão
function obterNivelPorXP(xp) {
    if (xp < 1000) return 'Ferro';
    if (xp <= 2000) return 'Bronze';
    if (xp <= 5000) return 'Prata';
    if (xp <= 7000) return 'Ouro';
    if (xp <= 8000) return 'Platina';
    if (xp <= 9000) return 'Ascendente';
    if (xp <= 10000) return 'Imortal';
    return 'Radiante';
}

function classificarHerois() {
    //Variaveis para armazenar os herois e xp
    const herois = [
        { nome: 'Thor', xp: 500 },
        { nome: 'Capitão América', xp: 1500 },
        { nome: 'Homem de Ferro', xp: 3000 },
        { nome: 'Viúva Negra', xp: 6000 },
        { nome: 'Hulk', xp: 8500 },
        { nome: 'Gavião Arqueiro', xp: 9500 },
        { nome: 'Feiticeira Escarlate', xp: 10500 }
    ];

    //Laço de repetição
    for (const { nome, xp } of herois) {
        const nivel = obterNivelPorXP(xp);
         
        // Operador de concatenação
        console.log("O Herói de nome " +  nome + " está no nível de " + nivel);
    }
}

classificarHerois();
