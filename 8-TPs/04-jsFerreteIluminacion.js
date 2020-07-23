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
     var precioBase;
     var precioConDescuento;
     var subTotal;
     var iibb;
     var descuento;

        cantidadLamparas = txtIdCantidad.value;
        marca = Marca.value;
        
        precioBase = 35;
        
        cantidadLamparas = parseInt(cantidadLamparas);
        precioConDescuento = parseInt(precioConDescuento);

        subTotal = precioBase * cantidadLamparas;
         
             /////CON IF/////
        //A
        if(cantidadLamparas > 5)
        {
            descuento = 0.50;
        }//B
        else if(cantidadLamparas == 5 && marca == "ArgentinaLuz") 
        {
            descuento = 0.40;
        }
        else if(cantidadLamparas == 5)
        {
            descuento = 0.30;
        }//C
        else if(cantidadLamparas == 4 && marca == "ArgentinaLuz" || marca == "FelipeLamparas")
        {
            descuento = 0.25;
        }
        else if(cantidadLamparas == 4)
        {  
            descuento = 0.20;
        }//D
        else if(cantidadLamparas == 3)
        {
            if(marca == "FelipeLamparas")
            {
                descuento = 0.10;
            }
            else if(marca == "ArgentinaLuz")
            {
                descuento = 0.15;
            }
            else
            {
                descuento = 0.05;
            }
        }
        else
        {
           descuento = 0;
        }       
        
       /*     /////CON SWITCH/////
        switch(cantidadLamparas)
        {
            case 5: //B
                switch(marca)
                {
                    case "ArgentinaLuz":
                        descuento = 0.40;
                    break;

                    default:
                        descuento = 0.30;
                    break;
                }
            break;

            case 4: //C
                switch(marca)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        descuento = 0.25;
                    break;

                    default:
                        descuento = 0.20;
                    break;
                }
            break;

            case 3: //D
                switch(marca)
                {
                    case "ArgentinaLuz":
                        descuento = 0.15;
                    break;

                    case "FelipeLamparas":
                        descuento = 0.10;
                    break;

                    default:
                        descuento = 0.05;
                    break;
                }
            break;

            case 1:
            case 2:
                descuento = 0;
            break;

            default: //A
                descuento = 0.50;
            break;
        }*/

        precioConDescuento = subTotal - (subTotal * descuento);

        //E
        if (precioConDescuento > 120)
        {
            iibb = (precioConDescuento * 0.10);

            precioConDescuento = precioConDescuento + iibb;

            alert("Usted pagó "+iibb+" de IIBB.");
        }

        txtIdprecioDescuento.value = precioConDescuento; 
}
