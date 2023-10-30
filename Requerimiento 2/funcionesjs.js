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
    ingrediente = document.getElementsByName("ingrediente")
    var select = false;
    for(var j=0;j<ingrediente.length;i++){
        if (ingrediente[j].checked){
            alert('Todo es correcto, puede enviar su pedido')
            select= true;
            break;
        }if(!select) {
            alert('[ERROR] Debe seleccionar algun ingrediente');
            return false;
        }
    }  
}

//CALCULO PEDIDO
function calculoPedido(){
    let preciotamaño = 0;
    switch(tamaño.value){
        case tamaño_pequeña: 
                preciotamaño=5;
                break;
        case tamaño_mediana: 
                preciotamaño=10;
                break;
        case tamaño_grande:
                preciotamaño=15;
    }

    var ingredientes = document.querySelectorAll('input[name="ingrediente"]:checked');
    for(ele of ingredientes){
        if (ele.checked)
        precioingredientes +=1;
    }
   /* let preciotomate = 0;
    if (ingrediente.value.checked == "tomate"){
        preciotomate=1;
    }else preciotomate=0;

    let precioqueso=0;
    if (ingrediente.value.checked == "queso"){
        precioqueso=1;
    }else precioqueso=0;

    let preciocarne=0;
    if (ingrediente.value.checked == "carne"){
        preciocarne=1;
    }else preciocarne=0;

    let precioverdura=0;
    if (ingrediente.value.checked == "verdura"){
        precioverdura=1;
    }else precioverdura=0;*/

    let preciototal = preciotamaño + precioingredientes

    return preciototal;

}
function generarTextoPrecio() {

   

    //Generamos el nodo que contiene el precio actual de la pizza y lo insertamos.
    const node_precio = document.createElement("p");
    node_precio.id = "precio_pizza";
    const texto_precio = document.createTextNode(`El precio de tu pedido es ${calculoPedido()} €`);

    node_precio.appendChild(texto_precio);
    form.appendChild(node_precio);

}

//ENVIO INFORMACION FORMULARIO
window.onload = function(){
    procesar.onclick = generarTextoPrecio;
    procesar.onclick = calculoPedido;
    form.onsubmit = validacionformulario; 
    
                                    
}

