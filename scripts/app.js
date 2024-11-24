const respuestas = [
    "<img src='https://media.tenor.com/4tdgVCWep1IAAAAM/regele-fotbalului-regele.gif' alt='Imagen de Respuesta' style='max-width: 100%; height: auto;'>",
    "Escribeme nuevamente.."
];


let txt = document.getElementById("txt")
let main = document.getElementById("main")
let tiempos = [2000, 3000]

let generarRespuesta = ()=>{ 
    let tiempo = Math.floor(Math.random() * tiempos.length) 
    main.innerHTML += `
    <div class="msg1">
        <p>
            ${txt.value}
            <span>22:00</span>
        </p>
    </div>
    `
    setTimeout(()=>{

        let al = Math.floor(Math.random() * respuestas.length)
        main.innerHTML +=`
        <div class="msg2">
            <p>
                ${respuestas[al]}
                <span>22:10</span>
            </p>
        </div>
        `
    }, tiempos[tiempo])
}

document.getElementById("enviar").addEventListener("click", () => {
    let mensaje = txt.value.trim(); // Elimina espacios al inicio y al final

    if (mensaje === "") {
        alert("No puedes enviar un mensaje vacío o solo con espacios.");
        return; // Detiene la ejecución si el mensaje es inválido
    }

    generarRespuesta();
    txt.value = ""; // Limpia el campo de texto después de enviar el mensaje
})
