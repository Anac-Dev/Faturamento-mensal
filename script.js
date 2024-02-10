// Objeto com os valores de faturamento mensal por estado
const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Função para calcular o total mensal de faturamento
function totalFaturamentoMensal(faturamentoPorEstado) {
    return Object.values(faturamentoPorEstado).reduce((acc, curr) => acc + curr, 0);
}

// Função para calcular o percentual de representação de cada estado
function percentualRepresentacaoPorEstado(faturamentoPorEstado) {
    const totalMensal = totalFaturamentoMensal(faturamentoPorEstado);
    const percentuais = {};
    for (const estado in faturamentoPorEstado) {
        const percentual = (faturamentoPorEstado[estado] / totalMensal) * 100;
        percentuais[estado] = percentual.toFixed(2) + "%";
    }
    return percentuais;
}

// Exibindo resultados
console.log("Percentual de representação de cada estado:");
console.log(percentualRepresentacaoPorEstado(faturamentoPorEstado));
