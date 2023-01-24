/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
	var aumentoSueldo;

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);

	aumentoSueldo = (sueldo * 10 / 100) + sueldo;

	document.getElementById("txtIdResultado").value = aumentoSueldo;
}
