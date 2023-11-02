const filas = parseInt(prompt("Ingrese un numero de filas"));
const columnas = parseInt(prompt("Ingrese un numero de columnas"));
let totalFilasporColumnas = filas * columnas;
document.write(`<table><tbody>`);

for (let indiceFilas = 0; indiceFilas < filas; indiceFilas++) {
  document.write(`<tr>`);
  for (let indiceColumnas = 0; indiceColumnas < columnas; indiceColumnas++) {
    document.write(`<td>${totalFilasporColumnas}</td>`);
    totalFilasporColumnas--;
  }
 
  document.write(`</tr>`);
}

document.write(`</tbody></table>`);
