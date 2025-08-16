// ### 3. **Sumar elementos de un arreglo**
// - **Tarea**: Crea una función que sume todos los números de un arreglo.
// - **Tipo de función**: Función flecha
// - **Ejemplo**: `sumarArreglo([1, 2, 3])` → `6`


function sumarArreglo (numeros) {
    let suma = 0
    for (let numero of numeros) {
        suma += numero
    }
    return suma
}
