function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var respuesta = true;
	//mastemperatura
	var mayorTemperatura;
	var nombreMayorTemperatura;
	var flagTemperatura = true;
	//contadores
	var mayoresViudos = 0;
	var hombresSolterosViudos = 0;
	var terceraEdadTemperatura = 0;
	var cantidadHombresSolteros = 0;
	var sumaHombresSolteros = 0;
	var promedio;


	while(respuesta)
	{
		do
		{
			nombre = prompt("Ingrese su nombre.");
		}while(!isNaN(nombre));

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

		respuesta = confirm("Pasajero agregado correctamente. ¿Desea continuar?");

		//Punto A
		if(flagTemperatura)
		{
			mayorTemperatura = temperatura;
			nombreMayorTemperatura = nombre;
			flagTemperatura = false;
		}
		if(temperatura > mayorTemperatura)
		{
			mayorTemperatura = temperatura;
			nombreMayorTemperatura = nombre;
		}

		//Punto B
		if(edad > 17 && estadoCivil == "viudo")
		{
			mayoresViudos++;
		}

		//Punto C
		if(sexo == "m" && estadoCivil == "viudo" || estadoCivil == "soltero")
		{
			hombresSolterosViudos++;
		}

		//Punto D
		if(edad > 60 && temperatura > 38)
		{
			terceraEdadTemperatura++;
		}

		//Punto E
		if(sexo == "m" && estadoCivil == "soltero")
		{
			cantidadHombresSolteros++;
			sumaHombresSolteros += edad;
		}
	}

	if(cantidadHombresSolteros == 0)
	{
		promedio = " No hay hombres solteros";
	}
	else
	{
		promedio = sumaHombresSolteros / cantidadHombresSolteros;
	}

	document.write("La persona con mayor temperatura se llama: "+nombreMayorTemperatura+", con "+mayorTemperatura+".",
	"<br>La cantidad de mayores de edad viudos es: "+mayoresViudos+".",
	"<br>La cantidad de hombres solteros o viudos es: "+hombresSolterosViudos+".",
	"<br>La cantidad de personas de la tercera edad con más de 38 de temperatura es: "+terceraEdadTemperatura+".",
	"<br>El promedio de edad entre los nombres solteros es: "+promedio+".");
}
