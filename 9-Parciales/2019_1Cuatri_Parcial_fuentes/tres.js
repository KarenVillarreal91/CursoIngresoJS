function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;

    do
    {
        precio = prompt("Ingrese el precio del producto.");
        precio = parseInt(precio);
    }while(isNaN(precio) || precio < 1);

    do
    {
        descuento = prompt("Ingrese el descuento a aplicar.");
        descuento = parseInt(descuento);
    }while(isNaN(descuento) || descuento < 0);

    precioFinal = precio - (precio * descuento / 100);

    elPrecioFinal.value = precioFinal;
}
