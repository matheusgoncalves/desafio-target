import dados from './dados.json';

interface Faturamento {
  dia: number;
valor: number;
}

const faturamentos: Faturamento[] = dados;

const filtrarDiasComFaturamento = (dados: Faturamento[]): Faturamento[] =>
  dados.filter(d => d.valor > 0);

const calcularEstatisticas = (dados: Faturamento[]) => {
  const diasComFaturamento = filtrarDiasComFaturamento(dados);
  
  const menorValor = Math.min(...diasComFaturamento.map(d => d.valor));
  const maiorValor = Math.max(...diasComFaturamento.map(d => d.valor));
  const media = diasComFaturamento.reduce((acc, d) => acc + d.valor, 0) / diasComFaturamento.length;
  const diasAcimaMedia = diasComFaturamento.filter(d => d.valor > media).length;

  return {
      menorValor,
      maiorValor,
      media,
      diasAcimaMedia
  };
};

const estatisticas = calcularEstatisticas(faturamentos);

console.log(`Menor valor de faturamento: R$ ${estatisticas.menorValor.toFixed(2)}`); // R$ 373,78
console.log(`Maior valor de faturamento: R$ ${estatisticas.maiorValor.toFixed(2)}`); // R$ 48924,24
console.log(`Média mensal: R$ ${estatisticas.media.toFixed(2)}`); // R$ 20865,37
console.log(`Número de dias acima da média: ${estatisticas.diasAcimaMedia}`); // 10 dias
