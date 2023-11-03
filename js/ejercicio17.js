const textoIngresado = prompt("Ingrese un texto");
const textoMinusculas = textoIngresado.toLowerCase();
let i = 0;
let vocal = false;
let contadorNoVocales = 0;

while(i < textoMinusculas.length && vocal == false) {
    switch (textoMinusculas.charAt(i)) {
        case "a":
          document.write(`La vocal 'a'esta en la posición ${i}`);
          vocal = true;
          break;
        case "e":
            document.write(`La vocal 'e' esta en la posición ${i}`);
            vocal = true;
          break;
    
        case "i":
            document.write(`La vocal 'i' esta en la posición ${i}`);
            vocal = true;
          break;
        case "o":
            document.write(`La vocal 'o' esta en la posición ${i}`);
            vocal = true;
          break;
    
        case "u":
            document.write(`La vocal 'u' esta en la posición ${i}`);
            vocal = true;
          break;
        default:
            contadorNoVocales++;
          break;
      }
      i++;
}
if(contadorNoVocales === textoMinusculas.length){
    document.write('No hay vocales');
}