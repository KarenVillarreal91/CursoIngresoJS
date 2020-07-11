function mostrar()
{
	//tomo el mes
	var mesDelAño = txtIdMes.value;
		switch (mesDelAño)
			{
				case "Julio":
					case "Agosto":
						alert ("Abrigate que hace frío.");
					break;
				
				case "Septiembre":
					case "Octubre":
						case "Noviembre":
							alert ("Ya pasamos el frío, ahora el calor.");
						break;
				
				default:
					alert ("Falta para el invierno.");
				break;
			}
}//FIN DE LA FUNCIÓN