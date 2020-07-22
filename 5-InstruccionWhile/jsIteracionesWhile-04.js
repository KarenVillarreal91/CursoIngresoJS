/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("Ingrese un número entre 0 y 9 inclusive.");
	
	while(isNaN(numeroIngresado) || numeroIngresado < 0 || numeroIngresado > 9)
	{
		numeroIngresado = prompt("Ingrese un número entre 0 y 9 inclusive.");
	}

	txtIdNumero.value = numeroIngresado;
/*
	do
	{
		numeroIngresado = prompt("Ingrese un número entre 0 y 9 inclusive.");

	}while(isNaN(numeroIngresado) || numeroIngresado < 0 || numeroIngresado > 9);

	txtIdNumero.value = numeroIngresado;
*/
		

}//FIN DE LA FUNCIÓN