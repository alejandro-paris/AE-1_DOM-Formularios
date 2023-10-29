
function cargar(){

    // Cracion de la tabla

    var tabla = document.createElement("table")
    tabla.setAttribute("align", "center")

    // Creamos los elementos "TR" de la tabla
    let enunciadoDp = document.createElement("tr")
    let tr1 = document.createElement("tr")
    let tr2 = document.createElement("tr")
    let tr3 = document.createElement("tr")
    let tr4 = document.createElement("tr")
    let tr5 = document.createElement("tr")

    let enunciado = document.createElement("tr")
    let tr6 = document.createElement("tr")
    let tr7 = document.createElement("tr")
    let tr8 = document.createElement("tr")
    let tr9 = document.createElement("tr")

    let enunciadocb = document.createElement("tr")
    let tr10 = document.createElement("tr")
    let tr11 = document.createElement("tr")
    let tr12 = document.createElement("tr")
    let tr13 = document.createElement("tr")
    let tr14 = document.createElement("tr")

    let enunciadoSel = document.createElement("tr")
    let tr15 = document.createElement("tr")

    let enunciadoCom = document.createElement("tr")
    let tr16 = document.createElement("tr")
    let tr17 = document.createElement("tr")

    // Creamos los elementos "TD" de la tabla
    let tdenunciadoDp = document.createElement("td")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")
    let td7 = document.createElement("td")
    let td8 = document.createElement("td")
    let td9 = document.createElement("td")
    let td10 = document.createElement("td")

    let tdEnunciadoFront = document.createElement("td")
    let td11 = document.createElement("td")
    let td12 = document.createElement("td")
    let td13 = document.createElement("td")
    let td14 = document.createElement("td")

    let tdEnunciadoBack = document.createElement("td")
    let td15 = document.createElement("td")
    let td16 = document.createElement("td")
    let td17 = document.createElement("td")
    let td18 = document.createElement("td")

    let tdEnunciadocb = document.createElement("td")
    let td19 = document.createElement("td")
    let td20 = document.createElement("td")
    let td21 = document.createElement("td")
    let td22 = document.createElement("td")
    let td23 = document.createElement("td")

    let tdEnunciadoSel = document.createElement("td")
    let td24 = document.createElement("td")

    let tdEnunciadoCom = document.createElement("td")
    let td25 = document.createElement("td")
    let td26 = document.createElement("td")
    let td27 = document.createElement("td")

    // Agregamos una variable colspan para que la celda del textarea tenga mas espacio
    td25.setAttribute("colspan","2")

    // Creamos los campos P para los enunciados:
    let enunciadoDpP = document.createElement("p")
        enunciadoDpP.setAttribute("class","enunciado")
    let enunciadoP = document.createElement("p")
        enunciadoP.setAttribute("class","enunciado")
    let enunciadoP2 = document.createElement("p")
        enunciadoP2.setAttribute("class","enunciado")
    let enunciadocbP = document.createElement("p")
        enunciadocbP.setAttribute("class", "enunciado")
    let enunciadocbP2 = document.createElement("p")
        enunciadocbP2.setAttribute("class","enunciado")
    let enunciadoSelP = document.createElement("p")
        enunciadoSelP.setAttribute("class","enunciado")
    let enunciadoComP = document.createElement("p")
        enunciadoCom.setAttribute("class","enunciado")

    // Creamos los elementos texto 
    let txtEnunciadoDp = document.createTextNode("Escribe tus datos personales:")
    let txt1 = document.createTextNode("DNI: ")
    let txt2 = document.createTextNode("Nombre: ")
    let txt3 = document.createTextNode("Apellidos: ")
    let txt4 = document.createTextNode("Direccion: ")
    let txt5 = document.createTextNode("Telefono: ")

    // Creamos los elementos texto del radio 1
    let txtEnunciadoFront = document.createTextNode("Elije una tecnología front:")
    let txtradio1 = document.createTextNode("HTML")
    let txtradio2 = document.createTextNode("CSS")
    let txtradio3 = document.createTextNode("JavaScript")
    let txtradio4 = document.createTextNode("TypeScript")

    // Creamos los elementos texto del radio 2
    let txtEnunciadoBack = document.createTextNode("Elije una tecnología back:")
    let txtradio5 = document.createTextNode("Java")
    let txtradio6 = document.createTextNode("Phyton")
    let txtradio7 = document.createTextNode("Solidity")
    let txtradio8 = document.createTextNode("PHP")

    // Creamos los elementos texto del checkbox
    let txtEnunciadocb = document.createTextNode("Selecciona un IDE:")
    let txtcb1 = document.createTextNode("Visual Studio Code")
    let txtcb2 = document.createTextNode("Eclipse")
    let txtcb3 = document.createTextNode("Sublime Text")
    let txtcb4 = document.createTextNode("Atom")
    let txtcb5 = document.createTextNode("Vim")

    // Creamos los elementos texto select
    let txtEnunciadoSel = document.createTextNode("Selecciona tu nivel:")
    let txtsel1 = document.createTextNode("Junior")
    let txtsel2 = document.createTextNode("Semi-Senior")
    let txtsel3 = document.createTextNode("Senior") 

    let txtEnunciadoCom = document.createTextNode("Escribe un comentario: ")

    // Creamos los elementos input text que contiene el formulario
    let inputDni = document.createElement("input")
        inputDni.setAttribute("type", "texto")
        inputDni.setAttribute("name", "dni")
        inputDni.setAttribute("id", "dni")
    let inputNombre = document.createElement("input")
        inputNombre.setAttribute("type", "texto")
        inputNombre.setAttribute("name", "nombre")
        inputNombre.setAttribute("id", "nombre")
    let inputApellidos = document.createElement("input")
        inputApellidos.setAttribute("type", "texto")
        inputApellidos.setAttribute("name", "apellidos")
        inputApellidos.setAttribute("id", "apellidos")
    let inputDireccion = document.createElement("input")
        inputDireccion.setAttribute("type", "texto")
        inputDireccion.setAttribute("name", "direccion")
        inputDireccion.setAttribute("id", "direccion")
    let inputTelefono = document.createElement("input")
        inputTelefono.setAttribute("type", "texto")
        inputTelefono.setAttribute("name", "telefono")
        inputTelefono.setAttribute("id", "telefono")

    // Creamos los 2 input radio que contiene el formulario

    // Primer input-radio: 
    let inputRadio1 = document.createElement("input")
        inputRadio1.setAttribute("type", "radio")
        inputRadio1.setAttribute("id", "opcion1")
        inputRadio1.setAttribute("name", "front")
    let opcion1 = document.createElement("label")
        opcion1.setAttribute("for","opcion1")
        opcion1.appendChild(txtradio1)

    let inputRadio2 = document.createElement("input")
        inputRadio2.setAttribute("type", "radio")
        inputRadio2.setAttribute("id", "opcion2")
        inputRadio2.setAttribute("name", "front")
    let opcion2 = document.createElement("label")
        opcion2.setAttribute("for","opcion2")
        opcion2.appendChild(txtradio2)

    let inputRadio3 = document.createElement("input")
        inputRadio3.setAttribute("type", "radio")
        inputRadio3.setAttribute("id", "opcion3")
        inputRadio3.setAttribute("name", "front")
    let opcion3 = document.createElement("label")
        opcion3.setAttribute("for","opcion3")
        opcion3.appendChild(txtradio3)

    let inputRadio4 = document.createElement("input")
        inputRadio4.setAttribute("type", "radio")
        inputRadio4.setAttribute("id", "opcion4")
        inputRadio4.setAttribute("name", "front")
    let opcion4 = document.createElement("label")
        opcion4.setAttribute("for","opcion4")
        opcion4.appendChild(txtradio4)

    //Segundo input radio:
    let inputRadio5 = document.createElement("input")
        inputRadio5.setAttribute("type", "radio")
        inputRadio5.setAttribute("id", "opcion5")
        inputRadio5.setAttribute("name", "back")
    let opcion5 = document.createElement("label")
        opcion5.setAttribute("for","opcion5")
        opcion5.appendChild(txtradio5)

    let inputRadio6 = document.createElement("input")
        inputRadio6.setAttribute("type", "radio")
        inputRadio6.setAttribute("id", "opcion6")
        inputRadio6.setAttribute("name", "back")
    let opcion6 = document.createElement("label")
        opcion6.setAttribute("for","opcion6")
        opcion6.appendChild(txtradio6)

    let inputRadio7 = document.createElement("input")
        inputRadio7.setAttribute("type", "radio")
        inputRadio7.setAttribute("id", "opcion7")
        inputRadio7.setAttribute("name", "back")
    let opcion7 = document.createElement("label")
        opcion7.setAttribute("for","opcion7")
        opcion7.appendChild(txtradio7)

    let inputRadio8 = document.createElement("input")
        inputRadio8.setAttribute("type", "radio")
        inputRadio8.setAttribute("id", "opcion8")
        inputRadio8.setAttribute("name", "back")
    let opcion8 = document.createElement("label")
        opcion8.setAttribute("for","opcion8")
        opcion8.appendChild(txtradio8)

    // Creamos los 5 checkbox

    let inputCb1 = document.createElement("input")
        inputCb1.setAttribute("type", "checkbox")
        inputCb1.setAttribute("value","vsc")
        inputCb1.setAttribute("id","vsc")
    let opcion9 = document.createElement("label")
        opcion9.getAttribute("for", "opcion9")
        opcion9.appendChild(txtcb1)

    let inputCb2 = document.createElement("input")
        inputCb2.setAttribute("type", "checkbox")
        inputCb2.setAttribute("value","eclipse")
        inputCb2.setAttribute("id","eclipse")
    let opcion10 = document.createElement("label")
        opcion10.getAttribute("for", "opcion10")
        opcion10.appendChild(txtcb2)

    let inputCb3 = document.createElement("input")
        inputCb3.setAttribute("type", "checkbox")
        inputCb3.setAttribute("value","sublime")
        inputCb3.setAttribute("id","sublime")
    let opcion11 = document.createElement("label")
        opcion11.getAttribute("for", "opcion11")
        opcion11.appendChild(txtcb3)

    let inputCb4 = document.createElement("input")
        inputCb4.setAttribute("type", "checkbox")
        inputCb4.setAttribute("value","atom")
        inputCb4.setAttribute("id","atom")
    let opcion12 = document.createElement("label")
        opcion12.getAttribute("for", "opcion12")
        opcion12.appendChild(txtcb4)

    let inputCb5 = document.createElement("input")
        inputCb5.setAttribute("type", "checkbox")
        inputCb5.setAttribute("value","vim")
        inputCb5.setAttribute("id","vim")
    let opcion13 = document.createElement("label")
        opcion13.getAttribute("for", "opcion13")
        opcion13.appendChild(txtcb5)
    
    //Creamos el select:
    let sel1 = document.createElement("select")
        sel1.setAttribute("id", "opciones")
        sel1.setAttribute("name", "opciones")
    
    //Creamos las opciones del select:
    let op1 = document.createElement("option")
        op1.setAttribute("value", "1")
    let op2 = document.createElement("option")
        op2.setAttribute("value", "2")
    let op3 = document.createElement("option")
        op3.setAttribute("value", "3")
    
    // Agregamos las opciones al select
    sel1.appendChild(op1)
    sel1.appendChild(op2)
    sel1.appendChild(op3)
    
    // Agregamos los nodos texto a las opciones option
    op1.appendChild(txtsel1)
    op2.appendChild(txtsel2)
    op3.appendChild(txtsel3)

    // Creamos el textarea
    let txtarea = document.createElement("textarea")
    txtarea.setAttribute("id","txtarea")
    txtarea.setAttribute("name","txtarea")
    txtarea.setAttribute("rows","4")
    txtarea.setAttribute("cols","40")

    // Creamos los campos para las imagenes

    let imagen1 = document.createElement("img")
    imagen1.setAttribute("src","img/img-1.jpg")
    imagen1.setAttribute("width","150")
    let imagen2 = document.createElement("img")
    imagen2.setAttribute("src","img/img-2.jpg")
    imagen2.setAttribute("width","150")

    // Asignamos cada texto, input-text, input-radio o el contenido que sea
    // que tenga cada td

    tdenunciadoDp.appendChild(enunciadoDpP)
    enunciadoDpP.appendChild(txtEnunciadoDp)
    td1.appendChild(txt1)
    td2.appendChild(inputDni)
    td3.appendChild(txt2)
    td4.appendChild(inputNombre)
    td5.appendChild(txt3)
    td6.appendChild(inputApellidos)
    td7.appendChild(txt4)
    td8.appendChild(inputDireccion)
    td9.appendChild(txt5)
    td10.appendChild(inputTelefono)

    tdEnunciadoFront.appendChild(enunciadoP)
    enunciadoP.appendChild(txtEnunciadoFront)
    td11.appendChild(inputRadio1)
    td11.appendChild(opcion1)
    td12.appendChild(inputRadio2)
    td12.appendChild(opcion2)
    td13.appendChild(inputRadio3)
    td13.appendChild(opcion3)
    td14.appendChild(inputRadio4)
    td14.appendChild(opcion4)

    tdEnunciadoBack.appendChild(enunciadoP2)
    enunciadoP2.appendChild(txtEnunciadoBack)
    td15.appendChild(inputRadio5)
    td15.appendChild(opcion5)
    td16.appendChild(inputRadio6)
    td16.appendChild(opcion6)
    td17.appendChild(inputRadio7)
    td17.appendChild(opcion7)
    td18.appendChild(inputRadio8)
    td18.appendChild(opcion8)

    tdEnunciadocb.appendChild(enunciadocbP)
    enunciadocbP.appendChild(txtEnunciadocb)
    td19.appendChild(opcion9)
    td19.appendChild(inputCb1)
    td20.appendChild(opcion10)
    td20.appendChild(inputCb2)
    td21.appendChild(opcion11)
    td21.appendChild(inputCb3)
    td22.appendChild(opcion12)
    td22.appendChild(inputCb4)
    td23.appendChild(opcion13)
    td23.appendChild(inputCb5)

    tdEnunciadoSel.appendChild(enunciadocbP2)
    enunciadocbP2.appendChild(txtEnunciadoSel)

    td24.appendChild(sel1)
    tdEnunciadoCom.appendChild(txtEnunciadoCom)

    td25.appendChild(txtarea)

    td26.appendChild(imagen1)
    td27.appendChild(imagen2)

    // Asignamos cada td a el tr correspondiente de la tabla.
    enunciadoDp.appendChild(tdenunciadoDp)
    tr1.appendChild(td1)
    tr1.appendChild(td2)
    tr2.appendChild(td3)
    tr2.appendChild(td4)
    tr3.appendChild(td5)
    tr3.appendChild(td6)
    tr4.appendChild(td7)
    tr4.appendChild(td8)
    tr5.appendChild(td9)
    tr5.appendChild(td10)

    enunciado.appendChild(tdEnunciadoFront)
    tr6.appendChild(td11)
    tr7.appendChild(td12)
    tr8.appendChild(td13)
    tr9.appendChild(td14)

    enunciado.appendChild(tdEnunciadoBack)
    tr6.appendChild(td15)
    tr7.appendChild(td16)
    tr8.appendChild(td17)
    tr9.appendChild(td18)

    enunciadocb.appendChild(tdEnunciadocb)
    tr10.appendChild(td19)
    tr11.appendChild(td20)
    tr12.appendChild(td21)
    tr13.appendChild(td22)
    tr14.appendChild(td23)

    enunciadocb.appendChild(tdEnunciadoSel)
    tr10.appendChild(td24)

    enunciadoCom.appendChild(tdEnunciadoCom)
    tr16.appendChild(td25)
    tr17.appendChild(td26)
    tr17.appendChild(td27)

    

    // Asignamos los tr a la tabla
    tabla.appendChild(enunciadoDp)
    tabla.appendChild(tr1)
    tabla.appendChild(tr2)
    tabla.appendChild(tr3)
    tabla.appendChild(tr4)
    tabla.appendChild(tr5)
    tabla.appendChild(enunciado)
    tabla.appendChild(tr6)
    tabla.appendChild(tr7)
    tabla.appendChild(tr8)
    tabla.appendChild(tr9)
    tabla.appendChild(enunciadocb)
    tabla.appendChild(tr10)
    tabla.appendChild(tr11)
    tabla.appendChild(tr12)
    tabla.appendChild(tr13)
    tabla.appendChild(tr14)
    tabla.appendChild(enunciadoSel)
    tabla.appendChild(tr15)
    tabla.appendChild(enunciadoCom)
    tabla.appendChild(tr16)
    tabla.appendChild(tr17)
    
    // Asignamos la tabla a el div que tenemos creado en el documento HTML.
    div1.appendChild(tabla)
    document.body.appendChild(div1)


    pintarNegrita();

    function pintarNegrita(){
        var enunciado = document.getElementsByClassName("enunciado")
        for (var i = 0; i < enunciado.length; i++) {
            enunciado[i].style.fontWeight = 'bold';
            enunciado[i].style.color = 'blue';
          }
    }

}