/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;

	sexoIngresado = prompt("Ingrese el sexo, f ó m.");

	while(sexoIngresado != 'f' && sexoIngresado != 'm')
	{
		sexoIngresado = prompt("Error. Ingrese el sexo, f ó m.");
	}

	txtIdSexo.value = sexoIngresado;

}//FIN DE LA FUNCIÓN