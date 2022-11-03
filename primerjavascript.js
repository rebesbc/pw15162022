// alert("Alerta en archivo externo JavaScript");
function funcionAlerta(){
    alert("di click");
}

function quitarSITEC(){
    let pregunta = confirm("¿Seguro de quitar SITEC?");
    if (pregunta == true) {
        alert("SITEC BORRADO..... :(");
        let chi = document.getElementById("sitec");
        chi.innerHTML = "Shiiiaaale";
    }
}

async function traePersona(){
    const respuesta = await fetch("https://randomuser.me/api/");
    // console.log(respuesta);
    const datos = await respuesta.json();
    // console.log(datos);
    console.log(datos.results[0].name.first + " " + datos.results[0].name.last);
}