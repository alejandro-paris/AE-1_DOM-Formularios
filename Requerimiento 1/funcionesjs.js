function cargar(){

    //CREACIÓN CABECERA
    var cabecera = document.createElement("h1");  //creación nodo elemento
    cabecera.id = "cabecera";

    var cabeceraTexto = document.createTextNode("AGENDA DE CONTACTOS");   //creación nodo texto
    cabeceraTexto.id = "cabeceraTexto";

    var cabecera2 = document.createElement ("h2");
    cabecera2.id = "cabecera2";

    var cabecera2Texto = document.createTextNode("Utiliza esta agenda para facilitarte la vida");
    cabecera2Texto.id = "cabecera2Texto";

        //UNION DE NODOS ELEMENTO CON SU TEXTO
        cabecera.appendChild(cabeceraTexto);
        cabecera2.appendChild(cabecera2Texto);

        //AÑADIR NODOS ELEMENTO AL DOM
        div.appendChild(cabecera);
        div.appendChild(cabecera2)
        document.body.appendChild(div);


    //CREACION DE PARRAFOS
    var parrafo = document.createElement("p");
    parrafo.id = "parrafo";

    var parrafoTexto = document.createTextNode("A continuación verás una tabla con los últimos registros");
    parrafoTexto.id = "parrafoTexto";

    parrafo.appendChild(parrafoTexto);
    div.appendChild(parrafo);
    document.body.appendChild(div);

    
    //CREACION LISTADO AGENDA
        //creamos un nuevo div para añadir la tabla de registros
        var div2 = document.createElement("div");
        div2.id = "div2";
        document.body.appendChild(div2);

        //creación de tabla y sus columnas (cabecera tabla)
        let tabla = document.createElement("table");
        tabla.setAttribute("border", "1");
        tabla.id = "tabla";
        div2.appendChild(tabla);

        let trCabecera = document.createElement("tr");
        trCabecera.id = "trCabecera";
                let th1 = document.createElement("th");
                let th2 = document.createElement("th");
                let th3 = document.createElement("th");
                let th4 = document.createElement("th");
                let th5 = document.createElement("th");
                let th6 = document.createElement("th");
                let th7 = document.createElement("th");
                let th8 = document.createElement("th");
                let th9 = document.createElement("th");
                let th10 = document.createElement("th");
                let th11 = document.createElement("th");

                let texto1 = document.createTextNode("Nombre completo");
                let texto2 = document.createTextNode("DNI");
                let texto3 = document.createTextNode("Dirección");
                let texto4 = document.createTextNode("Teléfono");
                let texto5 = document.createTextNode("Cumpleaños");
                let texto6 = document.createTextNode("Comida favorita");
                let texto7 = document.createTextNode("Lugar de encuentro");
                let texto8 = document.createTextNode("Foto1");
                let texto9 = document.createTextNode("Foto2");
                let texto10 = document.createTextNode("Ámbito");
                let texto11 = document.createTextNode("Descripción");

                th1.appendChild(texto1);
                th2.appendChild(texto2);
                th3.appendChild(texto3);
                th4.appendChild(texto4);
                th5.appendChild(texto5);
                th6.appendChild(texto6);
                th7.appendChild(texto7);
                th8.appendChild(texto8);
                th9.appendChild(texto9);
                th10.appendChild(texto10);
                th11.appendChild(texto11);

                trCabecera.appendChild(th1);
                trCabecera.appendChild(th2);
                trCabecera.appendChild(th3);
                trCabecera.appendChild(th4);
                trCabecera.appendChild(th5);
                trCabecera.appendChild(th6);
                trCabecera.appendChild(th7);
                trCabecera.appendChild(th8);
                trCabecera.appendChild(th9);
                trCabecera.appendChild(th10);
                trCabecera.appendChild(th11);
                
                tabla.appendChild(trCabecera);

        //generamos los registros ya guardados
            let contactos = [
                {nombre : 'Carlos Sanchez Pardo',
                dni : '111222333A',
                direccion : 'Calle Pez 8',
                telefono : '666111222',
                cumpleaños : 'invierno',
                comida : 'peruana',
                lugar : 'trabajo',
                foto1 : 'xxx',
                foto2 : 'xxx',
                ambito : 'compañero_trabajo',
                descripcion : 'enérgico e introvertido'},
                {nombre : 'Sara Fernandez Perez',
                dni : '444555666B',
                direccion : 'Avenida Castejon 125',
                telefono : '666333444',
                cumpleaños : 'primavera',
                comida : 'mexicana',
                lugar : 'gimnasio',
                foto1 : 'xxx',
                foto2 : 'xxx',
                ambito : 'compañero_gimnasio',
                descripcion : 'alegre y risueña'},
                {nombre : 'Sergio Garrido López',
                dni : '777888999C',
                direccion : 'Calle Sinflor 55',
                telefono : '666555666',
                cumpleaños : 'verano',
                comida : 'italiana',
                lugar : 'barrio',
                foto1 : 'xxx',
                foto2 : 'xxx',
                ambito : 'vecino',
                descripcion : 'quejica y escandaloso'},
            ]

        //añadimos la fila para cada contacto registrado 
        for (let contacto of contactos){
                    let tr = document.createElement("tr");
                    let td1 = document.createElement("td");
                    let td2 = document.createElement("td");
                    let td3 = document.createElement("td");
                    let td4 = document.createElement("td");
                    let td5 = document.createElement("td");
                    let td6 = document.createElement("td");
                    let td7 = document.createElement("td");
                    let td8 = document.createElement("td");
                    let td9 = document.createElement("td");
                    let td10 = document.createElement("td");
                    let td11 = document.createElement("td");

                    let text1 = document.createTextNode(contacto.nombre);
                    let text2 = document.createTextNode(contacto.dni);
                    let text3 = document.createTextNode(contacto.direccion);
                    let text4 = document.createTextNode(contacto.telefono);
                    let text5 = document.createTextNode(contacto.cumpleaños);
                    let text6 = document.createTextNode(contacto.comida);
                    let text7 = document.createTextNode(contacto.lugar);
                    let text8 = document.createTextNode(contacto.foto1);
                    let text9 = document.createTextNode(contacto.foto2);
                    let text10 = document.createTextNode(contacto.ambito);
                    let text11 = document.createTextNode(contacto.descripcion);

                    td1.appendChild(text1);
                    td2.appendChild(text2);
                    td3.appendChild(text3);
                    td4.appendChild(text4);
                    td5.appendChild(text5);
                    td6.appendChild(text6);
                    td7.appendChild(text7);
                    td8.appendChild(text8);
                    td9.appendChild(text9);
                    td10.appendChild(text10);
                    td11.appendChild(text11);

                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    tr.appendChild(td4);
                    tr.appendChild(td5);
                    tr.appendChild(td6);
                    tr.appendChild(td7);
                    tr.appendChild(td8);
                    tr.appendChild(td9);
                    tr.appendChild(td10);
                    tr.appendChild(td11);

                    tabla.appendChild(tr);
                }
                
                //añadimos la tabla al div2
                div2.appendChild(tabla)
            
    //CREACION DIV Y BOTON FORMULARIO
        //primero generamos un boton en un nuevo div para que aparezca el formulario

        var div3 = document.createElement("div");
        div3.id = "div3";
        document.body.appendChild(div3);

        var boton = document.createElement("input")
        boton.setAttribute("type","button")
        boton.value = "Registre su nuevo contacto"
        boton.id = "boton"
        div3.appendChild(boton)
        

    
    // CREAR EL FORMULARIO
    function crearformulario(){
        var formulario = document.createElement("form");
        formulario.id = "formulario"

        // Agregar un campo de entrada de texto
        var txt = document.createTextNode("Nombre completo:   ")
        var inputTexto = document.createElement("input");
        inputTexto.type = "text";
        inputTexto.name = "nombre";
        inputTexto.placeholder = "Nombre completo";
        formulario.appendChild(txt);
        formulario.appendChild(inputTexto);
        var salto = document.createElement("br")
        formulario.appendChild(salto)

        // Agregar un campo de entrada de texto
        var txt = document.createTextNode("DNI:   ")
        var inputTexto = document.createElement("input");
        inputTexto.type = "text";
        inputTexto.name = "dni";
        inputTexto.placeholder = "DNI";
        formulario.appendChild(txt);
        formulario.appendChild(inputTexto);
        var salto = document.createElement("br")
        formulario.appendChild(salto)

        // Agregar un campo de entrada de texto
        var txt = document.createTextNode("Dirección:   ")
        var inputTexto = document.createElement("input");
        inputTexto.type = "text";
        inputTexto.name = "direccion";
        inputTexto.placeholder = "Dirección";
        formulario.appendChild(txt);
        formulario.appendChild(inputTexto);
        var salto = document.createElement("br")
        formulario.appendChild(salto)

        // Agregar un campo de entrada de texto
        var txt = document.createTextNode("Teléfono:   ")
        var inputTexto = document.createElement("input");
        inputTexto.type = "number";
        inputTexto.name = "telefono";
        inputTexto.placeholder = "Telefono";
        formulario.appendChild(txt);
        formulario.appendChild(inputTexto);
        var salto = document.createElement("br")
        formulario.appendChild(salto)
        var salto2 = document.createElement("br")
        formulario.appendChild(salto2)

        // Agregar 4 campoS de entrada de radio button para su cumpleaños
        var txt = document.createTextNode("Su cumpleaños es en:   ")
        var inputTexto = document.createElement("input");
        inputTexto.type = "radio";
        inputTexto.name = "cumpleaños";
        inputTexto.value = "invierno";
        inputTexto.id = "cumple_invierno";
        formulario.appendChild(txt);
        var t = document.createTextNode("invierno")  
        formulario.appendChild(inputTexto);
        formulario.appendChild(t)   
       
        var inputTexto = document.createElement("input");
        inputTexto.type = "radio";
        inputTexto.name = "cumpleaños";
        inputTexto.value = "primavera";
        inputTexto.id = "cumple_primavera";           
        var t = document.createTextNode("primavera")  
        formulario.appendChild(inputTexto);
        formulario.appendChild(t) 
    
        var inputTexto = document.createElement("input");
        inputTexto.type = "radio";
        inputTexto.name = "cumpleaños";
        inputTexto.value = "verano";
        inputTexto.id = "cumple_verano";           
        var t = document.createTextNode("verano")  
        formulario.appendChild(inputTexto);
        formulario.appendChild(t)
    
        var inputTexto = document.createElement("input");
        inputTexto.type = "radio";
        inputTexto.name = "cumpleaños";
        inputTexto.value = "otoño";
        inputTexto.id = "cumple_otoño";           
        var t = document.createTextNode("otoño")  
        formulario.appendChild(inputTexto);
        formulario.appendChild(t);
        var salto = document.createElement("br")
        formulario.appendChild(salto)
        var salto2 = document.createElement("br")
        formulario.appendChild(salto2)


        // Agregar 4 campos de entrada de radio button para su comida favorita
        var txt = document.createTextNode("Su comida favorita es:   ")
        var inputTexto = document.createElement("input");
        inputTexto.type = "radio";
        inputTexto.name = "comida";
        inputTexto.value = "peruana";
        inputTexto.id = "comida_peruana";
        formulario.appendChild(txt);           
        var t = document.createTextNode("peruana")  
        formulario.appendChild(inputTexto);
        formulario.appendChild(t)
     
        var inputTexto = document.createElement("input");
        inputTexto.type = "radio";
        inputTexto.name = "comida";
        inputTexto.value = "mexicana";
        inputTexto.id = "comida_mexicana";           
        var t = document.createTextNode("mexicana")  
        formulario.appendChild(inputTexto);
        formulario.appendChild(t)
     
        var inputTexto = document.createElement("input");
        inputTexto.type = "radio";
        inputTexto.name = "comida";
        inputTexto.value = "italiana";
        inputTexto.id = "comida_italiana";           
        var t = document.createTextNode("italiana")  
        formulario.appendChild(inputTexto);
        formulario.appendChild(t)
      
        var inputTexto = document.createElement("input");
        inputTexto.type = "radio";
        inputTexto.name = "comida";
        inputTexto.value = "mediterranea";
        inputTexto.id = "comida_mediterranea";           
        var t = document.createTextNode("mediterránea")  
        formulario.appendChild(inputTexto);
        formulario.appendChild(t)
        var salto = document.createElement("br")
        formulario.appendChild(salto)
        var salto2 = document.createElement("br")
        formulario.appendChild(salto2)
        

        //agregar 5 checkbox diferentes: lugar de encuentro (trabajo, gimnasio, vecindario, restaurante, campo)
        var txt = document.createTextNode("Solemos quedar en el:   ")
        var inputTexto = document.createElement("input");
        inputTexto.type = "checkbox";   
        inputTexto.name = "lugar" ;
        inputTexto.value = "trabajo"; 
        inputTexto.id = "lugar_trabajo"
        formulario.appendChild(txt);   
        var t = document.createTextNode("trabajo")  
        formulario.appendChild(inputTexto);
        formulario.appendChild(t)
        var salto = document.createElement("br")
        formulario.appendChild(salto)

        var inputTexto = document.createElement("input");
        inputTexto.type = "checkbox";   
        inputTexto.name = "lugar" ;
        inputTexto.value = "gimnasio"; 
        inputTexto.id = "lugar_gimnasio"   
        var t = document.createTextNode("gimnasio")  
        formulario.appendChild(inputTexto);
        formulario.appendChild(t)
        var salto = document.createElement("br")
        formulario.appendChild(salto)

        var inputTexto = document.createElement("input");
        inputTexto.type = "checkbox";   
        inputTexto.name = "lugar" ;
        inputTexto.value = "barrio"; 
        inputTexto.id = "lugar_barrio"   
        var t = document.createTextNode("barrio")  
        formulario.appendChild(inputTexto);
        formulario.appendChild(t)
        var salto = document.createElement("br")
        formulario.appendChild(salto)

        var inputTexto = document.createElement("input");
        inputTexto.type = "checkbox";   
        inputTexto.name = "lugar" ;
        inputTexto.value = "restaurante"; 
        inputTexto.id = "lugar_restaurante"   
        var t = document.createTextNode("restaurante")  
        formulario.appendChild(inputTexto);
        formulario.appendChild(t)
        var salto = document.createElement("br")
        formulario.appendChild(salto)

        var inputTexto = document.createElement("input");
        inputTexto.type = "checkbox";   
        inputTexto.name = "lugar" ;
        inputTexto.value = "campo"; 
        inputTexto.id = "lugar_campo"   
        var t = document.createTextNode("campo")  
        formulario.appendChild(inputTexto);
        formulario.appendChild(t)
        var salto = document.createElement("br")
        formulario.appendChild(salto)
        var salto2 = document.createElement("br")
        formulario.appendChild(salto2)

        //agregar un select con las opciones: ambito (familia, amigos infancia, compañero trabajo, compañero gimansio, vecino)
        var txt = document.createTextNode("Es de mi círculo de:   ")
        var inputTexto = document.createElement("select"); 
        inputTexto.name = "ambito" ;
        var option = document.createElement("option");
        option.value = "familia";
        var optionTexto = document.createTextNode("Familia");
        option.appendChild(optionTexto)
        inputTexto.appendChild(option);

        var option = document.createElement("option");
        option.value = "amigo_infancia";
        var optionTexto = document.createTextNode("Amigos de la infancia");
        option.appendChild(optionTexto)
        inputTexto.appendChild(option);

        var option = document.createElement("option");
        option.value = "compañero_trabajo";
        var optionTexto = document.createTextNode("Compañeros de trabajo");
        option.appendChild(optionTexto)
        inputTexto.appendChild(option);

        var option = document.createElement("option");
        option.value = "compañero_gimansio";
        var optionTexto = document.createTextNode("Compañeros de gimnasio");
        option.appendChild(optionTexto)
        inputTexto.appendChild(option);

        var option = document.createElement("option");
        option.value = "vecino";
        var optionTexto = document.createTextNode("Vecino");
        option.appendChild(optionTexto)
        inputTexto.appendChild(option);

        formulario.appendChild(txt);   
        formulario.appendChild(inputTexto);
       
        var salto = document.createElement("br")
        formulario.appendChild(salto)

        //Agregar un textarea para una breve descripcion
        var txt = document.createTextNode("Descripción:   ")
        var inputTexto = document.createElement("textarea"); 
        inputTexto.name = "descripcion";
        inputTexto.id = "descripcion";
        inputTexto.cols = 30;
        inputTexto.rows = 6;
        inputTexto.placeholder = "Escribe una breve descripción";
        formulario.appendChild(txt);
        formulario.appendChild(inputTexto);

        var salto = document.createElement("br")
        formulario.appendChild(salto)

        // Agregar un botón de envío
        var botonEnviar = document.createElement("input");
        botonEnviar.type = "submit";
        botonEnviar.value = "Enviar";
        botonEnviar.id = "botonEnviar";
        formulario.appendChild(botonEnviar);


        // Agregar el formulario a contenedor div4
        var div4 = document.createElement("div");
        div4.id = "div4";
        div4.appendChild(formulario)
        document.body.appendChild(div4)
        div4.style.display="none"

    }
    
    //función para que al pulsar el boton se muestre el formulario completo
    boton.onclick = function(){
        crearformulario();
        div4.style.display="block"
    }    

    //CREAR DIV PARA INTRODUCIR IMAGENES
    let imagen1 = document.createElement("img")
    imagen1.id = "img1"
    imagen1.src ="img/img1.jpg";
    imagen1.alt = "Imagen_buzón";
    

    let imagen2 = document.createElement("img")
    imagen2.id = "img2"
    imagen2.src ="img/img2.jpg";
    imagen2.alt = "Imagen_agenda";

    var div5 = document.createElement("div");
    div5.id = "div5";
    div5.appendChild(imagen1)
    div5.appendChild(imagen2)

    document.body.appendChild(div5);



}

