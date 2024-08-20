
function setup() {
  createCanvas(500, 400);
  sonDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();  
  voltaPosicaoInicialdoCarro();
  verificaColisao();
  incluiPontos();
  marcaPontos();

}





