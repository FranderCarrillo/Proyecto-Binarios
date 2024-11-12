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