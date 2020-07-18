function mostrar()
{
	var estacionIngresada;
	var destinoIngresado; 
		
		estacionIngresada = txtIdEstacion.value;
		destinoIngresado = txtIdDestino.value;

		if(estacionIngresada == "Invierno")
		{
			switch(destinoIngresado)
			{
				case "Bariloche":
					alert("Se viaja.");
				break;

				default:
					alert("No se viaja.");
				break;
			}
		}
		if(estacionIngresada == "Verano")
		{
			switch(destinoIngresado)
			{
				case "Mar del plata":
				case "Cataratas":
					alert("Se viaja.");
				break;

				default:
					alert("No se viaja.");
				break;
			}
		}
		if(estacionIngresada == "Otoño")
		{
			switch(destinoIngresado)
			{
				default:
					alert("Se viaja.");
				break;
			}
		}
		if(estacionIngresada == "Primavera")
		{
			switch(destinoIngresado)
			{
				case "Bariloche":
					alert("No se viaja.");
				break;

				default:
					alert("Se viaja.");
				break;
			}
		}
}//FIN DE LA FUNCIÓN