
//Creacion del evento para que se ejecute el codigo de javascript una vez el dom completo haya sido cargado 
document.addEventListener("DOMContentLoaded", function() {

//Creacion del formulario,Fieldset y legend.
//Crear un elemento de formulario
let formulario =document.createElement("form");
formulario.id='miFormularo'

//crear un elemento Fieldset
let encuadro =document.createElement("fieldset")
encuadro.id='miFieldset'

//crear un elemento legend para introducirlo dentro del fieldset
let legend = document.createElement("legend");
legend.textContent = 'Formulario de Contacto';
//------------------------------------------------------//
////Campos de texto //

//crear el elemento DNI
let labelDni = document.createElement("label");
labelDni.textContent = 'DNI:';
let inputDni = document.createElement("input");
inputDni.type = "text"
inputDni.name = "dni"

//crear el elemento Nombre
let labelNombre = document.createElement("label");
labelNombre.textContent = "Nombre:";
let inputNombre = document.createElement("input");
inputNombre.type = "text"
inputNombre.name = "nombre"

//crear el elemento Apellidos
let labelApellidos = document.createElement("label");
labelApellidos.textContent = "Apellidos:";
let inputApellidos = document.createElement("input");
inputApellidos.type = "text"
inputApellidos.name = "apellidos"

//crear el elemento Direccion
let labelDireccion = document.createElement("label");
labelDireccion.textContent = "Direccion:";
let inputDireccion = document.createElement("input");
inputDireccion.type = "text"
inputDireccion.name = "direccion"

//crear el elemento Telefono
let labelTelefono = document.createElement("label");
labelTelefono.textContent = "Telefono:";
let inputTelefono = document.createElement("input");
inputTelefono.type = "text"
inputTelefono.name = "telefono"
//----------------------------------------------------//
//Dos radio button, con 4 opciones a elegir

//Primer radio button con 4 opciones 
///Primero se crea el elemento Genero que es el texto que define los radio Buton 
let labelGenero = document.createElement("label");
labelGenero.textContent = 'Genero:                 ';

//crear el elemento radio button Masculino
let labelGeneroMasculino = document.createElement("label");
labelGeneroMasculino.textContent = "Masculino";
let inputGeneroMasculino = document.createElement("input");
inputGeneroMasculino.type = "radio"
inputGeneroMasculino.name = "Genero"

//crear el elemento radio button Femenino
let labelGeneroFemenino = document.createElement("label");
labelGeneroFemenino.textContent = "Femenino";
let inputGeneroFemenino = document.createElement("input");
inputGeneroFemenino.type = "radio"
inputGeneroFemenino.name = "Genero"

//crear el elemento radio button No binario
let labelGeneroNoBinario = document.createElement("label");
labelGeneroNoBinario.textContent = "No Binario";
let inputGeneroNoBinario = document.createElement("input");
inputGeneroNoBinario.type = "radio"
inputGeneroNoBinario.name = "Genero"

//crear el elemento radio button otros
let labelGeneroOtros = document.createElement("label");
labelGeneroOtros.textContent = "Otros";
let inputGeneroOtros = document.createElement("input");
inputGeneroOtros.type = "radio"
inputGeneroOtros.name = "Genero"


//Segundo radio button con 4 opciones 
///Primero se crea el elemento Estado Civil que es el texto que define los radio Buton 
let labelEstadoCivil = document.createElement("label");
labelEstadoCivil.textContent = 'Estado Civil:  ';

//crear el elemento radio button Soltero
let labelSoltero = document.createElement("label");
labelSoltero.textContent = "Soltero/a";
let inputSoltero = document.createElement("input");
inputSoltero.type = "radio"
inputSoltero.name = "Estado civil"

//crear el elemento radio button Casado
let labelCasado = document.createElement("label");
labelCasado.textContent = "Casado/a";
let inputCasado = document.createElement("input");
inputCasado.type = "radio"
inputCasado.name = "Estado civil"

//crear el elemento radio button divorciado
let labeldivorciado = document.createElement("label");
labeldivorciado.textContent = "divorciado/a";
let inputdivorciado = document.createElement("input");
inputdivorciado.type = "radio"
inputdivorciado.name = "Estado civil"

//crear el elemento radio button Viudo
let labelViudo = document.createElement("label");
labelViudo.textContent = "Viudo";
let inputViudo = document.createElement("input");
inputViudo.type = "radio"
inputViudo.name = "Estado civil"
////---------------------------------------------//
///Creacion de 5 Checkbox

///Agregar el nodo texto Hobbies antes de los Checkbox
let labelHobbies = document.createElement("label");
labelHobbies.textContent = 'Hobbies:';

///1er checkbox Peliculas 
let labelPeliculas = document.createElement("label");
labelPeliculas.textContent = "Peliculas";
let inputPeliculas = document.createElement("input");
inputPeliculas.type = "checkbox";
inputPeliculas.name = "Peliculas";
inputPeliculas.checked = true;

///2ndo checkbox Lectura
let labelLectura = document.createElement("label");
labelLectura.textContent = "Lectura";
let inputLectura = document.createElement("input");
inputLectura.type = "checkbox";
inputLectura.name = "Lectura";

///3er checkbox Videojuegos
let labelVideojuegos = document.createElement("label");
labelVideojuegos.textContent = "Videojuegos";
let inputVideojuegos = document.createElement("input");
inputVideojuegos.type = "checkbox";
inputVideojuegos.name = "Videojuegos";

///4rto checkbox Deporte
let labelDeporte = document.createElement("label");
labelDeporte.textContent = "Deporte";
let inputDeporte = document.createElement("input");
inputDeporte.type = "checkbox";
inputDeporte.name = "Deporte";

///5to checkbox Viajar
let labelViajar = document.createElement("label");
labelViajar.textContent = " Viajar";
let  inputViajar = document.createElement("input");
inputViajar.type = "checkbox";
inputViajar.name = "Viajar";


//añadir 2 imagenes 
let imagenHtml5 = document.createElement("img");
imagenHtml5.src = "html5.png"; 
imagenHtml5 .alt = "Icono Html5"; 

let imagenJavascript = document.createElement("img");
imagenJavascript.src = "Javascript.png"; 
imagenJavascript.alt = "icono Javascript"; 

///Añadir un campo Select con 7 opciones ( Dias de la semana )
// Crear el elemento Select
let selectElement = document.createElement("select");
selectElement.name = "Dias de la Semana";
selectElement.id = "miSelect";

// Crear opciones para el elemento Select
let optionSemana = document.createElement("option");
optionSemana.text = "Dias de la Semana";
optionSemana.value = "";
selectElement.appendChild(optionSemana);

let optionLunes = document.createElement("option");
optionLunes.text = "Lunes";
optionLunes.value = "Lunes";
selectElement.appendChild(optionLunes);

let optionMartes= document.createElement("option");
optionMartes.text = "Martes";
optionMartes.value = "Martes";
selectElement.appendChild(optionMartes);

let optionMiercoles = document.createElement("option");
optionMiercoles.text = "Miercoles";
optionMiercoles.value = "Miercoles";
selectElement.appendChild(optionMiercoles);

let optionJueves = document.createElement("option");
optionJueves.text = "Jueves";
optionJueves.value = "Jueves";
selectElement.appendChild(optionJueves);

let optionViernes = document.createElement("option");
optionViernes.text = "Viernes";
optionViernes.value = "Viernes";
selectElement.appendChild(optionViernes);

let optionSabado= document.createElement("option");
optionSabado.text = "Sabado";
optionSabado.value = "opcion3";
selectElement.appendChild(optionSabado);

let optionDomingo = document.createElement("option");
optionDomingo.text = "Domingo";
optionDomingo.value = "Domingo3";
selectElement.appendChild(optionDomingo);

//Añadir un text area
// Crear un elemento Textarea
let textArea = document.createElement("textarea");
textArea.name = "Observacion";
textArea.rows = 4;
textArea.cols = 50;

// Label para el Textarea
let labelObservacion = document.createElement("label");
labelObservacion.textContent = "Observaciones:";
labelObservacion.htmlFor = "Observacion";
//Atributo para que no se redimensione el text area 
textArea.style.resize = 'none';

//Añadir los nodos a cada elemento
formulario.appendChild(encuadro);//Añadir el fieldset dentro del formulario

//añadir todo los elementos dentro del nodo Fieldset
encuadro.appendChild(legend);
encuadro.appendChild(labelDni);
encuadro.appendChild(inputDni);
encuadro.appendChild(document.createElement("br"));//crear los elementos Salto de pagina
encuadro.appendChild(document.createElement("br"));//crear los elementos Salto de pagina
encuadro.appendChild(labelNombre);
encuadro.appendChild(inputNombre);
encuadro.appendChild(document.createElement("br"));//crear los elementos Salto de pagina
encuadro.appendChild(document.createElement("br"));//crear los elementos Salto de pagina
encuadro.appendChild(labelApellidos);
encuadro.appendChild(inputApellidos);
encuadro.appendChild(document.createElement("br"));//crear los elementos Salto de pagina
encuadro.appendChild(document.createElement("br"));//crear los elementos Salto de pagina
encuadro.appendChild(labelDireccion);
encuadro.appendChild(inputDireccion);
encuadro.appendChild(document.createElement("br"));//crear los elementos Salto de pagina
encuadro.appendChild(document.createElement("br"));//crear los elementos Salto de pagina
encuadro.appendChild(labelTelefono);
encuadro.appendChild(inputTelefono);
encuadro.appendChild(document.createElement("br"));//crear los elementos Salto de pagina
encuadro.appendChild(document.createElement("br"));//crear los elementos Salto de pagina

//añadir los radio button dentro del Fieldset y a la vez este que va dentro del formulario 
encuadro.appendChild(labelGenero); 
encuadro.appendChild(labelGeneroMasculino);
encuadro.appendChild(inputGeneroMasculino);
encuadro.appendChild(labelGeneroFemenino);
encuadro.appendChild(inputGeneroFemenino);
encuadro.appendChild(labelGeneroNoBinario);
encuadro.appendChild(inputGeneroNoBinario);
encuadro.appendChild(labelGeneroOtros);
encuadro.appendChild(inputGeneroOtros);
encuadro.appendChild(document.createElement("br"));//crear los elementos Salto de pagina
encuadro.appendChild(document.createElement("br"));//crear los elementos Salto de pagina

encuadro.appendChild(labelEstadoCivil); 
encuadro.appendChild(labelSoltero);
encuadro.appendChild(inputSoltero);
encuadro.appendChild(labelCasado);
encuadro.appendChild(inputCasado);
encuadro.appendChild(labeldivorciado);
encuadro.appendChild(inputdivorciado);
encuadro.appendChild(labelViudo);
encuadro.appendChild(inputViudo);
encuadro.appendChild(document.createElement("br"));//crear los elementos Salto de pagina
encuadro.appendChild(document.createElement("br"));//crear los elementos Salto de pagina

//añadir los checkbox dentro del Fieldset y a la vez este que va dentro del formulario 
encuadro.appendChild(labelHobbies); 
encuadro.appendChild(document.createElement("br"));
encuadro.appendChild(labelPeliculas );
encuadro.appendChild(inputPeliculas );
encuadro.appendChild(labelLectura);
encuadro.appendChild(inputLectura);
encuadro.appendChild(labelVideojuegos);
encuadro.appendChild(inputVideojuegos);
encuadro.appendChild(labelDeporte);
encuadro.appendChild(inputDeporte);
encuadro.appendChild(labelViajar);
encuadro.appendChild(inputViajar);
encuadro.appendChild(document.createElement("br"));//crear los elementos Salto de pagina
encuadro.appendChild(document.createElement("br"));//crear los elementos Salto de pagina

//añadir los select dentro del Fieldset y a la vez este que va dentro del formulario 
encuadro.appendChild(selectElement);
encuadro.appendChild(document.createElement("br"));//crear los elementos Salto de pagina
encuadro.appendChild(document.createElement("br"));//crear los elementos Salto de pagina

//añadir el text area  dentro del Fieldset y a la vez este que va dentro del formulario 
encuadro.appendChild(labelObservacion); 
encuadro.appendChild(document.createElement("br"));//crear los elementos Salto de pagina
encuadro.appendChild(textArea)
encuadro.appendChild(document.createElement("br"));//crear los elementos Salto de pagina
encuadro.appendChild(document.createElement("br"));//crear los elementos Salto de pagina

//añadir las Imagenes dentro del Fieldset y a la vez este que va dentro del formulario 
encuadro.appendChild(imagenHtml5);
encuadro.appendChild(imagenJavascript);

  //añadir el formulario dentro del elemento body - div del html5 
  // Obtener el div "contenedor" por su id
  let contenedorDiv = document.getElementById("contenedor");

  // Agregar el formulario al div "contenedor"
  contenedorDiv.appendChild(formulario);
});