function mostrar()
{
  var primerNombre;
  var segundoNombre;
  var primerPeso;
  var segundoPeso;
  var sumaPeso;
  var promedio;

  do
  {
      primerNombre = prompt("Ingrese su nombre.");
  }while(!isNaN(primerNombre));

  do
  {
      segundoNombre = prompt("Ingrese el nombre de su pareja.");
  }while(!isNaN(segundoNombre));

  do
  {
      primerPeso = prompt("Ingrese su peso.");
  }while(isNaN(primerPeso));

  do
  {
      segundoPeso = prompt("Ingrese su peso.");
  }while(isNaN(segundoPeso));

  sumaPeso = primerPeso + segundoPeso;
  promedio = sumaPeso / 2;

  alert("Ustedes se llaman "+primerNombre+" y "+segundoNombre+". Pesan "+primerPeso+" y "+segundoPeso+" kilos, que sumados son "+sumaPeso+" y el promedio es "+promedio+".");
}
