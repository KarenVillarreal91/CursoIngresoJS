function mostrar()
{
	var contador = 0;
	var acumulador = 0;
	var numeroIngresado;

	/*do
	{
		acumulador = parseInt(acumulador);
	
		numeroIngresado = prompt("Ingrese un número.");

		numeroIngresado = parseInt (numeroIngresado);

		acumulador = acumulador + numeroIngresado;

		contador++;

	}while(contador < 5);*/

	while(contador < 5)
	{
		numeroIngresado = prompt("Ingrese un número.");

		numeroIngresado = parseInt(numeroIngresado);

		if(isNaN(numeroIngresado))
		{
			continue; //Si no se cumple la condición vuelve al while
		}

		acumulador = acumulador + numeroIngresado;

		contador++;
	}
	
	txtIdSuma.value = acumulador;

	txtIdPromedio.value = acumulador/5;
}//FIN DE LA FUNCIÓN