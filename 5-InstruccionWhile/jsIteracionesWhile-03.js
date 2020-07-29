/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	var contador = 0;

	claveIngresada = prompt("Ingrese la clave.");
	
	while(claveIngresada != "utn750")
	{
		contador++;

		if(contador == 3)
		{
			alert("Ya no tiene más intentos.");
		break;
		}

		claveIngresada = prompt("Ingrese la clave.");
	}
	/*
	do
	{
		claveIngresada = prompt("Ingrese la clave.");
	}while(claveIngresada != "utn750");
	*/
}//FIN DE LA FUNCIÓN
