/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo;
	var descuentoSueldo;

	sueldo = document.getElementById("txtIdImporte").value;
	sueldo = parseInt(sueldo);

	descuentoSueldo = sueldo - (sueldo * 25 / 100);

	document.getElementById("txtIdResultado").value = descuentoSueldo;
}
