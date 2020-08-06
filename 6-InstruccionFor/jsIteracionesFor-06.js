function mostrar()
{
	var numeroIngresado;
	var contadorPares = 0;

	do
	{
		numeroIngresado = prompt("Ingrese un número.");
		numeroIngresado = parseInt(numeroIngresado);
	}while(isNaN(numeroIngresado) || numeroIngresado < 1);

	for(var i = 1; i <= numeroIngresado; i++)
	{
		if(i % 2 == 0)
		{
			contadorPares++;

			alert("Número par: "+i+".");
		}
	}

	alert("La cantidad de números pares es: "+contadorPares+".");

}//FIN DE LA FUNCIÓN