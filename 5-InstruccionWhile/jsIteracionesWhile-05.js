/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;

	sexoIngresado = prompt("Ingrese f ó m .");

	while(!(isNaN(sexoIngresado)) || sexoIngresado != 'f' && sexoIngresado != 'm')
	{
		sexoIngresado = prompt("Ingrese f ó m .");
	}

	txtIdSexo.value = sexoIngresado;

}//FIN DE LA FUNCIÓN