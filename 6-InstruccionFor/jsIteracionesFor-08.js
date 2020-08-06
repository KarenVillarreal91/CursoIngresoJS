function mostrar()
{
	var numeroIngresado;
	var contadorDivisor = 0;

	do
	{
		numeroIngresado = prompt("Ingrese un número.");
		numeroIngresado = parseInt(numeroIngresado);
	}while(isNaN(numeroIngresado) || numeroIngresado < 1);

	for(var i = 1; i <= numeroIngresado; i++)
	{
		if(numeroIngresado % i == 0)
		{
			contadorDivisor++;
		}
	}

	if(contadorDivisor == 2)
	{
		alert("Es número primo.");
	}
	else
	{
		if(numeroIngresado == 1)
		{
			alert("El número 1 no es primo ni compuesto.")
		}
		else
		{
			alert("No es número primo.");
		}
	}
}//FIN DE LA FUNCIÓN