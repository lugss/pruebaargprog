/*
document.getElementById('boton').onclick = function () {
    console.log("capturamos el evento click");
    
}

document.addEventListener('click', function() {
    console.log("hola mundo desde event listener");
    document.getElementById("demo").innerHTML = "estamos probando nuestro primer evento en JS";
});

*/

document.getElementById('boton').addEventListener('click', function() {
    console.log("hola mundo desde event listener");
    document.getElementById("demo").innerHTML = "estamos probando nuestro primer evento en JS";
});

document.getElementById('boton_color').addEventListener('click', function() {
    document.body.style.backgroundColor = "#FF0000";
});

document.getElementById('boton_default').addEventListener('click', function() {
    document.body.style.backgroundColor = "#FFFFFF";
});

document.getElementById('boton_ocultar').addEventListener('click', function() {
    document.getElementById('demo').style.display = 'none';
});

const collection = document.getElementsByClassName("prueba");
for (let i = 0; i < collection.length; i++){
    collection[i].style.backgroundColor = "green";
}