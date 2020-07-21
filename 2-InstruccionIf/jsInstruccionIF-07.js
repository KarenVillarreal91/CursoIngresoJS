function mostrar()
{
	//tomo la edad  
	var edad;
	var estadocivil;

		edad = txtIdEdad.value;
		estadocivil = estadoCivil.value;
		
		edad = parseInt(edad);
		

			if (edad < 18 && estadocivil != "Soltero")
			{
				alert("Es muy pequeño para NO ser soltero.");
			}


}//FIN DE LA FUNCIÓN