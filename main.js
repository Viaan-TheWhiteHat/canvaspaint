var mouseEvent="full";
var lastPositionof_x,lastPositionof_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="white";
widthOfLine=1;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color = document.getElementById("color").value; width_of_line = document.getElementById("width_of_line").value;
    mouseEvent="mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    currentPositionOfMouse_X=e.clientX-canvas.offsetLeft;
    currentPositionOfMouse_Y=e.clientY-canvas.offsetTop;
if(mouseEvent=="mousedown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=widthOfLine;
console.log("last position x and y coordinates are:");
console.log("x= "+lastPositionof_x+"y= "+lastPositionof_y);
ctx.moveTo(lastPositionof_x,lastPositionof_y);

console.log("currnt position x and y coordinates are:");
console.log("x= "+currentPositionOfMouse_X+"y= "+currentPositionOfMouse_Y);
ctx.lineTo(currentPositionOfMouse_X,currentPositionOfMouse_Y);

ctx.stroke();

}
lastPositionof_x=currentPositionOfMouse_X;
lastPositionof_y=currentPositionOfMouse_Y;

}












