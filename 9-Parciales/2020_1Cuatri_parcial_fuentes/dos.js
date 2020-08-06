function mostrar()
{
  var producto;
  var cantidadDeBolsas;
  var precio;
  var respuesta = true;
  //totalbolsas
  var totalBolsasArena = 0;
  var totalBolsasCal = 0;
  var totalBolsasCemento = 0;
  var totalBolsasGeneral = 0;
  //totalprecio
  var precioTotalArena = 0;
  var precioTotalCal = 0;
  var precioTotalCemento = 0;
  var precioSumaGeneral = 0;
  var precioTotal = 0;
  //descuento
  var precioDescuento;

  while(respuesta)
  {
    //Pido datos
    do
    {
      producto = prompt("Ingrese el producto. (arena, cal, cemento)");
    }while(producto != "arena" && producto != "cal" && producto != "cemento");

    do
    {
      cantidadDeBolsas = prompt("Ingrese la cantidad de bolsas.");
      cantidadDeBolsas = parseInt(cantidadDeBolsas);
    }while(isNaN(cantidadDeBolsas) || cantidadDeBolsas < 1);

    do
    {
      precio = prompt("Ingrese el precio del producto.");
      precio = parseInt(precio);
    }while(isNaN(precio) || precio < 1);

    //Totales
    totalBolsasGeneral += cantidadDeBolsas;
    precioSumaGeneral += precio;

    if(producto == "arena")
    {
      totalBolsasArena += cantidadDeBolsas;
      precioTotalArena += precio;
    }
    else
    {
      if(producto == "cal")
      {
        totalBolsasCal += cantidadDeBolsas;
        precioTotalCal += precio;
      }
      else
      {
        totalBolsasCemento += cantidadDeBolsas;
        precioTotalCemento += precio;
      }
    }

    respuesta = confirm("Producto agregado correctamente. ¿Desea continuar?");
  }

  precioTotal = precioSumaGeneral * totalBolsasGeneral;
  
  //Punto A
  document.write("El precio total a pagar sin descuento es: "+precioTotal+".");

  //Punto B
  if(totalBolsasGeneral > 30)
  {
    precioDescuento = precioTotal - (precioTotal * 0.25);
    document.write("<br>El precio total a pagar con descuento es: "+precioDescuento+". (-25%)");
  }
  else
  {
    if(totalBolsasGeneral > 10)
    {
      precioDescuento = precioTotal - (precioTotal * 0.15);
      document.write("<br>El precio total a pagar con descuento es: "+precioDescuento+". (-15%)");
    }
  }

  //Punto D
  if(totalBolsasArena > totalBolsasCal && totalBolsasArena > totalBolsasCemento)
  {
    document.write("<br>Arena es el mayor en cantidad de bolsas con: "+totalBolsasArena+".");
  }
  else
  {
    if(totalBolsasCal > totalBolsasCemento)
    {
      document.write("<br>Cal es el mayor en cantidad de bolsas con: "+totalBolsasCal+".");
    }
    else
    {
      document.write("<br>Cemento es el mayor en cantidad de bolsas con: "+totalBolsasCemento+".");
    }
  }

  //Punto E
  if(precioTotalArena > precioTotalCal && precioTotalArena > precioTotalCemento)
  {
    document.write("<br>Arena es el más caro con un total de: "+precioTotalArena+".");
  }
  else
  {
    if(precioTotalCal > precioTotalCemento)
    {
      document.write("<br>Cal es el más caro con un total de: "+precioTotalCal+".");
    }
    else
    {
      document.write("<br>Cemento es el más caro con un total de: "+precioTotalCemento+".");
    }
  }
}