//titulo
window.onload = function() {
    var canvas = document.getElementById("UgCanvas");
    var context = canvas.getContext("2d");

    context.font = "italic 40pt arial";
    context.fillText("Teste de elelmentos do canva", 100, 100);
};

//retangulo
var c=document.getElementById("UgCanvas");
var ctx=c.getContext("2d");
ctx.fillStyle="#7F7F00";
ctx.fillRect(50,150,250,200);

//circulo
var c=document.getElementById("UgCanvas");
var ctx=c.getContext("2d");
ctx.fillStyle="#7F7F00";
ctx.beginPath();
ctx.arc(450,250,50,100,Math.PI*2,true);
ctx.closePath();
ctx.fill();

//linha
var c=document.getElementById("UgCanvas");
var ctx=c.getContext("2d");
ctx.moveTo(550,250);
ctx.lineTo(650,150);
ctx.lineTo(700,250);
ctx.stroke();

//teste
