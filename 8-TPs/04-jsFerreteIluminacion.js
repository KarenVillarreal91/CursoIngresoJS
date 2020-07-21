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
     var marca;
     var precioConDescuento;
     var subTotal;
     var iibb;

        cantidadLamparas = txtIdCantidad.value;
        marca = Marca.value;
        subTotal = 35 * cantidadLamparas;

        //A
        if(cantidadLamparas > 5)
        {
            precioConDescuento = subTotal - (subTotal * 0.50);
        }
        //B
        if(cantidadLamparas == 5 && marca == "ArgentinaLuz")
        {
            precioConDescuento = subTotal - (subTotal * 0.40);
        }
        else if(cantidadLamparas == 5)
        {
            precioConDescuento = subTotal - (subTotal * 0.30);
        }
        //C
        if(cantidadLamparas == 4 && marca == "ArgentinaLuz" || marca == "FelipeLamparas")
        {
            precioConDescuento = subTotal - (subTotal * 0.25);
        }
        else if(cantidadLamparas == 4)
        {
            precioConDescuento = subTotal - (subTotal * 0.20);
        }
        //D
        if(cantidadLamparas == 3)
        {
            precioConDescuento = subTotal - (subTotal * 0.05);
            
            if(marca == "FelipeLamparas")
            {
                precioConDescuento = subTotal - (subTotal * 0.10);
            }
            else if(marca == "ArgentinaLuz")
            {
                precioConDescuento = subTotal - (subTotal * 0.15);
            }
        }
        //E
        if (precioConDescuento > 120)
        {
            iibb = (precioConDescuento * 0.10);

            precioConDescuento = precioConDescuento + iibb;

            alert("Usted pagó "+iibb+" de IIBB.");
        }
        
        txtIdprecioDescuento.value = precioConDescuento; 
}
