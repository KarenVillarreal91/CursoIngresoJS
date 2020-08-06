function mostrar()
{
	var repeticiones;

	do
	{
		repeticiones = prompt("Ingrese el número de repeticiones.");
	}while(isNaN(repeticiones) || repeticiones < 1);
	
	for(var i = 0; i < repeticiones; i++)
	{
		alert("Hola UTN FRA");
	}

}//FIN DE LA FUNCIÓN