

const productos = [
    {
        nombre:'Aceite de Lavanda',
        origen: 'Uruguay',
        volumen: 30,
        stock: true,
        precio: 60,
    },
    {
        nombre:'Aceite de Naranja',
        origen: 'Uruguay',
        volumen: 30,
        stock: true,
        precio: 80,
    },
    {
        nombre:'Aceite de Geranio',
        origen: 'Argentina',
        volumen: 30,
        stock: true,
        precio: 120,
    }
];

const usuario ={
    usuario: "admin",
    contrasenia: "1234"
}

const mostrarProductos = ( ) => {

    let mensaje = "Productos Disponibles: \n";

    productos.forEach ((producto) => {
        mensaje += `\n Nombre: ${producto.nombre} \n Origen: ${producto.origen} \n Volumen: ${producto.volumen} \n Precio: ${producto.precio} Pesos UY. \n----------------------------\n`;
    });
    alert(mensaje);
}


const agregarProducto = () => {


    const username = prompt('Nombre de usuario.');
    const password = prompt('Contraseña.');

    if(username ===usuario.usuario && password=== usuario.contrasenia){
        alert ('Bienvenido');

        const obternerNombre = () =>{
            let nombre = prompt('Ingresa Nombre del producto, gracias.');
            if(nombre==''){
                alert('Complete el Nombre por favor.');
                return obternerNombre()
            }
            return nombre;
        }
        const obternerOrigen = () =>{
            let origen = prompt('Ingrese el Origen del producto.');
            if(origen=='') {
                alert('Complete el origen por favor');
                return obternerOrigen()
            }
            return origen;
        }
        const obternerVolumen = () =>{
            let volumen = prompt('Ingrese el Volumen del producto en ml. \n Ejemplo: 50');
            if(volumen==''){
                alert('Complete el volumen por favor');
                return obternerVolumen()
            }
            return volumen;
        }
        const obternerPrecio = () =>{
            let precio = prompt('Ingrese el Precio en pesos UY.');
            if(precio==''){
                alert('Coloque el precio por favor');
                return obternerPrecio()
            }
            precio = parseFloat(precio);
            if(isNaN(precio)){
                alert('Por favor, ingrese un precio válido.');
                return obternerPrecio();
            }

            const precioConDescuento = precio * 0.9;

            console.log(precioConDescuento);
            
            return precioConDescuento;
            //return precio;
        }
    
        let nombre = obternerNombre();
        let origen = obternerOrigen();
        let volumen = obternerVolumen();
        let precio = obternerPrecio();
    
        const nuevoProducto ={
            nombre:nombre,
            origen:origen,
            volumen:volumen,
            precio:precio,
        };
    
        productos.push(nuevoProducto);
    
        mostrarProductos();
    } else {
        alert('Usuario o contraseña incorrecto. Intente nuevamente');
    }
}

const opcionesMenu = [
    {numero:"1", nombre: "Agregar Producto", function: agregarProducto},
    {numero:"2", nombre: "Mostrar Productos disponibles", function: mostrarProductos},
    {numero:"3", nombre: "Salir", function:null}
];
const menu =() => {
    let opciones = "";
    for (const option of opcionesMenu){
        opciones += `${option.numero} - ${option.nombre}\n`;
    }

    const seleccionarOpcion = prompt(`Selecciona una opcion: \n ${opciones}`);
    const seleccion = opcionesMenu.find(opcion => opcion.numero === seleccionarOpcion);
    if(seleccion){
        if(seleccion.function){
            seleccion.function();
        } else {
            alert(`Seleccionaste: ${seleccion.nombre}`);
        }
        if(seleccion.numero !== "3") {
            menu();
        } else{
            alert('Hasta luego.');
        }

    } else{
        alert('Por Favor selecciona una opción correcta.');
        menu();
    }
}

menu();