const textoIngresado = prompt('Ingrese un texto');

textoCambiado = textoIngresado.split('');

document.write(textoCambiado.join('-'));