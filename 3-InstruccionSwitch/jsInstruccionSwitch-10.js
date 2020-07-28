function mostrar()
{
	var estacionIngresada;
	var destinoIngresado; 
		
		estacionIngresada = txtIdEstacion.value;
		destinoIngresado = txtIdDestino.value;

		switch(estacionIngresada)
		{
			case "Invierno":
				switch(destinoIngresado)
				{
					case "Bariloche":
						alert("Se viaja.");
					break;

					default:
						alert("No se viaja.");
					break;
				}
			break;

			case "Verano":
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
			break;

			case "Otoño":
				switch(destinoIngresado)
				{
					default:
						alert("Se viaja.");
					break;
				}
			break;

			default: //Primavera
				switch(destinoIngresado)
				{
					case "Bariloche":
						alert("No se viaja.");
					break;

					default:
						alert("Se viaja.");
					break;
				}
			break;
		}
}//FIN DE LA FUNCIÓN