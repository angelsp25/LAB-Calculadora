//Angel Sanchez Paez - Generation CH62

//Inicio

function suma(num1, num2) //Función para sumar 2 números
{
    convertirFlotante(num1, num2);
    
    return num1 + num2; //Se regresa la suma de las variables num1 + num2
}

function resta(num1, num2)//Función para restar 2 números
{
    convertirFlotante(num1, num2);
    
    return num1 - num2; //Se regresa la resta de las variables num1 - num2
}

function dividir(num1, num2)
{
    convertirFlotante(num1, num2);
    
    return num1 / num2; //Se regresa la división de las variables num1 / num2
}

function multipicar(num1, num2)
{
    convertirFlotante(num1, num2);
    
    return num1 * num2; //Se regresa la multiplicación de las variables num1 * num2
}

function convertirFlotante(num1, num2)
{
    num1 = parseFloat(num1); //La variable num1 se parsea a flotante
    num2 = parseFloat(num2); //La variable num2 se parsea a flotante
}

let resultadoSuma = suma("11", 87); //Ejemplo utilizando la función suma con string y número
console.log(resultadoSuma);

let resultadoResta = resta(95, "43"); //Ejemplo utilizando la función resta con número y string
console.log(resultadoResta);

let resultadoDividir = dividir("24", "3"); //Ejemplo utilizando la función dividir con strings
console.log(resultadoDividir);

let resultadoMultiplicar = multipicar(11, 87); //Ejemplo utilizando la función multipicar con números
console.log(resultadoMultiplicar);

//Final