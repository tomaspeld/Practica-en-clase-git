const inquirer = require('inquirer')

let opciones = [{

    name: 'nombre',
    type: 'input',
    message: 'Ingresa tu nombre',
}, 

{
    name: 'telefono',
    type: 'input',
    message: 'Ingresa tu numero de telefono',
},

{
    name: 'gusto',
    type: 'rawlist',
    message: 'Elegi el gusto de la pizza',
    choices: ['Muzzarella', 'Jamon y Morron', 'Calabresa', '4 Quesos'],
}, 

{
    name: 'tamanio',
    type: 'list',
    message: 'Elegi el tamaño de la pizza',
    choices: ['Individual', 'Mediana', 'Grande'],
}, 

{
    name: 'con_bebida',
    type: 'confirm',
    default: false
},

{
    name: 'bebida',
    type: 'list',
    message: 'Elegi la bebida',
    choices: ['Coca', 'Sprite', 'Fanta', 'Agua'],
    when: function(respuesta) {
        return respuesta.con_bebida
    }
}, 

{
    name: 'gustos_de_empanadas',
    type: 'checkbox',
    message: 'Elegi los gustos de las empanadas',
    choices: ['Jamon y Queso', 'Cebolla y Queso', 'Caprese', 'Roquefort', 'Verdura', 'Humita'],
}, 

{
    name: 'para_llevar',
    type: 'confirm',
    message: 'La pizza es para llevar ?',
    default: false
    
},

{
    name: 'direccion',
    type: 'input',
    message: 'Ingresa tu direccion',
    when: function(respuestas) {
        return respuestas.para_llevar
    },
    validate: function(respuesta) {
        if (respuesta.length < 5) {
            return 'Dejanos saber tu direccion para enviarte la pizza'
        }
        return true
    }
}, 

{
    name: 'cliente_habitual',
    type: 'confirm',
    default: false
}


]

inquirer

.prompt(opciones)

.then(function(respuestas) {
    
    console.log(respuestas);
    console.log(" === Resumen de tu pedido ===");
    console.log(" Tus datos son - Nombre: " + respuestas.nombre +  " Teléfono: " + respuestas.telefono );
    

    let precio_delivery = 0

    if(respuestas.para_llevar) {
        precio_delivery = 20;
    console.log("Tu pedido será entregado en: " + respuestas.direccion );

    }else{
        console.log( "Nos indicaste que pasarás a retirar tu pedido" );
    }

    console.log(" === Productos solicitados ===");
    console.log("Pizza " + respuestas.gusto);
    console.log("Tamaño " + respuestas.tamanio);
    

    let precio_bebida = 0

    if(respuestas.bebida) {
        precio_bebida = 80

        console.log("Bebida " + respuestas.bebida);
    }

    if(respuestas.cliente_habitual){


    console.log("Tus tres empanadas de regalo serán de: ");
    console.log("Jamon y Queso" );
    console.log("Cebolla y Queso" );
    console.log("Caprese" );
    }
   

    console.log("===============================");

    let precio_pizza;

    let descuento;


    let obtener_descuento = function(tamanio, bebida) { 

        if(! bebida){
            return 0
        }

        let descuentos = function() {

            "individual" : 3,
            "imediana" : 5,
            "grande" : 8
        }


        
    }


})
