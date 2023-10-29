

function validacion(){
/** 
    // Validacion de los campos texto
    datosPersonales = document.getElementsByClassName("direccion")
    const tiposInputAValidar = ["text", "email", "tel"];
    for(let inp of datosPersonales){
        if (tiposInputAValidar.includes(inp.type)) {
            if (inp.value.trim() == "") {
                alert(`ERROR. Todos los campos de texto tienen que estar cumplimentados. Campo pendiente: ${inp.name}`);
                return false;
            }
        }
    }
    */

    // Validacion de los input radio
    tamano = document.getElementsByName("tamano");
    var seleccionado = false;
    for(var i = 0; i < tamano.length; i++){
        if(tamano[i].checked){
            seleccionado = true;
            break;
        }
    }
    if(!seleccionado) {
        alert('Debe seleccionar el tamaño de la pizza');
        return false;
    }

    //Validacion checkbox
    ingr = document.getElementsByName("ingrediente");
    var seling = false;
    for(var i = 0; i < ingr.length; i++){
        if(ingr[i].checked){
            seling = true;
            break;
        }
    }
    if(!seling) {
        alert('Debe seleccionar al menos un ingrediente');
        return false;
    }

    procesarPedido();
}
    //Calcular precio

    function procesarPedido() {
        // Obtener el tamaño seleccionado

        tamanoP = document.getElementById("pequeña")
        tamanoM = document.getElementById("mediana")
        tamanoG = document.getElementById("grande")
        let precioBase = 0;
        if (tamanoP.checked == true)
            precioBase = 5;
        else if (tamanoM.checked == true)
            precioBase = 10;
        else if (tamanoG.checked == true)
            precioBase = 15;
        
        return precioBase;
    }
        // Mostrar el resultado
        var resultadoElemento = document.getElementById("resultado");
        resultadoElemento.textContent = `El precio total del pedido es: ${precioBase}€`;
    


window.onload = function (){
    pedido.onsubmit = validacion;
    
    
}