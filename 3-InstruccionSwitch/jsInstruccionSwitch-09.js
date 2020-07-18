function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var tarifaTotal;
	
		estacionIngresada = txtIdEstacion.value;
		destinoIngresado = txtIdDestino.value;

		tarifaTotal = parseInt(tarifaTotal);

		if(estacionIngresada == "Invierno")
		{
			switch(destinoIngresado)
				{
					case "Bariloche":

						tarifaTotal = 15000 * 1.20;

						alert("La tarifa a pagar +20% es de: "+tarifaTotal+".");
					break;

					case "Cataratas":
					case "Cordoba":

						tarifaTotal = 15000 - (15000 * 0.10);

						alert("La tarifa a pagar -10% es de: "+tarifaTotal+".");
					break;

					case "Mar del plata":

						tarifaTotal = 15000 - (15000 * 0.20);

						alert("La tarifa a pagar -20% es de: "+tarifaTotal+".");
					break;
				}
		}
		if(estacionIngresada == "Verano")
		{
			switch(destinoIngresado)
				{
					case "Bariloche":

						tarifaTotal = 15000 - (15000 * 0.20);
					
						alert("La tarifa a pagar -20% es de: "+tarifaTotal+".");
					break;

					case "Cataratas":
					case "Cordoba":

						tarifaTotal = 15000 * 1.10;

						alert("La tarifa a pagar +10% es de: "+tarifaTotal+".");
					break;

					case "Mar del plata":

						tarifaTotal = 15000 * 1.20;

						alert("La tarifa a pagar +20% es de: "+tarifaTotal+".");
					break;
				}
		}
		if((estacionIngresada == "Otoño") || (estacionIngresada == "Primavera"))
		{
			switch(destinoIngresado)
				{
					case "Bariloche":
					case "Cataratas":
					case "Mar del plata":

						tarifaTotal = 15000 * 1.10;
					
						alert("La tarifa a pagar +10% es de: "+tarifaTotal+".");
					break;

					case "Cordoba":

						tarifaTotal = 15000;

						alert("La tarifa a pagar es de: "+tarifaTotal+".");
					break;
				}
		}
}//FIN DE LA FUNCIÓN