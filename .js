idade >= 16

// fantasia, aventura, drama

// a viagem de chihiro, LIVRE, fantasia, aventura
// coraline, LIVRE, fantasia, aventura
// mulan drama, fantasia, aventura
//princesan e o sapo,fantasia, drama
// o estrenho mundo de jack, fantasia, aventura
// zootopia,fantasia,aventura
// castelo animado,aventura, fantasia

function geraRecomendacao(idade) {
    if (idade >= 10) {
        if (idade >= 14) {
            return "castelo animado";
        } else {
            return "coraline";
        }
    } else {
        return "A viagem de Chihiro";
    }
}
function draw() {
    background(220);
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia);
    text(recomendacao, width / 2, height / 2);
}
function draw() {
    background("white");
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia);

    fill(color(76, 0, 115));
    textAlign(CENTER, CENTER);
    textSize(38);
    text(recomendacao, width / 2, height / 2);
}
html, body {
  margin: 30px;
  padding: 0;
  background-color: rgb(221,233,251);
}

canvas {
  display: block;
}   
