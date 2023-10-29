document.addEventListener("DOMContentLoaded", function() {
    var botonProcesarPedido = document.getElementById("procesarPedido");
    botonProcesarPedido.addEventListener("click", calcularPrecio);

    function validacionTexto(){
    if (nombre.value.trim() == "" || direccion.value.trim()=="" || telefono.value.trim()=="" || email.value.trim()=="") {
        alert('[ERROR] Debe rellenar todos los campos');
        return false; 
    }
}
    function calcularPrecio() {
        var tamaño = document.querySelector('input[name="tamaño"]:checked');
        var ingredientes = document.querySelectorAll('input[name="ingredientes"]:checked');
        var precioTotalElement = document.getElementById("precioTotal");

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




