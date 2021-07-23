/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var numero;
	var contador;
	var acumulador;
	var promedio;
	var respuesta;

	contador = 0;
	acumulador = 0;
	respuesta = "si";

	while(respuesta != "no")
	{
		numero = prompt("Ingrese un número");
		numero = parseInt(numero);
		contador = contador + 1;
		acumulador = acumulador + numero;

		respuesta = prompt("Desea continuar? Responda si o no");
	}

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

}