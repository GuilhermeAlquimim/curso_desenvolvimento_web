// Medidor de Velocidade
// Velocidade máxima de até 70km
// A cada 5km acima do limite, você ganha 1 ponto na carteira

function speedTest(vel) {
  if (vel <= 70) {
    console.log(`Velocidade: ${vel}`);
    console.log("Sem problemas.");
  } else {
    const pontos = (vel - 70) / 5;

    if (pontos >= 12) {
      console.log(`Velocidade: ${vel}`);
      console.log("Carteira suspensa!");
    } else {
      console.log(`Velocidade ${vel}`);
      console.log(`Pontos na carteira: ${parseInt(pontos)}`);
    }
  }
}
speedTest(112);
