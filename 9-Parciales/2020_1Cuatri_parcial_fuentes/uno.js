
function mostrar()
{
	var producto;
	var precio;
	var unidades;
	var acumuladorJabon = 0;
	var acumuladorBarbijo = 0;
	var acumuladorAlcohol = 0;
	var flagAlcohol = false;
	var precioMasBarato;
	var marca;
	var fabricante;
	var fabricanteMasBarato;
	var promedio;
	var unidadesMasBarato;
	var contadorAlcohol = 0;
	var contadorBarbijo = 0;
	var contadorJabon = 0;

	for(var i = 0; i < 5; i++) //Pedido de datos y validación
	{
		//Pido datos
		do
		{
			producto = prompt("Ingrese un producto. (barbijo, jabon, alcohol)");
		}while(producto != "barbijo" && producto != "jabon" && producto != "alcohol");

		do
		{
			precio = prompt("Ingrese el precio del producto. (Entre 100 y 300)");
			precio = parseInt(precio);
		}while(isNaN(precio) || precio < 100 || precio > 300);

		do
		{
			unidades = prompt("Ingrese la cantidad de unidades. (Entre 0 y 1000)");
			unidades = parseInt(unidades);
		}while(isNaN(unidades) || unidades < 0 || unidades > 1000);

		marca = prompt("Ingrese la marca.");

		fabricante = prompt("Ingrese el fabricante.");

		if(producto == "barbijo") //B
		{
			acumuladorBarbijo += unidades;
			contadorBarbijo++;
		}
		else
		{
			if(producto == "jabon")//C
			{
				acumuladorJabon += unidades;
				contadorJabon++;
			}
			else
			{
				acumuladorAlcohol += unidades;
				contadorAlcohol++;
			}
		}

		if(flagAlcohol && producto == "alcohol")//A
		{
			precioMasBarato = precio;
			unidadesMasBarato = unidades;
			fabricanteMasBarato = fabricante;
			flagAlcohol = false;
		}
		if(precio < precioMasBarato && producto == "alcohol")
		{
			precioMasBarato = precio;
			unidadesMasBarato = unidades;
			fabricanteMasBarato = fabricante;
		}
		
		alert("Pruducto agregado correctamente.");
	}

	//B (Mostrar)
	if(acumuladorBarbijo > acumuladorJabon && acumuladorBarbijo > acumuladorAlcohol)
	{
		promedio = acumuladorBarbijo / contadorBarbijo;
		document.write("El promedio del mayor en unidades (Barbijo): "+promedio);
	}
	else
	{
		if(acumuladorJabon > acumuladorBarbijo && acumuladorJabon > acumuladorAlcohol)
		{	
			promedio = acumuladorJabon / contadorJabon;
			document.write("El promedio del mayor en unidades (Jabón): "+promedio);
		}
		else
		{	
			promedio = acumuladorAlcohol / contadorAlcohol;
			document.write("El promedio del mayor en unidades (Alcohol): "+promedio);
		}
	}
	//A y C (Mostrar)
	document.write("<br>El más barato de los alcohol tiene "+unidadesMasBarato+" unidades y el fabricante es "+fabricanteMasBarato+".");
	document.write("<br>Hay "+acumuladorJabon+" unidades de jabón.");

}
