function mostrar()
{
    var nombre1;
    var nombre2;
    var peso1;
    var peso2;
    var sumaPesos;
    var promedioPesos;
    var mensaje;

    nombre1 = prompt("Ingrese el nombre de la primera persona");
    nombre2 = prompt("Ingrese el nombre de la segunda persona");

    peso1 = prompt("Ingrese el peso de la primera persona");
    peso1 = parseInt(peso1);
    peso2 = prompt("Ingrese el peso de la segunda persona");
    peso2 = parseInt(peso2);

    sumaPesos = peso1 + peso2;
    promedioPesos = sumaPesos / 2;

    mensaje = "Ustedes se llaman "+nombre1+" y "+nombre2+", pesan "+peso1+" y "+peso2+" kilos, que sumados son "+sumaPesos+" kilos, y el promedio de peso es "+promedioPesos+".";

    alert(mensaje);

}
