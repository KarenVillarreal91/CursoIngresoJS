function mostrar()
{
	//tomo la edad  
	var edad;
	var estadocivil;
		edad = document.getElementById('txtIdEdad').value;
		edad = parseInt(edad);
		estadocivil = document.getElementById('estadoCivil').value;

			if (edad < 18 && estadocivil != "Soltero")
			{
				alert("Es muy pequeño para NO ser soltero.");
			}


}//FIN DE LA FUNCIÓN