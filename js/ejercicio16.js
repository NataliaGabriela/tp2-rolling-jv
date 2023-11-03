const textoIngresado = prompt("Ingrese un texto");
const textoMinusculas = textoIngresado.toLowerCase();
let cadenaInvertida = '';

for (let i = textoMinusculas.length; i >= 0; i--) {
    cadenaInvertida = cadenaInvertida + textoMinusculas.charAt(i);
    
}
document.write(cadenaInvertida);

