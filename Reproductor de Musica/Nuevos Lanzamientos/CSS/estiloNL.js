// Temporizador de New Release
var tiempototal= 1;
var intervalo

function restar (){
    if(tiempototal==0){
        document.getElementById("bloque").style.display = "none";
        clearInterval(intervalo);
    } else {
        tiempototal--;
    }
}
function activar (){
    intervalo= setInterval(restar,1000);
}
