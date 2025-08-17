// ### 20. **Calcular promedio de un arreglo**
// - **Tarea**: Crea una función que calcule el promedio de un arreglo de números.
// - **Tipo de función**: Función flecha
// - **Ejemplo**: `promedio([10, 20, 30])` → `20`


const promedio = (numeros) => {
  let suma = 0

  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i]
  }

  return suma / numeros.length
}

