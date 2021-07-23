/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numero;
	var sumaPositivos;
	var productoNegativos;
	var respuesta;

	sumaPositivos = 0;
	productoNegativos = 1;
	respuesta = "si";

	while(respuesta != "no")
	{
		numero = prompt("Ingrese un número");
		numero = parseInt(numero);

		if(numero > -1)
		{
			sumaPositivos = sumaPositivos + numero;
		}
		else
		{
			productoNegativos = productoNegativos * numero;
		}

		if(productoNegativos == 1)
		{
			productoNegativos = 0;
		}

		respuesta = prompt("Desea continuar? Responda si o no");
	}

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = productoNegativos;
	
}