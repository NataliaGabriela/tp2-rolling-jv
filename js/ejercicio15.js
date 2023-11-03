const textoIngresado = prompt("Ingrese un texto");
const textoMinusculas = textoIngresado.toLowerCase();
let numeroVocales = 0;

for (let i = 0; i < textoIngresado.length; i++) {
  switch (textoMinusculas.charAt(i)) {
    case "a":
      numeroVocales++;
      break;
    case "e":
      numeroVocales++;
      break;

    case "i":
      numeroVocales++;
      break;
    case "o":
      numeroVocales++;
      break;

    case "u":
      numeroVocales++;
      break;
  }
}

document.write(`Total de vocales: ${numeroVocales}`)