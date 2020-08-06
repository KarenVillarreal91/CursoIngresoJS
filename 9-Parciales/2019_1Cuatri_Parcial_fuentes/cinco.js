function mostrar()
{
    var continente;
    var cantidadDias;
    var totalBaseDias;
    var metodoDePago;
    var descuento;
    var totalAPagar;

    continente = Marca.value;

    cantidadDias = prompt("Ingrese la cantidad de días.");
    cantidadDias = parseInt(cantidadDias);

    metodoDePago = prompt("Ingrese el método de pago. (Ej: débito, mercadopago, efectivo)");

    totalBaseDias = cantidadDias * 100;

    switch(continente)
    {
        case "América":
            descuento = 0.50;

            switch(metodoDePago)
            {
                case "débito":
                    descuento += 0.10;
                    totalAPagar = totalBaseDias - (totalBaseDias * descuento);

                    alert("Se agregó un 60% de descuento. El total a pagar es de: "+totalAPagar+".");
                break;

                default:
                    totalAPagar = totalBaseDias - (totalBaseDias * descuento);
                    
                    alert("Se agregó un 50% de descuento. El total a pagar es de: "+totalAPagar+".");
                break;
            }
        break;

        case "África":
            descuento = 0.60;

            switch(metodoDePago)
            {
                case "mercadopago":
                case "efectivo":
                    descuento += 0.15;
                    totalAPagar = totalBaseDias - (totalBaseDias * descuento);

                    alert("Se agregó un 75% de descuento. El total a pagar es de: "+totalAPagar+".");
                break;

                default:
                    totalAPagar = totalBaseDias - (totalBaseDias * descuento);

                    alert("Se agregó un 60% de descuento. El total a pagar es de: "+totalAPagar+".");
                break;
            }
        break;

        case "Europa":
            descuento = 0.20;

            switch(metodoDePago)
            {
                case "débito":
                    descuento += 0.15;
                    totalAPagar = totalBaseDias - (totalBaseDias * descuento);

                    alert("Se agregó un 35% de descuento. El total a pagar es de: "+totalAPagar+".");
                break;

                case "mercadopago":
                    descuento += 0.10;
                    totalAPagar = totalBaseDias - (totalBaseDias * descuento);
                    
                    alert("Se agregó un 30% de descuento. El total a pagar es de: "+totalAPagar+".");
                break;

                default:
                    descuento += 0.05;
                    totalAPagar = totalBaseDias - (totalBaseDias * descuento);

                    alert("Se agregó un 25% de descuento. El total a pagar es de: "+totalAPagar+".");
                break;
            }
        break;

        default:
            totalAPagar = totalBaseDias * 1.20;

            alert("Se agregó un recargo del 20%. El total a pagar es de: "+totalAPagar+".");
        break;
    }
}
