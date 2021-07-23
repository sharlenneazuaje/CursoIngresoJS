/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edad;
	var sexo;
	var estadoCivil;
	var sueldoBruto;
	var numeroLegajo;
	var nacionalidad;
	

	//Edad
	edad = prompt("Ingrese su edad: +18 y -90");
	edad = parseInt(edad);

	while(edad < 18 || edad > 90)
	{
		edad = prompt("Error, ingrese de nuevo su edad");
		edad = parseInt(edad);
	}

	document.getElementById("txtIdEdad").value = edad;

	//Sexo
	sexo = prompt("Ingrese su sexo: F o M");

	while(sexo != "F" && sexo != "M")
	{
		sexo = prompt("Error, ingrese de nuevo su sexo");
	}

	document.getElementById("txtIdSexo").value = sexo;


	//Estado Civil
	estadoCivil = prompt("Ingrese su estado civil: 1=soltero, 2=casado, 3=divorciado, 4=viudo");
	estadoCivil = parseInt(estadoCivil);

	while(estadoCivil < 1 || estadoCivil > 4)
	{
		estadoCivil = prompt("Ingrese de nuevo su estado civil");
		estadoCivil = parseInt(estadoCivil);
	}

	switch(estadoCivil)
	{
		case 1:
			estadoCivil = "Soltero";
			break;
		case 2: 
			estadoCivil = "Casado";
			break;
		case 3:
			estadoCivil = "Divorciado";
			break;
		case 4:
			estadoCivil = "Viudo";
			break;
	}

	document.getElementById("txtIdEstadoCivil").value = estadoCivil;


	//Sueldo bruto
	sueldoBruto = prompt("Ingrese su sueldo bruto (+8.000)")
	sueldoBruto = parseInt(sueldoBruto);

	while (sueldoBruto < 8000)
	{
		sueldoBruto = prompt("Error, ingrese de nuevo su sueldo bruto");
		sueldoBruto = parseInt(sueldoBruto);
	}

	document.getElementById("txtIdSueldo").value = sueldoBruto;


	//Número de Legajo
	numeroLegajo = prompt("Ingrese su número de legajo (4 cifras, sin ceros a la izquierda)");
	numeroLegajo = parseInt(numeroLegajo);

	while(numeroLegajo < 1000 || numeroLegajo > 9999)
	{
		numeroLegajo = prompt("Error, ingrese de nuevo su número de legajo");
		numeroLegajo = parseInt(numeroLegajo);
	}

	document.getElementById("txtIdLegajo").value = numeroLegajo;


	//Nacionalidad
	nacionalidad = prompt("Ingrese su nacionalidad: A=argentinos, E=extranjeros, N=nacionalizados");

	while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N")
	{
		nacionalidad = prompt("Error, ingrese de nuevo su nacionalidad");
	}

	if(nacionalidad == "A")
	{
		nacionalidad = "Argentino";
	}
	else
	{
		if(nacionalidad == "E")
		{
			nacionalidad = "Extranjero";
		}
		else
		{
			nacionalidad = "Nacionalizado";
		}
	}

	document.getElementById("txtIdNacionalidad").value = nacionalidad;

}
