document.querySelector('#listo').onclick = function(evento) {
    evento.preventDefault();
    const $numero = document.querySelector('#numero');
    const numero = Number($numero.value);
    //const numero = $numero.value; Esto es lo mismo que lo de arriba? No veo que cambie nada.
    borrarIntegrantes();
    controlFamilia(numero);
   
}

document.querySelector('#calcularedad').onclick = function(evento) {
    evento.preventDefault();
    const edad = obtenerEdad();
    mostrarEdad('mayor', obtenerMayorNumero(edad));
    mostrarEdad('menor', obtenerMenorNumero(edad));
    mostrarEdad('promedio', obtenerPromedio(edad));
    mostrarResultados();
  
}

document.querySelector('#calcularsalario').onclick = function(evento) {
    evento.preventDefault();
    const salario = ObtenerSalario();
    mostrarSalario('mayor', calcularMayorsalario(salario));
    mostrarSalario('menor', calcularMenorsalario(salario));
    mostrarSalario('promedio', salarioAnualpromedio(salario));
    mostrarSalario('promediomen', salarioMensualpromedio(salario));
    mostrarResultadossalario();
   
}


function controlFamilia(numero) {
    if (numero > 0) {
        crearIntegrantes(numero);
    } else {
        resetear();
    }
}

function crearIntegrantes(numero) {
    for (let i = 1; i <= numero; i++) {
        const $nuevodiv = document.createElement('div');
        $nuevodiv.className = "integrantes";

        const $labelEdad = document.createElement('label');
        $labelEdad.textContent = (` ► Edad n° ... ${i}`);
        const $inputEdad = document.createElement('input');

        $inputEdad.type = "number";
        $inputEdad.className = "anios";
        $inputEdad.max = "90";
        $inputEdad.min = "01";

        const $labelSalario = document.createElement('label');
        $labelSalario.textContent = " ►  Salario anual...";
        const $inputSalario = document.createElement('input');

        $inputSalario.type = "number";
        $inputSalario.className = "num";
        $inputSalario.disabled = "disabled";
        $inputSalario.min = "100";
        $inputSalario.step = "50";

        const $botonAgregar = document.createElement('button');
        $botonAgregar.type = "button";
        $botonAgregar.textContent = "Agregar";
        $botonAgregar.className = "agregar";

        const $botonQuitar = document.createElement('button');
        $botonQuitar.type = "button";
        $botonQuitar.textContent = "Quitar";
        $botonQuitar.className = "quitar";

        $nuevodiv.appendChild($labelEdad);
        $nuevodiv.appendChild($inputEdad);
        $nuevodiv.appendChild($labelSalario);
        $nuevodiv.appendChild($inputSalario);
        $nuevodiv.appendChild($botonAgregar);
        $nuevodiv.appendChild($botonQuitar);

        const integrantes = document.querySelector('#familia');
        integrantes.appendChild($nuevodiv);
        mostrarBoton();
        removerAtributo();
        aplicarAtributo();
    }
}

function borrarIntegrantes() {
    const borrar = document.querySelectorAll('.integrantes');
    for (let i = 0; i < borrar.length; i++) {
        borrar[i].remove();
    }
}

function mostrarBoton() {
    document.querySelector('#calcularedad').className = '';
    document.querySelector('#calcularsalario').className = ''; ////
}


function obtenerEdad() {
    const edadpart = document.querySelectorAll('.integrantes .anios');
    let array = [];
    for (let i = 0; i < edadpart.length; i++) {
        array.push(Number(edadpart[i].value));
    }
    return array;
}

function mostrarEdad(tipo, valor) {
    document.querySelector(`#${tipo}-edad`).textContent = valor;
}

function mostrarResultados() {
    document.querySelector('#mostrar').className = '';

}

document.querySelector('#reset').onclick = function(evento) {
    resetear();
}

function resetear() {
    borrarIntegrantes();
    document.querySelector('#mostrar').className = 'oculto';
    document.querySelector('#mostrarsalario').className = 'oculto';
    document.querySelector('#calcularedad').className = 'oculto';
    document.querySelector('#calcularsalario').className = 'oculto';
}


function removerAtributo() {
    event.preventDefault();
    
    let m = document.querySelectorAll('.agregar');
    for (let i = 0; i < m.length; i++) {
        let n = m[i];
        n.onclick = function() {
            document.querySelectorAll('.num')[i].removeAttribute('disabled');
            
        };

    }
}

function aplicarAtributo() {
     event.preventDefault();
    let m = document.querySelectorAll('.quitar');
    for (let i = 0; i < m.length; i++) {
        let n = m[i];
        n.onclick = function() {
            document.querySelectorAll('.num')[i].setAttribute('disabled', 'disabled');
           
        };
    }
}


function ObtenerSalario() {
    const salar = document.querySelectorAll('.integrantes .num');
    let array = [];
    for (let i = 0; i < salar.length; i++) {
        if (!salar[i].disabled) {
            array.push(Number(salar[i].value));
        }
    }
    return array;
}


function mostrarSalario(tipo, valor) {
    document.querySelector(`#${tipo}-salario`).textContent = valor;
}

function mostrarResultadossalario() {
    document.querySelector('#mostrarsalario').className = '';
}




/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) 
inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, 
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
