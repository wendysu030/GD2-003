var canvas;
var ctx;
var w=1000;
var h=600;

var object={
    "x1":w/3,
    "y1":h/5,
    "changeInX1":100,
    "changeInY1":100,
    "c1":48,
    "a1":200,
    "rand1":2,
}

var x1=w/3;
var y1=h/5;
var changeInX1=100;
var changeInY1=100;
var c1=48;
var a1=200;
var rand1=2;






setUpCanvas();

drawAsSquare(object);






function drawAsSquare(o){
    for(var i=0;i<16;i++){
        
        uniqueShape(o.x1,o.y1,o.c1,o.a1);
        o.x1=o.x1+o.changeInX1;
        o.changeInX1=o.changeInX1+rand(o.rand1);
        if(o.x1>700){
            console.log("ok");
            o.x1=w/3;
            o.y1=o.y1+o.changeInY1;
        }
    }
}


function rand(r){
    return Math.random()*r
}

function uniqueShape(x,y,c,a){
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x-30,y+100);
    ctx.lineTo(x+50,y+30);
    ctx.lineTo(x-50,y+30);
    ctx.lineTo(x+30,y+100);
    ctx.lineTo(x,y);
    ctx.fillStyle="hsl("+c+", 100%, 65%,"+a+")";
    ctx.fill()


}

function setUpCanvas(){
    canvas=document.querySelector("#myCanvas")
    ctx=canvas.getContext("2d");
    canvas.width=w;
    canvas.height=h;
    canvas.style.border="5px dashed purple"
}






console.log("module 5")