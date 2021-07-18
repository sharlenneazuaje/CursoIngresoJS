function mostrar()
{
	var estacion;
	var destino; 
	var porcentaje;
	var precioBase;
	var precioFinal;

	
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	precioBase = 15000;

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					porcentaje = +20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = -10;
					break;
				case "Mar del plata": 
					porcentaje = -20;
					break;
			}
			break;
		
		case "Verano": 
			switch(destino)
			{
				case "Bariloche":
					porcentaje = -20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = +10;
					break;
				case "Mar del plata":
					porcentaje = +20;
					break;
			}
			break;

		default:
			switch(destino)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					porcentaje = +10;
					break;
				case "Cordoba":
					porcentaje = 0;
					break;
			}
			break;
	}

	precioFinal = precioBase + precioBase * porcentaje / 100; 
	alert("El precio final es "+precioFinal+"$");

}