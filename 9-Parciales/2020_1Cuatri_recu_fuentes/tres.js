function mostrar()
{
	var nacionalidad;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var respuesta = true;
	var promedio;
	//mayortemperatura
	var mayorTemperatura = 0;
	var flagTemperatura = true;
	var nacionalidadMayorTemperatura;
	//contadores
	var mayorDeEdadYSoltero = 0;
	var mujeresSolterasOViudas = 0;
	var terceraEdadYTemperatura = 0;
	var mujeresCasadasCantidad = 0;
	//acumulador
	var mujeresCasadasTotalEdad = 0;

	while(respuesta)
	{
		do
		{
			nacionalidad = prompt("Ingrese su nacionalidad.")
		}while(!isNaN(nacionalidad));
		
		do
		{
			edad = prompt("Ingrese su edad.");
			edad = parseInt(edad);
		}while(isNaN(edad) || edad < 0);
	
		do
		{
			sexo = prompt("Ingrese su sexo. (f o m)");
		}while(sexo != "f" && sexo != "m");
	
		do
		{
			estadoCivil = prompt("Ingrese su estado civil. (soltero, casado, viudo)");
		}while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo");
		
		do
		{
			temperatura = prompt("Ingrese su temperatura corporal.");
			temperatura = parseInt(temperatura);
		}while(isNaN(temperatura));
	
		//Punto A
		if(!flagTemperatura && temperatura > mayorTemperatura)
		{
			flagTemperatura = true;
		}
		if(flagTemperatura)
		{
			mayorTemperatura = temperatura;
			nacionalidadMayorTemperatura = nacionalidad;
			flagTemperatura = false;
		}

		//Punto B
		if(edad > 17 && estadoCivil == "soltero")
		{
			mayorDeEdadYSoltero++;
		}

		//Punto C
		if(sexo == "f" && estadoCivil == "soltero" || estadoCivil == "viudo")
		{
			mujeresSolterasOViudas++;
		}

		//Punto D
		if(edad > 60 && temperatura > 38)
		{
			terceraEdadYTemperatura++;
		}
		
		//Punto E
		if(sexo  == "f" && estadoCivil == "casado")
		{
			mujeresCasadasTotalEdad += edad;
			mujeresCasadasCantidad++;
		}
		
		respuesta = confirm("Pasajero agregado correctamente. ¿Desea continuar?");
	}
	
	if(mujeresCasadasCantidad == 0)
	{
		promedio = " No hay mujeres casadas";
	}
	else
	{
		promedio = mujeresCasadasTotalEdad / mujeresCasadasCantidad;
	}
	

	document.write("La nacionalidad de la persona con más temperatura es: "+nacionalidadMayorTemperatura+".",
	"<br>La cantidad de mayores de edad solteros es: "+mayorDeEdadYSoltero+".",
	"<br>La cantidad de mujeres solteras o viudas es: "+mujeresSolterasOViudas+".",
	"<br>La cantidad de personas de la tercera edad con temperatura mayor a 38 es: "+terceraEdadYTemperatura+".",
	"<br>El promedio de edad de las mujeres casadas es: "+promedio+".");
}
