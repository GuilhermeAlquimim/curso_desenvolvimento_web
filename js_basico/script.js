// Desafio JS: Criar um código que retorna:
// nome de um aluno dentre um grupo, suas notas, conceito e aprovação.

let alunos = [`Guizão`, `Brunão`, `Bielzao`, `Pedrão`, `Giovanna`];

function pegarDuasNotas() {
    return [Math.random()*10, Math.random()*10]
}

for (let i of alunos) {
    let [nota1, nota2] = pegarDuasNotas();

    let media = (parseInt(nota1) + parseInt(nota2)) /2;

    let conceito

    if (media >= 6) {
        conceito = `Aprovado!`
    }

    else {
        conceito = `Reprovado!`
    }

    console.log(`${i} com as notas ${parseInt(nota1)} e ${parseInt(nota2)}, obteve o conceito ${media}, portanto está ${conceito}`)
}