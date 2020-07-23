function mostrar()
{
	var destinoIngresado;

		destinoIngresado = txtIdDestino.value;

		switch(destinoIngresado)
		{
			case "Bariloche":
				alert("Está en el Oeste.");
			break;

			case "Cataratas":
				alert("Está en el Norte");
			break;

			case "Mar del plata":
				alert("Está en el Este");
			break;

			case "Cordoba": //Está mal el html (Ushuaia)
				alert("Está en el Sur");
			break;
		}
}//FIN DE LA FUNCIÓN