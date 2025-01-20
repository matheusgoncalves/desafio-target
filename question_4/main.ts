type Faturamento = {
  estado: string;
  valor: number;
};

const faturamentoMensal: Faturamento[] = [
  { estado: "SP", valor: 67836.43 },
  { estado: "RJ", valor: 36678.66 },
  { estado: "MG", valor: 29229.88 },
  { estado: "ES", valor: 27165.48 },
  { estado: "Outros", valor: 19849.53 },
];

const faturamentoTotal = faturamentoMensal.reduce((total, item) => total + item.valor, 0);

faturamentoMensal.forEach(({ estado, valor }) => {
  const percentual = (valor / faturamentoTotal) * 100;
  console.log(`${estado}: ${percentual.toFixed(2)}%`);
});
