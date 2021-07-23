/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	
	var numero;
	var maximo;
	var minimo;
	var respuesta;
	var contador;

	contador = 0;
	respuesta = "si";


	while(respuesta != "no")
	{
		numero = prompt("Ingrese un número");
		numero = parseInt(numero);

		if(contador == 0)
		{
			maximo = numero;
			minimo = numero;
			contador = contador + 1;
		}
		else
		{
			if(maximo < numero)
			{
				maximo = numero;
			}
			else
			{
				if(minimo > numero)
				{
					minimo = numero;
				}
			}
		}

		respuesta=prompt("Desea continuar? Responda si o no");
	}

	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;
}