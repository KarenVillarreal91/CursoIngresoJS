/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//Definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
	var estadoCivilIngresado;
	var sueldoBruto;
	var numeroLegajo;
	var nacionalidad; 
	//A
	edadIngresada = prompt("Ingrese su edad. (18 a 90)");
	edadIngresada = parseInt(edadIngresada);

	while(isNaN(edadIngresada) || edadIngresada < 18 || edadIngresada > 90)
	{
		edadIngresada = prompt("Error!! Ingrese una edad válida. (18 a 90)");
		edadIngresada = parseInt(edadIngresada);
	}
	//B
	sexoIngresado = prompt("Ingrese su sexo. (f o m)");

	while(sexoIngresado != 'm' && sexoIngresado != 'f')
	{
		sexoIngresado = prompt("Error!! Ingrese un sexo válido. (f o m)");
	}
	//C
	estadoCivilIngresado = prompt("Ingrese su estado civil. (1- Soltero, 2- Casado, 3- Divorciado, 4- Viudo)");
	estadoCivilIngresado = parseInt(estadoCivilIngresado);

	while(isNaN(estadoCivilIngresado) || estadoCivilIngresado > 5 || estadoCivilIngresado < 1)
	{
		estadoCivilIngresado = prompt("Error!! Ingrese un estado civil válido. (1- Soltero, 2- Casado, 3- Divorciado, 4- Viudo)");
		estadoCivilIngresado = parseInt(estadoCivilIngresado);
	}
	//D
	sueldoBruto = prompt("Ingrese su sueldo bruto. (No menor a 8000)");
	sueldoBruto = parseInt(sueldoBruto);

	while(isNaN(sueldoBruto) || sueldoBruto < 8000)
	{
		sueldoBruto = prompt("Error!! Ingrese un sueldo bruto válido. (No menor a 8000)");
		sueldoBruto = parseInt(sueldoBruto);
	}
	//E
	numeroLegajo = prompt("Ingrese su número de legajo. (Numérico de 4 cifras y sin ceros a la izquierda)");
	numeroLegajo = parseInt(numeroLegajo);

	while(isNaN(numeroLegajo) || numeroLegajo < 1000 || numeroLegajo > 9999)
	{
		numeroLegajo = prompt("Error!! Ingrese su número de legajo. (Numérico de 4 cifras y sin ceros a la izquierda)");
		numeroLegajo = parseInt(numeroLegajo);
	}
	//F
	nacionalidad = prompt("Ingrese su nacionalidad. (A- Argentino, E- Extranjero, N- Nacionalizados)");

	while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N")
	{
		nacionalidad = prompt("Error!! Ingrese su nacionalidad. (A- Argentino, E- Extranjero, N- Nacionalizados)");
	}
	//Conversión
	if(sexoIngresado == "f")
	{
		sexoIngresado = "Femenino";
	}
	else
	{
		sexoIngresado = "Masculino";
	}

	if(estadoCivilIngresado == 1)
	{
		estadoCivilIngresado = "Soltero";
	}
	else
	{
		if(estadoCivilIngresado == 2)
		{
			estadoCivilIngresado = "Casado";
		}
		else
		{
			if(estadoCivilIngresado == 3)
			{
				estadoCivilIngresado = "Divorciado";
			}
			else
			{
				estadoCivilIngresado = "Viudo";
			}
		}
	}

	if(nacionalidad == "A")
	{	
		nacionalidad = "Argentino";
	}
	else
	{	
		if(nacionalidad == "E")
		{	
			nacionalidad = "Extranjero";
		}
		else
		{	
			nacionalidad = "Nacionalizado";
		}
	}
	//Mostrar
	txtIdEdad.value = edadIngresada;
	txtIdSexo.value = sexoIngresado;
	txtIdEstadoCivil.value = estadoCivilIngresado;
	txtIdSueldo.value = sueldoBruto;
	txtIdLegajo.value = numeroLegajo;
	txtIdNacionalidad.value = nacionalidad;
}
