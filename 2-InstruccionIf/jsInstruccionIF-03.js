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
		mensaje = "Es menor de edad";
	}
	alert(mensaje);

}