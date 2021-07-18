function mostrar()
{
	var destino; 
	var mensaje;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje = "Hace frío";
			break;
		case "Cataratas":
		case "Mar del plata":
			mensaje = "Hace calor";
			break;
	}
	alert(mensaje);

}