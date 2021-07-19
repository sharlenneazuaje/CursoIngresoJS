/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
     var largo;
     var ancho;
     var perimetro;
     var cantidadAlambre;
     var mensaje;

     largo = document.getElementById("txtIdLargo").value;
     largo = parseInt(largo);
     ancho = document.getElementById("txtIdAncho").value;
     ancho = parseInt(ancho);

     perimetro = 2 * (largo + ancho);
     cantidadAlambre = perimetro * 3;

     mensaje = "La cantidad de Alambre a utilizar es: "+cantidadAlambre;

     alert(mensaje);
}
function Circulo () 
{
	var radio;
    var perimetro;
    var cantidadAlambre;
    var mensaje;
    const PI = 3.14;

    radio = document.getElementById("txtIdRadio").value;
    radio = parseInt(radio);

    perimetro = radio * 2 * PI;
    cantidadAlambre = perimetro * 3;

    mensaje = "La cantidad de Alambre a utilizar es: "+cantidadAlambre;

    alert(mensaje);
}
function Materiales () 
{
	var largo;
    var ancho;
    var area; 
    var bolsasCemento;
    var bolsasCal;
    var mensaje; 
    
    largo = document.getElementById("txtIdLargo").value;
    largo = parseInt(largo);
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseInt(ancho);

    area = largo * ancho;
    bolsasCemento = area * 2;
    bolsasCal = area * 3;

    mensaje = "Se necesitan "+bolsasCemento+" bolsas de Cemento y "+bolsasCal+" bolsas de Cal";

    alert(mensaje);
}