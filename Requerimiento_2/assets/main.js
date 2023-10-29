
//creamos este evento para que la funcion se ejecute una vez el html se haya cargado completamente.
document.addEventListener("DOMContentLoaded", function() {
    var botonProcesarPedido = document.getElementById("procesarPedido");//obtenemos el valor procesar pedido y se le asigna la funcion botonProcesarPedido
    botonProcesarPedido.addEventListener("click", calcularPrecio);///agregamos el boton click y se le pasa la funcion calcularPrecio

    
    function calcularPrecio() {
       //// Se verifica que los campos nombre,direccion,telefono y email estan  completados, en el caso de que esten vacios salta el error (debe rellenar los campos)
        if (nombre.value.trim() == "" || direccion.value.trim()=="" || telefono.value.trim()=="" || email.value.trim()=="") {
            alert('[ERROR] Debe rellenar todos los campos');
            return false;
        }
    
        var tamaño = document.querySelector('input[name="tamaño"]:checked');//obtenemos el valor de la variable tamaño.
        var ingredientes = document.querySelectorAll('input[name="ingredientes"]:checked'); //obtenemos el valor de los ingredientes seleccionados. 
        var precioTotalElement = document.getElementById("precioTotal");//Obtenemos el elemento precioTotal

    
       //- if--En caso de que se haya seleccionado al menos un tamaño y recorremos los ingrediente para saber si al menos uno ha sido elegido, se le suma el valor de cada ingrediente
       //mas el del temaño y se muestra el precio total en el elemento precioTotal.
       //Si no se ha seleccionado un tamaño o algun ingrediente, sale el alert(Por favor, seleccione al menos un tamaño y un ingrediente.")

        if (tamaño && ingredientes.length > 0) {
            let precio = parseInt(tamaño.value);
            
    
            for (let ingrediente of ingredientes) {
                precio += parseInt(ingrediente.value);
            }

            precioTotalElement.textContent = precio + " €";
        } else {
            precioTotalElement.textContent = "0 €";
            alert("Por favor, seleccione al menos un tamaño y un ingrediente.");
        }
    }
});