// ### 6. **Filtrar números mayores a 10**
// - **Tarea**: Crea una función que reciba un arreglo y devuelva solo los números mayores a 10.
// - **Tipo de función**: Función de orden superior
// - **Ejemplo**: `filtrarMayores([5, 12, 8, 15])` → `[12, 15]`

function filtrarMayores(numeros) {
  let resultado = []

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
      resultado.push(numeros[i]);
    }
  }

  return resultado
}