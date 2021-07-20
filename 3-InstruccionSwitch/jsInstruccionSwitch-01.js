function mostrar()
{
	var mes;
	var mensaje;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Enero":
			mensaje = "Que comiences bien el año!";
			break;
		case "Marzo":
			mensaje = "A clases!";
			break;
		case "Julio":
			mensaje = "Se vienen las vacaciones!";
			break;
		case "Diciembre":
			mensaje = "Felices fiestas!"
			break;
	}
	alert(mensaje);

}