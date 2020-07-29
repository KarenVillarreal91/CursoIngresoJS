/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var contadorNegativos = 0;
	var contadorPositivos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioPositivos = 0;
	var promedioNegativos = 0;
	var diferencia = 0;

	respuesta = "si";

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un número.");

		numeroIngresado = parseInt(numeroIngresado);

		if(isNaN(numeroIngresado))
		{
			continue;
		}
		else
		{
			if(numeroIngresado > -1 ) //2
			{
				sumaPositivos = sumaPositivos + numeroIngresado;
				
				contadorPositivos++; //3
				
				if(numeroIngresado == 0) //5
				{
					contadorCeros++;
				}
			}
			else //1
			{
				sumaNegativos = sumaNegativos + numeroIngresado;
				
				contadorNegativos++; //4
			}
	
			if(numeroIngresado % 2 == 0) //6
			{
				contadorPares++;
			}
		}

		respuesta = prompt("Desea continuar? si / no");
	}//fin del while

	promedioPositivos = sumaPositivos / contadorPositivos; //7
	promedioNegativos = sumaNegativos / contadorNegativos; //8
	diferencia = sumaPositivos - sumaNegativos; //9

	document.write("</br>La suma números de negativos es : "+sumaNegativos+ ".</br>La suma de números positivos es: "+sumaPositivos+".</br>La cantidad de números positivos es: "+contadorPositivos+".</br>La cantidad de números negativos es: "+contadorNegativos+".</br>La cantidad de ceros es: "+contadorCeros+".</br>La cantidad de números pares es: "+contadorPares+". </br>El promedio de los positivos es: "+promedioPositivos+".</br>El promedio de los negativos es: "+promedioNegativos+"</br>La diferencia entre positivos y negativos es: "+diferencia+".");
}//FIN DE LA FUNCIÓN