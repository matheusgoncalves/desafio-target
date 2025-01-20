function inverterString(str: string): string {
  return str.split('').reverse().join('');
}

const entrada = "TypeScript";
const resultado = inverterString(entrada);

console.log(`Entrada: ${entrada}`);
console.log(`Invertida: ${resultado}`);
