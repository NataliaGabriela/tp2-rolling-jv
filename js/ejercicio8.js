const numeroIngresadoXUsuario = parseInt(prompt('Ingrese un numero menor que 50'));

if (numeroIngresadoXUsuario <= 50) {
    for (let i = 1; i <=numeroIngresadoXUsuario; i++) {
    
        for (let j = 1; j <= i; j++) {
            document.write(i);
            
        }
        document.write('<br>')
    }
    
    
}else{
    document.write('Ingrese un numero menor que 50')
}



