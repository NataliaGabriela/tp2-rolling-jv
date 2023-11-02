const nota = parseInt(prompt("Ingrese una nota del 0 al 10"));

switch (nota) {
  case 0:

  case 1:

  case 2:
    document.write("Muy Deficiente");
    break;
  case 3:

  case 4:
    document.write("Insuficiente");
    break;

  case 5:

  case 6:
    document.write("Suficiente");
    break;
  case 7:
    document.write("Bien");
    break;
  case 8:

  case 9:
    document.write("Notable");
    break;
  case 10:
    document.write("Sobresaliente");
    break;

  default:
    document.write('Ingrese un nota del 0 al 10');
    break;
}
