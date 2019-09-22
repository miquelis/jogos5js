
function setup() {

  let tm = windowWidth * 0.8
  createCanvas(tm, windowHeight);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
  fontText();

}

function windowResized() {
  let tm = windowWidth * 0.8
  resizeCanvas(tm, windowHeight);
}



