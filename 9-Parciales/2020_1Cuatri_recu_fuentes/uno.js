
function mostrar()
{
	var producto;
	var precio;
	var unidades;
	var marca;
	var fabricante;
	var promedio = 0;
	//contadores
	var contadorJabon = 0;
	var contadorBarbijo = 0;
	var contadorAlcohol = 0;
	//más caro
	var precioMasCaro = 0;
	var unidadesMasCaro = 0;
	var fabricanteMasCaro = 0;
	var flagMasCaro = true;
	//unidadestotal
	var totalUnidadesBarbijo = 0;
	var totalUnidadesJabon = 0;
	var totalUnidadesAlcohol = 0;

	for(var i = 0; i < 5; i++)
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

		if(producto == "barbijo")
		{
			contadorBarbijo++;
			totalUnidadesBarbijo += unidades;
		}
		else
		{
			if(producto == "jabon")
			{
				contadorJabon++;
				totalUnidadesJabon += unidades;
			}
			else
			{
				contadorAlcohol++;
				totalUnidadesAlcohol += unidades;
			}
		}

		//Punto A
		if(!flagMasCaro && precio > precioMasCaro && producto == "jabon")
		{
			flagMasCaro = true;
		}

		if(flagMasCaro && producto == "jabon")
		{
			precioMasCaro = precio;
			fabricanteMasCaro = fabricante;
			unidadesMasCaro = unidades;
			flagMasCaro = false;
		}

		alert("Pruducto agregado correctamente.");
	}
	//Punto A
	document.write("La cantidad de unidades del más caro de los jabones es: "+unidadesMasCaro+". El fabricante es: "+fabricanteMasCaro+".");
	
	//Punto B
	if(totalUnidadesBarbijo > totalUnidadesJabon && totalUnidadesBarbijo > totalUnidadesAlcohol)
	{
		promedio = totalUnidadesBarbijo / contadorBarbijo;
		document.write("<br>El promedio por compra del producto con más unidades es: "+promedio+". (Barbijo)");
	}
	else
	{
		if(totalUnidadesJabon > totalUnidadesAlcohol)
		{
			promedio = totalUnidadesJabon / contadorJabon;
			document.write("<br>El promedio por compra del producto con más unidades es: "+promedio+". (Jabon)");
		}
		else
		{
			promedio = totalUnidadesAlcohol / contadorJabon;
			document.write("<br>El promedio por compra del producto con más unidades es: "+promedio+". (Alcohol)");
		}
	}

	//Punto C
	document.write("<br>Se compraron en total "+totalUnidadesBarbijo+" unidades de barbijo.");
}
