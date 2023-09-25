let nombreUser = prompt ('Ingresa tu Nombre')
let apellidoUser = prompt ('Ingresa tu Apellido')
let Usuario = prompt('Ingresa un nombre de Usuario');

console.log (nombreUser)
console.log (apellidoUser)
console.log (Usuario)

function login() {
    let Usuario = prompt('Ingresa un nombre de Usuario');
    let Contraseña = prompt('Ingresa una nueva contraseña');
    if (Contraseña===''){
    do{
        alert('Ingresa tu Contraseña')
        Contraseña = prompt('Repita su nueva contraseña');
    }while (Contraseña==='')
}
    let intentos = 3;
    let ingresar = false;
    for (let i = intentos; i > 0; i--) {
        let Ncontraseña = prompt('Ingresá nuevamente tu contraseña, Tenés ' + i + ' intentos.');
        if (Ncontraseña === Contraseña) {
        alert('Bienvenido/a ' + nombreUser +  apellidoUser + ' a IKKA Aceites Esenciales');
            ingresar = true;
            break;
        } else {
            alert('Error, tienes ' + (i - 1) + ' intentos.');
        }
    }
    return ingresar;
}


if (login()){
    let opcion= prompt('Quiere ver aceites para:\n1. Mujer \n2. Hombre \n3. Bebe \n4. Toda la familia');
    function compraAceite(opcion){
        let aceites
        switch(opcion){
            case '1':
                aceites='Mujer';
                break;
            case '2':
                aceites='Hombre';
                break;
            case '3':
                aceites='bebe';
                break;
            case '4':
                aceites = 'Toda la familia';
                break;
            default:
                if (opcion===""){
                    alert('Debes seleccionar una opción');
                }else{
                    alert('Debes seleccionar una de nuestras 4 opciones');
                    };
                    do{
                        opcion=prompt('Elije que Aceites escenciales quieres ver : \n1. Mujer \n2. Hombre \n3. Bebe \n4. Toda la familia')
                        if (opcion==1){
                            aceites='Mujer';
                            break;
                        }else if (opcion==2){
                            aceites='Hombre';
                            break;
                        } else if (opcion==3){
                            aceites='Bebe';
                            break;
                        } 
                        else if (opcion==4){
                            aceites='Toda la familia';
                            break;
                        } else{
                            alert('Error, Selecciona una de nuestras 4 opciones.')
                        }
                    } while(opcion==="" || opcion !==1 || opcion !== 4);
        }
        return aceites
    }
let aceites= compraAceite(opcion);
alert('Los aceites seleccionados son para : ' + aceites)
} else{
    alert('Las Contraseñas no coinciden, Intentelo mas tarde.')
}