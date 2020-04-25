function obtenerMayorNumero(edad) {
    const max = Math.max.apply(null, edad);
    return max;
}

function obtenerMenorNumero(edad) {
    const min = Math.min.apply(null, edad);
    return min;
}

function obtenerPromedio(edad) {
    let control = 0;
    for (let i = 0; i < edad.length; i++) {
        control = control + edad[i];
    }
    return (control / edad.length).toFixed(1);
}

function calcularMayorsalario(salario) {
    const max = Math.max.apply(null, salario);
    return max;
}

function calcularMenorsalario(salario) {
    const min = Math.min.apply(null, salario);
    return min;
}

function salarioAnualpromedio(salario) {
    let control = 0;
    for (let i = 0; i < salario.length; i++) {
        control = control + salario[i];
    }
    return (control / salario.length).toFixed(1);
}

function salarioMensualpromedio(salario) {
    let control = 0;
    for (let i = 0; i < salario.length; i++) {
        control = control + salario[i];
    }
    return ((control / salario.length) / 2).toFixed(1);

}