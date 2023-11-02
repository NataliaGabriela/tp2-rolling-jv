let i=0;


do {
    i++;
    const numero = parseInt(prompt('Ingrese su DNI'));
    if(isNaN(numero)){
        alert('No es un número');
      }else if (numero >= 0 && numero <= 99999999) {
        const resultado = numero%23;
        switch (resultado) {
            case 0:
                document.write(`Al DNI : ${numero} e corresponde la letra T <br>`);
                
                break;
            case 1:
                document.write(`Al DNI : ${numero} le corresponde la letra R <br>`);
                    
                break;
            case 2:
                document.write(`Al DNI : ${numero} le corresponde la letra W <br>`);
                        
                break;
            case 3:
                document.write(`Al DNI : ${numero} le corresponde la letra A <br>`);
                            
                break;
            case 4:
                document.write(`Al DNI : ${numero} le corresponde la letra G <br>`);
                                
                break;
            case 5:
                document.write(`Al DNI : ${numero} le corresponde la letra M <br>`);
                                    
                break;
            case 6:
                document.write(`Al DNI : ${numero} le corresponde la letra Y <br>`);
                                        
                break;
            case 7:
                document.write(`Al DNI : ${numero} le corresponde la letra F <br>`);
                                            
                break;    
            case 8:
                document.write(`Al DNI : ${numero} le corresponde la letra P <br>`);
                                                
                break; 
            case 9:
                document.write(`Al DNI : ${numero} le corresponde la letra D <br>`);
                                                    
                break; 
            case 10:
                document.write(`Al DNI : ${numero} le corresponde la letra X <br>`);
                break; 
            case 11:
                document.write(`Al DNI : ${numero} le corresponde la letra B <br>`);
                                                            
                break; 
            case 12:
                document.write(`Al DNI : ${numero} le corresponde la letra N <br>`);
                                                                
                break; 
            case 13:
                document.write(`Al DNI : ${numero} le corresponde la letra J <br>`);
                                                                    
                break; 
            case 14:
                document.write(`Al DNI : ${numero} le corresponde la letra Z <br>`);
                                        
                break;
            case 15:
                document.write(`Al DNI : ${numero} le corresponde la letra S <br>`);
                                            
                break;
            case 16:
                document.write(`Al DNI : ${numero} le corresponde la letra Q <br>`);
                                                
                break;    
            case 17:
                document.write(`Al DNI : ${numero} le corresponde la letra V <br>`);
                                                    
                break; 
            case 18:
                document.write(`Al DNI : ${numero} le corresponde la letra H <br>`);
                                                        
                break; 
            case 19:
                document.write(`Al DNI : ${numero} le corresponde la letra L <br>`);
                break; 
            case 20:
                document.write(`Al DNI : ${numero} le corresponde la letra C <br>`);
                                                                
                break; 
            case 21:
                document.write(`Al DNI : ${numero} le corresponde la letra K <br>`);
                                                                    
                break; 
            case 22:
                document.write(`Al DNI : ${numero} le corresponde la letra E <br>`);
                                                                        
                break; 
        

        }
    } else {
        document.write(`El número ${numero} ingresado no está entre 0 y 99999999`);
    }
} while (confirm('¿Desea ingresar otro número?'));
