

//Preparamos el formulario para cuando tenga botón de enviar
//form.onsubmit = validarInputs;



window.onload = function () {

    /*-- Todas las referencias al DOM que utilizamos --*/
    const form = document.getElementById("form_pedido"),
        t_pequena = document.getElementById("pequena"),
        t_mediana = document.getElementById("mediana"),
        t_grande = document.getElementById("grande"),
        btn_enviar = document.querySelector("#btn-enviar"),
        btn_procesar = document.querySelector("#btn-procesar"),
        ingr = document.querySelectorAll("input[name='ingredientes']"),
        inputs = document.querySelectorAll("input"),
        inputsTamano = document.getElementsByName("tamano");

    /*---*/



    /**
     * Calcula cuál es el precio total en función de las opciones que 
     * ha marcado el usuario en el formulario. 
     * El precio base son: 
     * - 5 (pizza pequeña)
     * - 10 (Piza mediana)
     * - 15 (Pizza grande)
     * 
     * Sobre ese precio se suma +1€ por cada ingrediente seleccionado
     * 
     * No se comprueba si no hay ninguna pizza seleccionada porque
     * ya se valida el formulario antes de enviarlo y porque por defecto
     * se marca la pequeña
     * @returns {int} Devuelve el precio Total
     */
    function comprobarPrecio() {
        let precioTotal = 0;

        if (t_pequena.checked == true)
            precioTotal = 5;
        else if (t_mediana.checked == true)
            precioTotal = 10;
        else
            precioTotal = 15;

        for (ele of ingr) {
            if (ele.checked)
                precioTotal += 1;
        }
        return precioTotal;
    }

    /**
     * Añade un párrafo al final del formulario indicando cuál es el precio
     * del pedido.
     * 
     * Cada vez que se ejecuta, se sustituye el párrafo anterior por el nuevo
     */
    function generarTextoPrecio() {

        //Limpiamos el párrafo donde se encuentra el precio de la pizza
        const precio_pizza = document.querySelector("#precio_pizza")

        if (precio_pizza != null) {
            precio_pizza.parentNode.removeChild(precio_pizza);
        }

        //Generamos el nodo que contiene el precio actual de la pizza y lo insertamos.
        const node_precio = document.createElement("p");
        node_precio.id = "precio_pizza";
        const texto_precio = document.createTextNode(`El precio de tu pedido es ${comprobarPrecio()} €`);

        node_precio.appendChild(texto_precio);
        form.appendChild(node_precio);

    }

    /**
     * Se validan todos los inputs del formulario: 
     * - Type: texto, tel, email: Se comprueba que no están vacíos
     * - Radio: Se comprueba que hay una opción marcada.
     * @returns {boolean} Devuelve false si la validación no se cumple y
     *                    true si lo damos por validado
     */
    function validarInputs() {
        //Validamos los inputs de tipo texto email y teléfono
        const tiposInputAValidar = ["text", "email", "tel"];
        for (let inp of inputs) {
            if (tiposInputAValidar.includes(inp.type)) {
                if (inp.value.trim() == "") {
                    alert(`ERROR. Todos los campos de texto tienen que estar cumplimentados. Campo pendiente: ${inp.name}`);
                    return false;
                }
            }
        }

        //Validamos los inputs radio
        let rad_select = false
        for (let rad of inputsTamano) {
            if (rad.checked)
                rad_select = true;
            break;
        }
        if (!rad_select)
            return false;

        // Si no hemos devuelto false antes. Damos el formulario por validado
        return true;
    }

    //Lanzmos la comrpobación al pulsar el botón Procesar
    btn_procesar.addEventListener("click", function () {
        generarTextoPrecio();
        validarInputs(); //De momento añadimos aquí la validación
    })

    //Prearamos el formulario para cuando tenga botón ENVIAR
    //form.onsubmit = validarInputs;
}