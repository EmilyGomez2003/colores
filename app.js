const btn=document.querySelector('button');
const body=document.querySelector('body');

const colores=['blue','yellow','green','black','white'];


btn.addEventListener('click',fondo);


function fondo(){
    var indice=parseInt(Math.random()*colores.length);
     body.style.backgroundColor=colores[indice];
     var indice=parseInt(colores()*colores.length);
}
