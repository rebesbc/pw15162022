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