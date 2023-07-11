const promediar = (cantidadDeNotas, suma) => {
    return suma / cantidadDeNotas;
}
const consultarNotas = () => {
    let suma = 0;
    let notas = 0;

    let cantidadDeNotas = parseInt(prompt("ingrese la cantidad de notas a promediar: "));
    for (i = 0; i < cantidadDeNotas; i++) {
        notas = parseInt(prompt("ingrese una nota: " + i));
        suma += notas;
    }
    alert("el promedio es: " + promediar(cantidadDeNotas, suma));
}
consultarNotas();