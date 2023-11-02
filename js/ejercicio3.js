let frase = "";
let fraseConcatenada = "";
let i = 0;
do {
  i++;
  frase = prompt("Ingrese una frase");
  fraseConcatenada += frase + "-"

} while (confirm("¿Desea ingresar otra frase?"));
document.write(fraseConcatenada);
