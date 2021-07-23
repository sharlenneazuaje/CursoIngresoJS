function mostrar()
{
	var numero;
	var sumador;
	var contador;
	var promedio;
	
	sumador = 0;
	contador = 0;


	while(contador < 5)
	{
		numero = prompt("Ingrese un número");
		numero = parseInt(numero);
		contador = contador + 1;
		sumador = sumador + numero;
	}

	promedio = sumador / contador;

	document.getElementById("txtIdSuma").value = sumador;
	document.getElementById("txtIdPromedio").value = promedio;
}