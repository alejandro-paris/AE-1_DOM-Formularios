function agregarElementos() {
    // Creación de la tabla
    var tabla = document.createElement("table");
    tabla.setAttribute("align", "center");

    // Arrays para simplificar la creación de elementos
    var enunciados = ["Escribe tus datos personales:", "Elije una tecnología front:", "Elije una tecnología back:", "Selecciona un IDE:", "Selecciona tu nivel:", "Escribe un comentario:"];
    var labelsRadio1 = ["HTML", "CSS", "JavaScript", "TypeScript"];
    var labelsRadio2 = ["Java", "Python", "Solidity", "PHP"];
    var labelsCheckbox = ["Visual Studio Code", "Eclipse", "Sublime Text", "Atom", "Vim"];
    var labelsSelect = ["Junior", "Semi-Senior", "Senior"];

    // Función para crear un elemento "p" con estilo
    function crearEnunciado(texto) {
        var p = document.createElement("p");
        p.className = "enunciado";
        p.appendChild(document.createTextNode(texto));
        return p;
    }

    // Función para crear un input de tipo texto
    function crearInputTexto(id, placeholder) {
        var input = document.createElement("input");
        input.type = "text";
        input.id = id;
        input.name = id;
        input.placeholder = placeholder;
        return input;
    }

    // Función para crear un grupo de radios
    function crearGrupoRadios(nombre, labels) {
        var grupo = document.createDocumentFragment();
        labels.forEach(function (label, index) {
            var input = document.createElement("input");
            input.type = "radio";
            input.id = "opcion" + (index + 1);
            input.name = nombre;
            var opcionLabel = document.createElement("label");
            opcionLabel.htmlFor = input.id;
            opcionLabel.appendChild(document.createTextNode(label));
            grupo.appendChild(input);
            grupo.appendChild(opcionLabel);
        });
        return grupo;
    }

    // Función para crear un grupo de checkboxes
    function crearCheckboxes(labels) {
        var grupo = document.createDocumentFragment();
        labels.forEach(function (label, index) {
            var input = document.createElement("input");
            input.type = "checkbox";
            input.value = label.toLowerCase().replace(/\s/g, ""); // Valor en minúsculas y sin espacios
            input.id = input.value;
            var opcionLabel = document.createElement("label");
            opcionLabel.htmlFor = input.id;
            opcionLabel.appendChild(document.createTextNode(label));
            grupo.appendChild(input);
            grupo.appendChild(opcionLabel);
        });
        return grupo;
    }

    // Función para crear un select con opciones
    function crearSelect(id, labels) {
        var select = document.createElement("select");
        select.id = id;
        select.name = id;
        labels.forEach(function (label, index) {
            var option = document.createElement("option");
            option.value = (index + 1).toString(); // Valores numéricos del 1 en adelante
            option.appendChild(document.createTextNode(label));
            select.appendChild(option);
        });
        return select;
    }

    // Función para crear un textarea
    function crearTextarea(id, rows, cols, placeholder) {
        var textarea = document.createElement("textarea");
        textarea.id = id;
        textarea.name = id;
        textarea.rows = rows;
        textarea.cols = cols;
        textarea.placeholder = placeholder;
        return textarea;
    }

    // Función para crear una imagen
    function crearImagen(src, width) {
        var imagen = document.createElement("img");
        imagen.src = src;
        imagen.width = width;
        return imagen;
    }

    // Función para agregar elementos a una fila
    function agregarFila(elementos) {
        var tr = document.createElement("tr");
        elementos.forEach(function (elemento) {
            var td = document.createElement("td");
            td.appendChild(elemento);
            tr.appendChild(td);
        });
        return tr;
    }

    // Agregamos las filas a la tabla
    tabla.appendChild(agregarFila([crearEnunciado(enunciados[0])]));
    tabla.appendChild(agregarFila([crearEnunciado(enunciados[1])]));
    tabla.appendChild(agregarFila([crearEnunciado(enunciados[2])]));
    tabla.appendChild(agregarFila([crearEnunciado(enunciados[3])]));
    tabla.appendChild(agregarFila([crearEnunciado(enunciados[4])]));
    tabla.appendChild(agregarFila([crearEnunciado(enunciados[5])]));

    tabla.appendChild(agregarFila([crearEnunciado(""), crearGrupoRadios("front", labelsRadio1)]));
    tabla.appendChild(agregarFila([crearEnunciado(""), crearGrupoRadios("back", labelsRadio2)]));
    tabla.appendChild(agregarFila([crearEnunciado(""), crearCheckboxes(labelsCheckbox)]));
    tabla.appendChild(agregarFila([crearEnunciado(""), crearSelect("opciones", labelsSelect)]));
    tabla.appendChild(agregarFila([crearEnunciado(""), crearTextarea("txtarea", 4, 40, "")]));

    tabla.appendChild(agregarFila([crearEnunciado(""), crearImagen("img/img-1.jpg", 150), crearImagen("img/img-2.jpg", 150)]));

    // Agregamos la tabla al contenedor (div1 asumido)
    div1.appendChild(tabla);
    document.body.appendChild(div1);

    pintarNegrita();

    function pintarNegrita() {
        var enunciado = document.getElementsByClassName("enunciado");
        for (var i = 0; i < enunciado.length; i++) {
            enunciado[i].style.fontWeight = "bold";
            enunciado[i].style.color = "blue";
        }
    }
}
