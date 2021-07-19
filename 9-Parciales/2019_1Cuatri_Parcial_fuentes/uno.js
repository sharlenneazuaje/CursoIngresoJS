
function mostrar()
{
    var lado;
    var perimetro;
    var mensaje;

    lado = prompt("Ingresar la medida de los lados");
    lado = parseInt(lado);

    perimetro = lado * 3;

    mensaje = "El perímetro del triángulo es "+perimetro;

    alert(mensaje);

}
