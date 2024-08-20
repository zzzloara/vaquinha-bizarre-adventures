let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
//son
let sonDaTrilha;
let sonDaColisao;
let sonDoPonto;


function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro1 = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemCarro1,imagemCarro2,imagemCarro3,imagemCarro1,imagemCarro2,imagemCarro3];
  
  sonDaTrilha = loadSound("audio/trilha.mp3");
  sonDaColisao = loadSound("audio/colidiu.mp3");
  sonDoPonto = loadSound("audio/pontos.wav");
}
