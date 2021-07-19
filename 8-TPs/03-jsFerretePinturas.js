/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaFahrenheit;
    var conversion;
    var mensaje;

    temperaturaFahrenheit = document.getElementById("txtIdTemperatura").value;
    temperaturaFahrenheit = parseInt(temperaturaFahrenheit);

    conversion = (temperaturaFahrenheit - 32) / 1.8;

    mensaje = temperaturaFahrenheit+" Fahrenheit son "+conversion+" Centígrados";

    alert(mensaje);

}

function CentigradosFahrenheit () 
{
	var temperaturaCentigrados;
    var conversion;
    var mensaje;

    temperaturaCentigrados = document.getElementById("txtIdTemperatura").value;
    temperaturaCentigrados = parseInt(temperaturaCentigrados);

    conversion = (temperaturaCentigrados * 1.8) + 32;

    mensaje = temperaturaCentigrados+" Centígrados son "+conversion+" Fahrenheit ";

    alert(mensaje);
}
