function mostrar()
{
	//tomo el mes
	var mesDelAño;
	
		mesDelAño = txtIdMes.value;
	
		switch(mesDelAño)
			{
				case "Febrero":
					alert ("Este mes no tiene más de 29 días.");
				break;

				default:
					alert ("Este mes tiene 30 o más días.");
				break;
			}
}//FIN DE LA FUNCIÓN