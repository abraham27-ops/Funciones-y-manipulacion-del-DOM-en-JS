//Arreglo donde se iran guardando las tareas 
let Tareas = [];

//Referencias a los elementos del DOM
//Apuntamos a los elementos del HTML para poder manipularlos desde Js
const txtTarea = document.getElementById("txtTarea");
const prioridad = document.getElementById("prioridad");
const btnAgregar = document.getElementById("btnAgregar");
const listaTareas = document.getElementById("listaTareas");
const contador = document.getElementById("contador");

//Llamaremos a la funcion "agregarTarea" cada vez que que se haga click en el boton "Agregar"
btnAgregar.addEventListener("click", agregarTarea());

//funcion para agregar tarea
function agregarTarea() {
    const nombreTarea = txtTarea.value.trim();
    const prioridadTarea = prioridad.value;

    if (nombreTarea == "" || prioridadTarea == "") {
        
        Swal.fire({
            icon: "warning",
            title: "Campos incompletos",
            text: "Debes escribir una tarea y seleccionar una prioridad.",
            confirmButtonText: 'Aceptar'
        });

        return;

    }
    
    const tarea = {
        nombre: nombreTarea,
        prioridad: prioridadTarea,
    };

    Tareas.push(tarea);

    mostrarTareas();
    limpiarFormulario();
}
