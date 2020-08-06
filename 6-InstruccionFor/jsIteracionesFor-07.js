function mostrar()
{
	var numeroIngresado;
	var contadorDivisor = 0;

	do
	{
		numeroIngresado = prompt("Ingrese un número.");
		numeroIngresado = parseInt(numeroIngresado);
	}while(isNaN(numeroIngresado) || numeroIngresado < 0);
	
	for(var i = 1; i <= numeroIngresado; i++)
	{
		if(numeroIngresado % i == 0)
		{
			contadorDivisor++;
			
			alert("Número divisor: "+i+".");
		}
	}

	alert("La cantidad de números divisores es: "+contadorDivisor+".");

}//FIN DE LA FUNCIÓN