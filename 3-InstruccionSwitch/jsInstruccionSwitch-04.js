function mostrar()
{
	var mes; 
	var mensaje;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre": 
		case "Diciembre":
			mensaje = "Tiene 31 días";
			break;
		case "Febrero":
			mensaje = "Tiene 28 días";
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "Tiene 30 días";
			break;
	}
	alert(mensaje);

}