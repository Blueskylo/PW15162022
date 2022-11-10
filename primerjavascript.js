// async para una funcion asyncrona, para que espere y haga las demas cosas del metodo
async function traerPersona(){
    const respuesta = await fetch("https://randomuser.me/api/");
    // console.log(respuesta);
    const datos = await respuesta.json();
    // console.log(datos);
    let foto= document.getElementById("foto");
    let nombre = document.getElementById("nombre");
    let telefono = document.getElementById("telefono");
    let caja = document.getElementById("caja");
    caja.style.display = "block";
    foto.setAttribute("src", datos.results[0].picture.large);
    nombre.innerHTML= datos.results[0].name.first+" "+datos.results[0].name.last;
    telefono.innerHTML = datos.results[0].phone
    console.log(datos.results[0].name.last+" "+datos.results[0].name.first);

}
function quitarSITEC(){
    // let pregunta = confirm("¿Seguro de quitar SITEC?");
    if(confirm("¿Seguro de quitar SITEC?")){
        alert("SITEC borrado ...:(");
        let chi = document.getElementById("sitec");
        chi.innerHTML = "Shiiiaaaale";
    }
}

function funcionAlerta(){
    alert("di clic");
}
// alert("Alerta en archivo externo javascript");
/*
    Varias lineas de comentarios
*/