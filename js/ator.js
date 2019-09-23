//Ator
let xAtor = 85;
let yAtor = 366;
let comprimentoAtor = 25;
let alturaAtor = 25;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
 image(imagemDoAtor, xAtor, yAtor, comprimentoAtor, alturaAtor);
}

function movimentaAtor(){
  if (keyIsDown (UP_ARROW)){
    yAtor -= 3
  }
   if (keyIsDown (DOWN_ARROW)){
    moverParaBaixo()
  }
}

function moverParaBaixo(){
  if(yAtor < 366) yAtor += 3
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15 )
    if(colisao){   
      somDaColisao.play();
      removePontos()
     voltaAtorPosicaoInicial()
    }    
  }
}

function voltaAtorPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textSize(25)
  fill(color("#ce4444"))
  textAlign(CENTER);
  text(meusPontos, 95, 27);
}

function marcaPonto(){
  if(yAtor < 15){
    somDoPonto.play();
    meusPontos += 1;
    voltaAtorPosicaoInicial();
  }
}

function removePontos(){
  if(meusPontos > 0){
    meusPontos -= 1;
  }else{
    meusPontos = 0
  }
}