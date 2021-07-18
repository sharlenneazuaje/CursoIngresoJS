function mostrar()
{
	var edad;
	var mensaje;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad > 17)
	{
		mensaje = "Es mayor de edad";
	}
	else
	{
		if(edad > 12 && edad < 18)
		{
			mensaje = "Es adolescente";
		}
		else
		{
			mensaje = "Es niño";
		}
	}
	alert(mensaje);

}