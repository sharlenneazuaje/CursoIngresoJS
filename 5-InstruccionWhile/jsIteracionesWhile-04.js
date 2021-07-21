/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("Ingrese un número entre 0 y 9");
	numeroIngresado = parseInt(numeroIngresado);

	while(numeroIngresado > 9 || numeroIngresado < 0)
	{
		numeroIngresado = prompt("Error, reingrese un número entre 0 y 9");
		numeroIngresado = parseInt(numeroIngresado);
	}

	document.getElementById("txtIdNumero").value = numeroIngresado;
	
}