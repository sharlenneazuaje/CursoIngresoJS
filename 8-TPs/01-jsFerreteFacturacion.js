/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
    var precio2;
    var precio3;
    var suma;
    var mensaje;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1 = parseInt(precio1);
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2 = parseInt(precio2);
    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 =  parseInt(precio3);

    suma = precio1 + precio2 + precio3;

    mensaje = "La suma es "+suma;

    alert(mensaje);

}
function Promedio () 
{
    var precio1;
    var precio2;
    var precio3;
    var suma;
    var promedio;
    var mensaje;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1 = parseInt(precio1);
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2 = parseInt(precio2);
    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 =  parseInt(precio3);

    suma = precio1 + precio2 + precio3;
    promedio = suma / 3;

    mensaje = "El promedio es "+promedio;

    alert(mensaje);
	
}
function PrecioFinal () 
{
    var precio1;
    var precio2;
    var precio3;
    var suma;
    var precioFinal;
    var mensaje;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1 = parseInt(precio1);
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2 = parseInt(precio2);
    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 =  parseInt(precio3);

    suma = precio1 + precio2 + precio3;
    precioFinal = suma + suma * 21 / 100;

    mensaje = "El precio final con IVA 21% es "+precioFinal;

    alert(mensaje);
	
}