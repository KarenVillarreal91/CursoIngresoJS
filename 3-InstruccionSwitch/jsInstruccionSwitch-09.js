function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var tarifaBase = 15000;
	var tarifaTotal;
	
		estacionIngresada = txtIdEstacion.value;
		destinoIngresado = txtIdDestino.value;

		tarifaBase = parseInt(tarifaBase);
		tarifaTotal = parseInt(tarifaTotal);

		switch(estacionIngresada)
		{
			case "Invierno":
				switch(destinoIngresado)
				{
					case "Bariloche":
						tarifaTotal = tarifaBase * 1.20;

						alert("La tarifa a pagar +20% es de: "+tarifaTotal+".");
					break;

					case "Cataratas":
					case "Cordoba":
						tarifaTotal = tarifaBase - (tarifaBase * 0.10);

						alert("La tarifa a pagar -10% es de: "+tarifaTotal+".");
					break;

					case "Mar del plata":
						tarifaTotal = tarifaBase - (tarifaBase * 0.20);

						alert("La tarifa a pagar -20% es de: "+tarifaTotal+".");
					break;
				}
			break;

			case "Verano":
				switch(destinoIngresado)
				{
					case "Bariloche":
						tarifaTotal = tarifaBase - (tarifaBase * 0.20);
							
						alert("La tarifa a pagar -20% es de: "+tarifaTotal+".");
					break;
		
					case "Cataratas":
					case "Cordoba":
						tarifaTotal = tarifaBase * 1.10;
		
						alert("La tarifa a pagar +10% es de: "+tarifaTotal+".");
					break;
		
					case "Mar del plata":
						tarifaTotal = tarifaBase * 1.20;
		
						alert("La tarifa a pagar +20% es de: "+tarifaTotal+".");
					break;
				}
			break;

			default:
				switch(destinoIngresado)
				{
					case "Bariloche":
					case "Cataratas":
					case "Mar del plata":		
						tarifaTotal = tarifaBase * 1.10;
						
						alert("La tarifa a pagar +10% es de: "+tarifaTotal+".");
					break;
		
					case "Cordoba":
						alert("La tarifa a pagar es de: "+tarifaBase+".");
					break;
					}
			break;
		}
}//FIN DE LA FUNCIÓN