import * as headerService from "./services/header/header.service";
import * as landingServicesService from "./services/landingServices/landingServices.service";

const text = "Welcome to Ionic Motors";
    const titleElement = document.getElementById("title");
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            titleElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // ajusta el tiempo para cambiar la velocidad de escritura
        }
    }

    window.onload = typeWriter;
    
    addEventListener("load", (event) => {
        const spanResponse = document.getElementById('json_response');
        const spanResponseId = document.getElementById('json_responseId');
    
        userService.getAll()
        .then(res=>res.json())
        .then(users=>{
            console.log(users);
            spanResponse.innerHTML = JSON.stringify(users);
        })
    
        userService.getById(2)
        .then(res=>res.json())
        .then(LandingService=>{
            console.log(LandingService);
            //spanResponseId.innerHTML = JSON.stringify(user);

            // Prueba
            // Extraer solo los atributos que necesitamos
            const { icons, tittle, description } = LandingService;

            // Crear un nuevo objeto con los atributos seleccionados
            const datosFiltrados = { icons, tittle, description };

            // Mostrar el resultado en la consola o utilizarlo en el DOM
            console.log(datosFiltrados); // { nombre: "Juan", edad: 25 }

            // Ejemplo: Mostrar en HTML
            document.getElementById("icon").innerHTML = datosFiltrados.icons;
            document.getElementById("tittle").innerHTML = datosFiltrados.tittle;
            document.getElementById("description").innerHTML = datosFiltrados.description;
        })
        
        const form = document.getElementById('frmUser');
        form.addEventListener('submit', (event)=>{
            
            var formData = new FormData(form);
            const FormProps = Object.fromEntries(formData);
    
            console.log(FormProps);
            userService.update(FormProps);
    
            event.preventDefault();
    
        })
    
        
    });