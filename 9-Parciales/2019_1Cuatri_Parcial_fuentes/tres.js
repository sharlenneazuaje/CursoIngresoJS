function mostrar()
{
    var precio;
    var porcentajeDescuento;
    var descuento;
    var precioFinal; 

    precio = prompt("Ingresar el precio del producto");
    precio = parseInt(precio);
    porcentajeDescuento = prompt("Ingresar porcentaje de descuento");

    descuento = precio * porcentajeDescuento / 100;
    precioFinal = precio - descuento;

    document.getElementById("elPrecioFinal").value=precioFinal;
}
