/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidadLamparas;
    var descuento;
    var marca;
    var precioSinDescuento;
    var precioConDescuento;
    var importeFinal; 
    var impuesto; 
   
    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);
    marca = document.getElementById("Marca").value;


    if(marca == "ArgentinaLuz")
    {
        switch(cantidadLamparas)
        {
            case 1:
            case 2:
                descuento = 0;
                break;
            case 3:
                descuento = 15;
                break;
            case 4:
                descuento = 25;
                break;
            case 5:
                descuento = 40;
                break;
            default:
                descuento = 50;
                break;
        }
    }
    else
    {
        if(marca == "FelipeLamparas")
        {
            switch(cantidadLamparas)
            {
                case 1:
                case 2:
                    descuento = 0;
                    break;
                case 3:
                    descuento = 10;
                    break;
                case 4:
                    descuento = 25;
                    break;
                case 5:
                    descuento = 30;
                    break;
                default:
                    descuento = 50;
                    break;
            }
        }
        else
        {
            switch(cantidadLamparas)
            {
                case 1:
                case 2:
                    descuento = 0;
                    break;
                case 3:
                    descuento = 5;
                    break;
                case 4:
                    descuento = 20;
                    break;
                case 5:
                    descuento = 30;
                    break;
                default:
                    descuento = 50;
                    break;

            }
        }
    }

    precioSinDescuento = 35 * cantidadLamparas;
    precioConDescuento = precioSinDescuento - ((35 * cantidadLamparas)  * descuento / 100);
    importeFinal = precioConDescuento;

    if(importeFinal > 120)
    {
        impuesto =  importeFinal * 10 / 100;
        importeFinal = importeFinal + impuesto;
        alert("IIBB Usted pago "+importeFinal+", siendo "+impuesto+" el impuesto que se pagó.");
    }

    document.getElementById("txtIdprecioDescuento").value = importeFinal;

}
