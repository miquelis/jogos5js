 //carro

let yCarros = [40, 96, 146, 207, 260, 316];
let velocidadeCarros =  [0.5, 1.0, 2.5, 1.5, 3.5, 4.5];
let comprimentoCarro = 50;
let alturaCarro = 40;


function mostraCarro(){ 
  
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i],  xCarros[i], yCarros[i], comprimentoCarro, alturaCarro)      
   } 
 }
 
 function movimentaCarro(){
   for (let i = 0; i < xCarros.length; i++) {
      xCarros[i] -= velocidadeCarros[i];     
   }  
 }

 function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < xCarros.length; i++) {
    if (passouTodaTela(xCarros[i])){
      xCarros[i] = wid; 
    } 
  } 
 }

 function passouTodaTela(xCarro){
  return xCarro < -50;
 }
 
function mousePressed (){
  for (let i = 0; i < xCarros.length; i++) {
    let compriCarro = xCarros[i] + comprimentoCarro     
    let altCarro = yCarros[i] + alturaCarro  

    if((mouseX > xCarros[i] && mouseX < compriCarro) &&(mouseY > yCarros[i] && mouseY < altCarro)){
      console.log("oi") 
    }
  }
}

function fontText(){
  text("word", 250, 25, 70, 30);  
  fill(0, 102, 153);

}