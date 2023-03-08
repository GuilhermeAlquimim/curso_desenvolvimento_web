// Carne: 400g por pessoa. A partir de 6h: 650g por pessoa.
// Cerveja: 1200ml por pessoa. A partir de 6h, 2000ml
// Bebidas: 1000ml por pessoa. A partir de 6h, 1500ml
// Crianças equivalem a 1/2 de uma pessoa.

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

function calcular() {
  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let carneTotal;
  let bebidas;
  let cerveja;

  if (duracao >= 6) {
    carneTotal = adultos * 650 + criancas * (650 / 2);
    bebidas = adultos * 1500 + (criancas / 2) * 1500;
    cerveja = adultos * 2000;
  } else {
    carneTotal = adultos * 400 + criancas * (400 / 2);
    bebidas = adultos * 1000 + (criancas / 2) * 1000;
    cerveja = adultos * 1200;
  }

  resultado.innerHTML = `<p>${carneTotal / 1000}kg de carne.</p>`;
  resultado.innerHTML += `<p>${cerveja / 1000} litros de cerveja.</p>`;
  resultado.innerHTML += `<p>${bebidas / 1000} litros de bebidas.</p>`;
}
