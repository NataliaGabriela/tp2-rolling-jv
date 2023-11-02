let numeros = 0;
let suma = 0;
let i = 0;
do {
  i++;
  numeros = parseInt(prompt("Ingrese un número"));
  if(isNaN(numeros)){
    alert('No es un número');
  }else{
    suma+= numeros;
  }
  

} while (confirm("¿Desea ingresar otra número?"));
document.write(`Suma: ${suma}`);