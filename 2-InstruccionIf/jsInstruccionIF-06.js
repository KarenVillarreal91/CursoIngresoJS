function mostrar()
{
	//tomo la edad  
	var edad;
	 edad = document.getElementById('txtIdEdad').value;
	 if (edad < 18 && edad > 12)
	 {
		 alert("Usted es adolescente.");
	 }
	 if (edad > 17)
	 {
		 alert("Usted es mayor de edad.");
	 }
	 if (edad < 13)
	 {
		 alert("Usted es un niño.");
	 }

}//FIN DE LA FUNCIÓN