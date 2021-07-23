/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	
	var respuesta;
	var numero;
	var sumaNegativos;
	var sumaPositivos;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadCeros;
	var cantidadPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos; 
	var mensaje;

	respuesta = "si";
	sumaNegativos = 0;
	sumaPositivos = 0;
	cantidadPositivos = 0;
	cantidadNegativos = 0;
	cantidadCeros = 0;
	cantidadPares = 0;
	

	while(respuesta != "no")
	{
		numero = prompt("Ingrese un número");
		numero = parseInt(numero);

		if(numero % 2 == 0)
		{
			cantidadPares = cantidadPares + 1;
		}

		if(numero == 0)
		{
			cantidadCeros = cantidadCeros + 1;
		}

		if(numero > -1)
		{
			sumaPositivos = sumaPositivos + numero;
			cantidadPositivos = cantidadPositivos + 1;
			
		}
		else
		{
			sumaNegativos = sumaNegativos + numero;
			cantidadNegativos = cantidadNegativos + 1;
		}

		respuesta=prompt("Desea continuar? Responda si o no");
	}

	promedioPositivos = sumaPositivos / cantidadPositivos;
	promedioNegativos = sumaNegativos / cantidadNegativos;
	diferenciaPositivosNegativos = sumaPositivos + sumaNegativos;

	mensaje = "La suma de los números negativos es "+sumaNegativos+"<br>";
	mensaje = mensaje + "La suma de los números positivos es "+sumaPositivos+"<br>";
	mensaje = mensaje + "La cantidad de números positivos es "+cantidadPositivos+"<br>";
	mensaje = mensaje + "La cantidad de números negativos es "+cantidadNegativos+"<br>";
	mensaje = mensaje + "La cantidad de ceros es "+cantidadCeros+"<br>";
	mensaje = mensaje + "La cantidad de números pares es "+cantidadPares+"<br>";
	mensaje = mensaje + "El promedio de los positivos es "+promedioPositivos+"<br>";
	mensaje = mensaje + "El promedio de los negativos es "+promedioNegativos+"<br>";
	mensaje = mensaje + "La diferencia entre positivos y negativos es "+diferenciaPositivosNegativos+"<br>";

	document.write(mensaje);
	
}