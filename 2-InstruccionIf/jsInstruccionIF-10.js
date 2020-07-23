function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
/*	var numeroRandom;

	numeroRandom = Math.floor(Math.random() * 10) + 1;
	
	if(numeroRandom > 8)
	{
		alert("Excelente, es un: "+numeroRandom+".");
	}
	else
	{
		if(numeroRandom > 3)
		{
			alert("Aprobó, es un: "+numeroRandom+".");
		}
		else
		{
			alert("Vamos, la próxima se puede, es un: "+numeroRandom+".");
		}
	}
*/
	////Ejercicio////
	var primerNumeroRandom;
	var segundoNumeroRandom;
	var resultado;
	var mensaje;

	primerNumeroRandom = Math.floor(Math.random() * 51) + 1;
	segundoNumeroRandom = Math.floor(Math.random() * 51) + 1;
	
	primerNumeroRandom = parseInt(primerNumeroRandom);
	segundoNumeroRandom = parseInt(segundoNumeroRandom);
	
	console.log(primerNumeroRandom);
	console.log(segundoNumeroRandom);

	mensaje = '';

	//A - Si son par se multiplican
	if(((primerNumeroRandom % 2) == 0) && ((segundoNumeroRandom % 2) == 0))
	{
		resultado = primerNumeroRandom * segundoNumeroRandom;

		mensaje = mensaje + "Los números son pares y se multiplicaron: "+resultado+". ";
	} //B - Si son impar se restan
	else if(!((primerNumeroRandom % 2) == 0) && !((segundoNumeroRandom % 2) == 0))
	{
		resultado = primerNumeroRandom - segundoNumeroRandom;

		mensaje = mensaje + "Los números son impares y se restaron: "+resultado+". ";
	}
	//C - Si alguno es divisible por 5 se eleva al cubo
	if(((primerNumeroRandom % 5) == 0) && ((segundoNumeroRandom % 5) == 0))
	{
		resultado = Math.pow(primerNumeroRandom,3);
		resultadoCubo = Math.pow(segundoNumeroRandom,3);

		mensaje = mensaje + "Los dos números son divisibles por 5 y se elevaron al cubo: "+resultado+" y "+resultadoCubo+". ";
	}
	else if((primerNumeroRandom % 5) == 0) 
	{
		resultado = Math.pow(primerNumeroRandom,3);

		mensaje = mensaje + "Algún numero es divisible por 5 y se elevó al cubo: "+resultado+". ";
	}
	else if((segundoNumeroRandom % 5) == 0)
	{
		resultado = Math.pow(segundoNumeroRandom,3);

		mensaje = mensaje + "Algún numero es divisible por 5 y se elevó al cubo: "+resultado+". ";
	}
	//D - Si no pasa nada mostrar que no pasa nada
	if(mensaje == '')
	{
		mensaje = "No pasó nada.";
	}
	//E - Mostrar todo mediante un solo alert
	alert(mensaje);

}//FIN DE LA FUNCIÓN