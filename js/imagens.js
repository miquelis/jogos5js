let imageDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("public/imagens/estrada.png")
  imagemDoAtor = loadImage("public/imagens/ator-1.png")
  imagemCarro = loadImage("public/imagens/carro-1.png")
  imagemCarro2 = loadImage("public/imagens/carro-2.png")
  imagemCarro3 = loadImage("public/imagens/carro-3.png")

  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]

  somDaTrilha = loadSound("public/sons/trilha.mp3")
  somDaColisao = loadSound("public/sons/colidiu.mp3")
  somDoPonto = loadSound("public/sons/pontos.wav")
}
