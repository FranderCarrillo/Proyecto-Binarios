import * as headerService from "./services/header/header.service.js";
import * as landingServicesService from "./services/landingServices/landingServices.service.js";
    
    addEventListener("load", (event) => {

        landingServicesService.getById(1)
        .then(res=>res.json())
        .then(LandingService=>{
            console.log(LandingService);
            //spanResponseId.innerHTML = JSON.stringify(user);

            // Prueba
            // Extraer solo los atributos que necesitamos
            const { icons, tittle, description } = LandingService;

            // Crear un nuevo objeto con los atributos seleccionados
            const datosFiltrados1 = { icons, tittle, description };

            // Mostrar el resultado en la consola o utilizarlo en el DOM
            console.log(datosFiltrados1); // { nombre: "Juan", edad: 25 }

            // Ejemplo: Mostrar en HTML
            document.getElementById("icon-1").innerHTML = datosFiltrados1.icons;
            document.getElementById("tittle-1").innerHTML = datosFiltrados1.tittle;
            document.getElementById("p-1").innerHTML = datosFiltrados1.description;
        })


        landingServicesService.getById(2)
        .then(res=>res.json())
        .then(LandingService=>{
            console.log(LandingService);
            //spanResponseId.innerHTML = JSON.stringify(user);

            // Prueba
            // Extraer solo los atributos que necesitamos
            const { icons, tittle, description } = LandingService;

            // Crear un nuevo objeto con los atributos seleccionados
            const datosFiltrados2 = { icons, tittle, description };

            // Mostrar el resultado en la consola o utilizarlo en el DOM
            console.log(datosFiltrados2); // { nombre: "Juan", edad: 25 }

            // Ejemplo: Mostrar en HTML
            document.getElementById("icon-2").innerHTML = datosFiltrados2.icons;
            document.getElementById("tittle-2").innerHTML = datosFiltrados2.tittle;
            document.getElementById("p-2").innerHTML = datosFiltrados2.description;
        })


        landingServicesService.getById(3)
        .then(res=>res.json())
        .then(LandingService=>{
            console.log(LandingService);
            //spanResponseId.innerHTML = JSON.stringify(user);

            // Prueba
            // Extraer solo los atributos que necesitamos
            const { icons, tittle, description } = LandingService;

            // Crear un nuevo objeto con los atributos seleccionados
            const datosFiltrados3 = { icons, tittle, description };

            // Mostrar el resultado en la consola o utilizarlo en el DOM
            console.log(datosFiltrados3); // { nombre: "Juan", edad: 25 }

            // Ejemplo: Mostrar en HTML
            document.getElementById("icon-3").innerHTML = datosFiltrados3.icons;
            document.getElementById("tittle-3").innerHTML = datosFiltrados3.tittle;
            document.getElementById("p-3").innerHTML = datosFiltrados3.description;
        })

        headerService.getById(1)
        .then(response => response.json())
        .then(header => {
            console.log(header);

            // Extraer solo los atributos que necesitamos
            const { title, description, image } = header;

            // Crear un nuevo objeto con los atributos seleccionados
            const datosHearder = { title, description, image };

            // Mostrar el resultado en la consola o utilizarlo en el DOM
            console.log(datosHearder);

            // Elementos del DOM donde se mostrarán los datos
            const titleElement = document.getElementById("title");
            const descriptionElement = document.getElementById("description");

            // Función para mostrar el título como si se estuviera escribiendo
            function typeEffect(element, text, delay = 75) {
                element.innerHTML = ""; // Limpiar el contenido inicial
                let i = 0;

                function typeNextChar() {
                    if (i < text.length) {
                        element.innerHTML += text.charAt(i);
                        i++;
                        setTimeout(typeNextChar, delay);
                    }
                }

                typeNextChar();
            }

            // Llamada a la función de efecto de escritura para el título
            typeEffect(titleElement, datosHearder.title);

            // Mostrar la descripción y la imagen inmediatamente
            descriptionElement.innerHTML = datosHearder.description;
            document.getElementById("parte-jose-casa").style.backgroundImage = `url(${datosHearder.image})`;
        });



        const formHeader = document.getElementById('frmHearder');

        formHeader.addEventListener('submit', (event)=>{
            
             var formData = new FormData(formHeader);
             const FormProps = Object.fromEntries(formData);
    
             console.log(FormProps);
             headerService.update(FormProps);
    
             event.preventDefault();
    
        })

        function obtenerSeleccionEnTiempoReal() {
            // Obtener el elemento <select> y la opción seleccionada actualizada
            const selectElement = document.getElementById("opciones");
            const valorSeleccionado = selectElement.value; // Obtener el valor actual en tiempo real
          
            // Aquí puedes trabajar con el valor seleccionado en tiempo real
            console.log("Valor seleccionado en tiempo real:", valorSeleccionado); // Solo para prueba, puedes quitarlo
            return valorSeleccionado;
        }


        const formService = document.getElementById('frmLandingService-1');

        formService.addEventListener('submit', (event)=>{
            
             var formData = new FormData(formService);
             const FormProps = Object.fromEntries(formData);
    
             console.log(FormProps);
             landingServicesService.update(FormProps, obtenerSeleccionEnTiempoReal());
    
             event.preventDefault();
    
        })
    
    });