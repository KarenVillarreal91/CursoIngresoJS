function mostrar()
{
	var destinoIngresado;
	
		destinoIngresado = txtIdDestino.value;

		switch(destinoIngresado)
		{
			case "Bariloche":
			case "Cordoba": //Está mal el html (Ushuaia)
				alert("Hace frío.");
			break;

			case "Cataratas":
			case "Mar del plata":
				alert("Hace calor.");
			break;
		}
}//FIN DE LA FUNCIÓN