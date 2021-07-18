function mostrar()
{
	var nota;
	var mensaje;

	nota = Math.floor(Math.random() * 10) + 1;

	if(nota > 8)
	{
		mensaje = "EXCELENTE";
	}
	else
	{
		if(nota > 4)
		{
			mensaje = "APROBÓ";
		}
		else
		{
			mensaje = "Vamos, la próxima se puede!";
		}
	}

	alert("La nota que obtuvo: "+nota+". "+mensaje+".");

}