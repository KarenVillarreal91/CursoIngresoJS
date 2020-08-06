/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var numeroIngresado;
	var acumulador;
	var respuesta;

	contador = 0;
	acumulador = 0;
	respuesta = 'si';

	/*do
	{
		numeroIngresado = prompt("Ingrese un número.");
		
		numeroIngresado = parseInt(numeroIngresado);

		if(isNaN(numeroIngresado))
		{
			continue;
		}

		acumulador += numeroIngresado; // acumulador = acumulador + numeroIngresado

		contador++;

		respuesta = prompt("Quiere seguir ingresando números? si / no");
	}while(respuesta == 'si');*/

	while(respuesta == 'si')
	{
		numeroIngresado = prompt("Ingrese un número.");
		
		numeroIngresado = parseInt(numeroIngresado);

		if(isNaN(numeroIngresado))
		{
			continue;
		}

		acumulador += numeroIngresado; 

		contador++;

		respuesta = prompt("Quiere seguir ingresando números? si / no");
	}

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = acumulador/contador;

}//FIN DE LA FUNCIÓN