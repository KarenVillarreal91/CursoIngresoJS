/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;

	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = 'si';

	while(respuesta == 'si')
	{
		numeroIngresado = prompt("Ingrese un número.");

		numeroIngresado = parseInt(numeroIngresado);

		if(isNaN(numeroIngresado))
		{
			continue;
		}
		else
		{
			if(numeroIngresado > 0)
			{
				sumaPositivos = sumaPositivos + numeroIngresado;
			}
			else
			{
				multiplicacionNegativos = numeroIngresado * multiplicacionNegativos;
			}
		}
		
		contador++;

		respuesta = prompt("Quiere seguir ingresando números? si / no");
	}

	txtIdSuma.value = sumaPositivos;
	txtIdProducto.value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN