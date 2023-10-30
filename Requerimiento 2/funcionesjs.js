//VALIDACIÓN FORMULARIO

function validacionformulario() {

    //validación nombre, dirección, teléfono y email
    if (nombre.value.trim() == "" || direccion.value.trim()=="" || telefono.value.trim()=="" || email.value.trim()=="") {
        alert('[ERROR] Debe rellenar todos los campos');
        return false;
    }
    //validación tamaño pizza (radio button)
    tamaño = document.getElementsByName("tamaño");
    var seleccionado = false;
    for(var i=0; i<tamaño.length; i++) {
        if(tamaño[i].checked) {
            seleccionado = true;
            break;
        }
    }
    if(!seleccionado) {
        alert('[ERROR] Debe seleccionar un tamaño de pizza');
        return false;
    }

    //validación elección al menos un ingrediente (checkbox)
    var ingredientes = document.querySelectorAll('input[name="ingrediente"]:checked'); 
    var precioTotalElement = document.getElementById("precioTotal");
    var precioingredientes = 0;

    if (ingredientes.length > 0) {

        for (let ingr of ingredientes) {
            precioingredientes += parseInt(ingr.value);
        }
    } else {
        precioTotalElement.textContent = "0 €";
        alert("Por favor, seleccione al menos un ingrediente.");
    }
}

//CALCULO PEDIDO
function calculoPedido(){
    var pequeña = document.getElementById("pequeña")
    var mediana = document.getElementById("mediana")
    var grande = document.getElementById("grande")
    var preciotamaño = 0;
    if (pequeña.checked == true){
        preciotamaño = 5;
    } else if (mediana.checked == true){
        preciotamaño = 10;
    } else if (grande.checked == true){
        preciotamaño = 15;
    }

    var ingredientes = document.querySelectorAll('input[name="ingrediente"]:checked');
    var precioingredientes = 0;
    for(ele of ingredientes){
        if (ele.checked)
        precioingredientes +=1;
    }

    let preciototal = preciotamaño + precioingredientes

    return preciototal;

}
function generarTextoPrecio() {

    //Generamos el nodo que contiene el precio actual de la pizza y lo insertamos.
    const node_precio = document.createElement("p");
    node_precio.id = "precio_pizza";
    const texto_precio = document.createTextNode(`El precio de tu pedido es ${calculoPedido()} €`);

    node_precio.appendChild(texto_precio);
    ptotal.appendChild(node_precio);

}

function borrarformulario(){
    let parrafo = document.getElementById("ptotal")
    parrafo.style.display = "none";
}

//ENVIO INFORMACION FORMULARIO
window.onload = function(){
    procesar.addEventListener("click",calculoPedido)
    procesar.addEventListener("click",generarTextoPrecio)
    procesar.addEventListener("click",validacionformulario) 
    reset.addEventListener("click",borrarformulario)
    
                                    
}

