/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("Ingrese f ó m");

	while(sexoIngresado != "f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt("Error, reingrese f ó m");
	}

	document.getElementById("txtIdSexo").value = sexoIngresado;

}