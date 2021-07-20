function mostrar()
{
    var continente;
    var cantidadDías;
    var metodoPago;
    var precioBaseDia;
    var porcentaje;
    var mensaje;
    var precioInicial;
    var precioFinal;

    continente = document.getElementById("Marca").value;

    cantidadDías = prompt("Ingresar la cantidad de días de viaje");
    cantidadDías = parseInt(cantidadDías);
    metodoPago = prompt("Ingresar el método de pago","débito , mercadoPago, efectivo, etc.");

    precioBaseDia = 100;

    switch(continente)
    {
        case "América":
            switch(metodoPago)
            {
                case "débito":
                    porcentaje = -60;
                    break;
                default:
                    porcentaje = -50;
                    break;
            }
            break;
        
        case "África":
            switch(metodoPago)
            {
                case "mercadoPago":
                case "efectivo":
                    porcentaje = -75;
                    break;
                default:
                    porcentaje = -60;
                    break;
            }
            break;
        
        case "Europa":
            switch(metodoPago)
            {
                case "débito":
                    porcentaje = -35;
                    break;
                case "mercadoPago":
                    porcentaje = -30;
                    break;
                case "efectivo": //el "otro" medio de pago
                    porcentaje = -25;
                    break;
                default: // Pago con crédito, por ejemplo
                    porcentaje = -20;
                    break;
            }
            break;

        default:
            switch(metodoPago)
            {
                default:
                    porcentaje = +20;
                    break;
            }
            break;
    }

    precioInicial= precioBaseDia * cantidadDías;
    precioFinal = precioInicial + precioInicial * porcentaje / 100;

    mensaje = "El precio total a pagar por el viaje es "+precioFinal;

    alert(mensaje);

}
