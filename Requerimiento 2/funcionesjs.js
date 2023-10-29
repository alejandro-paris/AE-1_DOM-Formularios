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
    var ingrediente=[]
    ingrediente = document.getElementsByName("ingrediente")
    for(var j=0;j<ingrediente.length;i++){
        if (ingrediente[j].checked){
            alert('Todo es correcto, puede enviar su pedido')
            return true;
        }else {
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

    let preciotomate=0;
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
    }else precioverdura=0;

    let preciototal = preciotamaño + preciotomate + precioqueso + preciocarne + precioverdura

    return alert(("El precio total es: "+preciototal))

}


//ENVIO INFORMACION FORMULARIO
window.onload = function(){
    form.onsubmit = validacionformulario; 
    enviar.onclick = calculoPedido;
                                    
}

