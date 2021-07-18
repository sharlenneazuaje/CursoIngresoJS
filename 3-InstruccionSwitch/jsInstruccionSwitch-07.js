function mostrar()
{
	var destino;
	var mensaje;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Bariloche":
			mensaje = "Se encuentra en el Oeste";
			break;
		case "Cataratas":
			mensaje = "Se encuentra en el Norte";
			break;
		case "Mar del plata":
			mensaje = "Se encuentra en el Este";
			break;
		case "Ushuaia":
			mensaje = "Se encuentra en el Sur";
			break;
	}
	alert(mensaje);

}