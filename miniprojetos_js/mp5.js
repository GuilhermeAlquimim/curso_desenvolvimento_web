// Receber uma quantidade de valores para avaliar
// Definir cada valor como ímpar ou par

function exibirTipo(num) {
  for (i = 0; i <= num; i++) {
    if (i % 2 === 1) {
      console.log(`${i} Ímpar`);
    } else {
      console.log(`${i} Par`);
    }
  }
}

exibirTipo(12);
