//titulo
var canvas = document.getElementById("UgCanvas");
var ctx = canvas.getContext("2d");

ctx.font = "italic 40pt arial";
ctx.fillText("Teste de elelmentos do canva", 100, 100);


//retangulo
ctx.fillStyle="#7F7F00";
ctx.fillRect(50,150,250,200);

//circulo
ctx.fillStyle="#7F7F00";
ctx.beginPath();
ctx.arc(450,250,70,100,Math.PI*2,true);
ctx.closePath();
ctx.fill();

//linha
ctx.moveTo(600,250);
ctx.lineTo(650,150);
ctx.lineTo(750,200);
ctx.stroke();

//imagem
var img=new Image();
img.onload = function(){
ctx.drawImage(img,100,150);
};
img.src="img/img.png";
