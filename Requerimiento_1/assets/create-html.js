/**
 * Función genérica que inserta un array de hijos dentro de un padre.
 * Se utiliza para construir las diferentes secciones de la web.
 * @param {String} parent - Es el elemento padre donde queremos insertar. 
 * @param {[Array(Strings)]} childs - Array de los hijos que queremos insertar. 
 */
function crearEstructuras(parent, childs) {
    for (ele of childs) {
        parent.appendChild(ele);
    }
}

/**
 * Función Genérica que sirve para simplificar el proceso de creación de
 * elementos y nodos de texto. 
 * @param {String} elemento - Nombre del elemento que estamos creando 
 * @param {String} contenido - Nombre del NODO TEXTO que se añade a ese elemento
 * @returns {HTMLElement} Devuelve el elemento HTML con su nodo de texto insertado
 */
function crearElemento(elemento, contenido) {
    const htmlEle = document.createElement(elemento);
    const htmlText = document.createTextNode(contenido);
    htmlEle.appendChild(htmlText);
    return htmlEle;
}

// Funciones para generar las secciones de la página

/**
 * Genera la section de bienvenida de nuestra web.
 * @returns {HTMLElement} La section HTML con los elementos que la componen 
 */
function generarBienvenida() {

    //Sección que contiene el resto de elementos
    const section = document.createElement("section");
    section.setAttribute("id", "bievenida");
    //Encabezado de bienvenida
    const h1 = crearElemento("h1", "Bievenido a PadelMania")
    //Párrafos de nuestra web
    const p1 = crearElemento("p", "Somos la aplicación de moda para los jugadores de padel. Contamos con más de 10 años de experiencia ayudando a cumplir las ilusiones de los miles de jugadores que confian en nosotros cada día.");

    //Añadimos los nodos creados a la sección
    crearEstructuras(section, [h1, p1]);
    return section;
}

/**
 * Genera la sección "Qué hacemos" de nuestra web
 * @returns {HTMLElement} La section HTML con los elementos que la componen 
 */
function generarQueHacemos() {

    //Sección que contiene el resto de elementos
    const section = document.createElement("section");
    section.setAttribute("id", "servicios");

    const h2_servicios = crearElemento("h2", "Nuestros servicios:");

    //Alquiler de pistas
    const h3_pistas = crearElemento("h3", "Alquiler de pistas");

    const img_pistas = document.createElement("img")
    img_pistas.alt = "Plano áero de una pista de padel";
    img_pistas.src = "https://as1.ftcdn.net/v2/jpg/04/70/80/80/1000_F_470808091_9kprhqxvUUpz9VKXeoAOAB4qk3XNrEgs.jpg"

    const p_pistas = crearElemento("p", "Puedes contar con nosotros para alquilar la pista de pádel que necesites para organizar tu partido. Disponemos de multitud de localizaciones. Siempre tendrás una pista cerca de ti")

    //Alquiler de palas
    const h3_palas = crearElemento("h3", "Alquiler de palas");

    const p_palas = crearElemento("p", "Ya seas experto o principiante, tenemos la pala perfecta para ti. Si has descubierto la pala de tus sueños, te damos la opción que comprarla.")

    const img_palas = document.createElement("img")
    img_palas.alt = "Dos palas de pádel sobre una pista azul";
    img_palas.src = "https://as1.ftcdn.net/v2/jpg/04/34/05/38/1000_F_434053854_MSteTpkf5H5BLrJB9GPJkb9AKjzggFAt.jpg"


    //Anidamos todos los elementos que hemos creado. Podemos controlar
    //facilmente el orden de los elementos sin grandes cambios en la
    //estructura general.
    crearEstructuras(section, [
        h2_servicios,
        h3_pistas,
        img_pistas,
        p_pistas,
        h3_palas,
        img_palas,
        p_palas]);
    return section;

}

/**
 * Genera la sección "Contacto" de nuestra web. 
 * Se incluye la generacióndel formulario.
 * @returns {HTMLElement} La section HTML con los elementos que la componen 
 */
function generarContacto() {
    const br = document.createElement("br");

    //Sección que contiene el resto de elementos
    const section = document.createElement("section");
          section.setAttribute("id", "contacto");
    const h2_contacto = crearElemento("h2", "Contacta con nosotros");
    const p_contacto = crearElemento("p", "Puedes rellenar este formulario para ponerte en contacto con nosotros")

    const form = document.createElement("form");
          form.action = "";

    //Fieldset de datos Personales
    const fieldset_personal = document.createElement("fieldset");
          fieldset_personal.id = "datos_personales";
    form.appendChild(fieldset_personal);

    const legend_personal = crearElemento("legend", "Datos personales");
          fieldset_personal.appendChild(legend_personal);

    //Recogemos los datos personales en el formulario
    /* Generamos los inputs y las labels mediante un bucle, habiendo declarado
    previamente un array con el nombre de los campos y los ids que 
    queremos asignar.*/

    const datos_personales = ["Nombre", "Apellidos", "Dirección", "Teléfono"];
    const ids_datos_personales = ["nom", "apell", "dir", "tel_info"];


    for (let i = 0; i < datos_personales.length; i++) {
        let input = document.createElement("input");
        input.id = ids_datos_personales[i];
        input.name = input.id;
        input.type = "text";
        input.placeholder = `Escribe tu ${datos_personales[i]}`;

        let label = crearElemento("label", `${datos_personales[i]}: `);
        label.htmlFor = input.id;

        fieldset_personal.appendChild(label);
        fieldset_personal.appendChild(input);
    }

    const p_metodo_con = crearElemento("p", "¿Cómo quieres que contactemos contigo?");
          fieldset_personal.appendChild(p_metodo_con);
    
    
    const dat_contact = ["E-mail", "Teléfono", "Correo", "No quiero publicidad"];
    const ids_dat_contact = ["email", "_cont", "correo", "nospam"];

    for (let i = 0; i < dat_contact.length; i++) {
        let input = document.createElement("input");
        input.id = ids_dat_contact[i];
        input.name = input.id;
        input.type = "radio";
        input.value = datos_personales;

        let label = crearElemento("label", `${dat_contact[i]}: `);
        label.htmlFor = input.id;

        fieldset_personal.appendChild(input);
        fieldset_personal.appendChild(label);
    }


    /* -------- FIELDSET ELIGE TUS INTERESES ------ */
    //Recogemos los datos personales en el formulario
    /* Generamos los inputs y las labels mediante un bucle, habiendo declarado
    previamente un array con el nombre de los campos y los ids que 
    queremos asignar.*/

    //Fieldset opciones
    const fieldset_opciones = document.createElement("fieldset");
    fieldset_opciones.id = "datos_opciones";
    form.appendChild(fieldset_opciones);
    const legend_opciones = crearElemento("legend", "ELIGE tus intereses");
    fieldset_opciones.appendChild(legend_opciones);

    //Pregunta sobre forma de pala
    const p_tipo_pala = crearElemento("p", "Elige el tipo de pala que mejor se adapta a ti:");
    fieldset_opciones.appendChild(p_tipo_pala);


    //Declaramos los tipos de pala a seleccionar
    const tipos_pala = ["Diamante", "Redonda", "Lágrima", "No estoy seguro"];

    /* Bucle que recorre el array de elementos y genera un input y su label
       para cada uno de ellos.
    */
    for (let i = 0; i < tipos_pala.length; i++) {
        let radio = document.createElement("input");
        radio.id = `radio_f_${tipos_pala[i]}`;
        radio.name = "radio_forma";
        radio.value = tipos_pala[i];
        radio.type = "radio";

        let label = crearElemento("label", tipos_pala[i]);
        label.htmlFor = radio.id;

        crearEstructuras(fieldset_opciones, [radio, label]);
    }


    //Pregunta sobre intereses

    const p_intereses = crearElemento("p", "¿Cuáles son tus intereses?")
    fieldset_opciones.appendChild(p_intereses);

    //Declaramos los posibles intereses, y les asignamos un id
    const intereses = ["Alquiler de pistas", "Alquiler de palas", "Realizar eventos", "Noticias padel", "Jugar torneos"];
    const intereses_id = ["pistas", "palas", "eventos", "noticias", "torneos"];

    /* Bucle que recorre el array de elementos y genera un chekbox y su label
       para cada uno de ellos.
    */
    for (let i = 0; i < intereses.length; i++) {
        let checkbox = document.createElement("input");
        checkbox.id = `check_int_${intereses_id[i]}`;
        checkbox.type = "checkbox";
        checkbox.name = "intereses";
        checkbox.value = intereses[i];

        let label = crearElemento("label", intereses[i]);
        label.htmlFor = checkbox.id

        fieldset_opciones.appendChild(checkbox);
        fieldset_opciones.appendChild(label);

        let br = document.createElement("br");
        fieldset_opciones.appendChild(br);
    }


    //Pregunta sobre cómo nos conociste con un select
    const label_promo = crearElemento("label", "¿Cómo nos conociste?");
    label_promo.forHtml = "promo_select";
    fieldset_opciones.appendChild(label_promo);

    //Creación del select.
    const select_promo = document.createElement("select");
    select_promo.id = label_promo.forHtml;
    select_promo.name = "promo_values";
    fieldset_opciones.appendChild(select_promo);

    /* Bucle que recorre el array de elementos y genera una option
       para cada uno de ellos, y las incluye en el select creado.*/
    const promo_values = ["Redes sociales", "TV", "Amigos", "Otro"];
    for (let i = 0; i < promo_values.length; i++) {
        let option = crearElemento("option", promo_values[i]);
        option.value = promo_values[i];
        select_promo.appendChild(option);
    }


    //Textarea observaciones
    const br2 = document.createElement("br");
    fieldset_opciones.appendChild(br2);
    const br3 = document.createElement("br");
    fieldset_opciones.appendChild(br3);

    const label_observaciones = crearElemento("label", "Indica cualquier otra observación o consulta que nos quieras hacer llegar");
    label_observaciones.htmlFor = "observaciones"
    const textarea_observaciones = document.createElement("textarea");
    textarea_observaciones.id = "observaciones";
    textarea_observaciones.name = "observaciones";


    fieldset_opciones.appendChild(label_observaciones);
    fieldset_opciones.appendChild(textarea_observaciones);

    /* ------ */



    /*-- BOTÓN ENVIAR ---*/

    //Boton enviar 
    fieldset_opciones.appendChild(br);
    const btn_enviar = document.createElement("input");
    btn_enviar.type = "submit";
    btn_enviar.value = "Enviar formulario";

    const br4 = document.createElement("br");
    form.appendChild(br4);
    form.appendChild(btn_enviar);

    /* ------ */


    /*
    -- FIN FORMULARIO --
    Generamos la sección con los elementos que hemos creado
    */
    //Generar sección
    crearEstructuras(section, [
        h2_contacto,
        p_contacto,
        form]);

    return section;

}

//Añadimos las secciones a nuestra web una vez está todo cargado.

window.onload = function () {
const main_app = document.querySelector("#main_app");
crearEstructuras(main_app, [
    generarBienvenida(),
    generarQueHacemos(),
    generarContacto(),
]);

} 

