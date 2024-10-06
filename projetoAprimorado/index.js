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

document.getElementById('heroiForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const xp = parseInt(document.getElementById('xp').value, 10);
    const nivel = obterNivelPorXP(xp);

    const resultado = `O Herói de nome ${nome} está no nível de ${nivel}`;
    document.getElementById('resultado').innerText = resultado;
});