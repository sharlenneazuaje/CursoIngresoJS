function mostrar()
{
    var numeroUno;
    var numeroDos;
    var suma;
    var resta;
    var mensaje;

    numeroUno = prompt("Ingresar un número");
    numeroUno = parseInt(numeroUno);
    numeroDos = prompt("Igresar un número");
    numeroDos = parseInt(numeroDos);

    if(numeroUno == numeroDos)
    {
        mensaje = "Los números concatenados son "+numeroUno+""+ numeroDos;
    }
    else
    {
        if(numeroUno > numeroDos)
        {
            resta = numeroUno - numeroDos;
            mensaje = "La resta de ambos números es "+resta;

            if(resta > 10)
            {
                mensaje = "La resta es "+resta+" y superó el 10.";
            }
        }
        else
        {
            suma = numeroDos + numeroUno;
            mensaje = "La suma de ambos números es "+suma;
        }
    }
    alert(mensaje);
    
}
