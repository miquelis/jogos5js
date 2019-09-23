
function setup() {

  let tm = windowWidth * 0.8
  let at = windowHeight * 0.63
  createCanvas(tm, at);
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
  let at = windowHeight * 0.63
  resizeCanvas(tm, at);
}



