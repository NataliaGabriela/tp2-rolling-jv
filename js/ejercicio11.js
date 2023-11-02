edadUno = parseInt(prompt('Ingrese su edad'));
nombreUno = prompt('Ingrese su nombre');
edadDos = parseInt(prompt('Ingrese su edad'));
nombreDos = prompt('Ingrese su nombre');
edadTres = parseInt(prompt('Ingrese su edad'));
nombreTres = prompt('Ingrese su nombre');
maximo = Math.max(edadUno, edadDos, edadTres);
switch (maximo) {
    case edadUno:
        document.write(`El mayor es ${nombreUno}, con ${edadUno} años`);
        break;
    case edadDos:
        document.write(`El mayor es ${nombreDos}, con ${edadDos} años`);
        break;
    case edadTres:
        document.write(`El mayor es ${nombreTres}, con ${edadTres} años`);
        break;
}


