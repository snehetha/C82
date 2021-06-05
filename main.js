var mouseEvent=" empty";
canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    colour=document.getElementById("colour").value;
   radius=document.getElementById("radius").value;
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if(mouseEvent="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=3;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
        ctx.stroke();
    }
    
}

function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}



