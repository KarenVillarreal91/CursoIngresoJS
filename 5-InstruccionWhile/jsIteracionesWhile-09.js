/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo = 0;
	var numeroMinimo = 0;
	var respuesta;
	//iniciar variables
	banderaDelPrimero = "Es el primero.";
	respuesta = 'si';

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un número.");

		numeroIngresado = parseInt(numeroIngresado);

		if(isNaN(numeroIngresado))
		{
			continue;
		}
		else
		{
			if(numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
			else
			{
				numeroMinimo = numeroIngresado;
	
				if(numeroIngresado < numeroMinimo)
				{
					numeroMinimo = numeroIngresado;
				}
			}
		}
		
		respuesta = prompt("Desea continuar? si / no");
	}

	txtIdMaximo.value = numeroMaximo;
	txtIdMinimo.value = numeroMinimo; //Mal escrito el txt, una "m" de más.
}//FIN DE LA FUNCIÓN