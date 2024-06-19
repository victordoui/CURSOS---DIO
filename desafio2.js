
function calcularSaldoENivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;

    // Determina o nível com base no número de vitórias
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Mensagem final
    let mensagem = `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
    return mensagem;
}

// Entrada de dados
let vitorias = parseInt(prompt("Digite a quantidade de vitórias: "));
let derrotas = parseInt(prompt("Digite a quantidade de derrotas: "));

// Calcula o saldo e o nível
let mensagemFinal = calcularSaldoENivel(vitorias, derrotas);

// Saída
console.log(mensagemFinal);
