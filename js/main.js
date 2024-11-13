// import * as headerService from "./services/header/header.service.js";
import * as landingServicesService from "./services/landingServices/landingServices.service.js";

// const text = "Welcome to Ionic Motors";
//     const titleElement = document.getElementById("title");
//     let index = 0;

//     function typeWriter() {
//         if (index < text.length) {
//             titleElement.innerHTML += text.charAt(index);
//             index++;
//             setTimeout(typeWriter, 100); 
//         }
//     }

//     window.onload = typeWriter;
    
    addEventListener("load", (event) => {
        // const spanResponse = document.getElementById('json_response');
        // const spanResponseId = document.getElementById('json_responseId');
    
        // userService.getAll()
        // .then(res=>res.json())
        // .then(users=>{
        //     console.log(users);
        //     spanResponse.innerHTML = JSON.stringify(users);
        // })
    
        landingServicesService.getById(1)
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
            document.getElementById("icon-1").innerHTML = datosFiltrados.icons;
            document.getElementById("tittle-1").innerHTML = datosFiltrados.tittle;
            document.getElementById("p-1").innerHTML = datosFiltrados.description;
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
            const datosFiltrados = { icons, tittle, description };

            // Mostrar el resultado en la consola o utilizarlo en el DOM
            console.log(datosFiltrados); // { nombre: "Juan", edad: 25 }

            // Ejemplo: Mostrar en HTML
            document.getElementById("icon-2").innerHTML = datosFiltrados.icons;
            document.getElementById("tittle-2").innerHTML = datosFiltrados.tittle;
            document.getElementById("p-2").innerHTML = datosFiltrados.description;
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
            const datosFiltrados = { icons, tittle, description };

            // Mostrar el resultado en la consola o utilizarlo en el DOM
            console.log(datosFiltrados); // { nombre: "Juan", edad: 25 }

            // Ejemplo: Mostrar en HTML
            document.getElementById("icon-3").innerHTML = datosFiltrados.icons;
            document.getElementById("tittle-3").innerHTML = datosFiltrados.tittle;
            document.getElementById("p-3").innerHTML = datosFiltrados.description;
        })
        
        // const form = document.getElementById('frmUser');
        // form.addEventListener('submit', (event)=>{
            
        //     var formData = new FormData(form);
        //     const FormProps = Object.fromEntries(formData);
    
        //     console.log(FormProps);
        //     userService.update(FormProps);
    
        //     event.preventDefault();
    
        // })
    
    });