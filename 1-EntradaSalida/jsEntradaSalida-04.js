/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var dato;

	dato = prompt("Ingrese un dato");

	document.getElementById("txtIdNombre").value = dato;

}

