// 1 ejercicio

for (let num = 1; num < 11; num ++){
    console.log (num);
}

 

// 2 ejercicio

let array = [1,2,3,4];
let result = 0;
function sumaArray (array){
    for (let i = 0; i < array.length; i++){
        result += array [i];
    }
    return result;
}
console.log (sumaArray (array));

// funcion suma

// function sumaArray (a,b){
//         return sumaArray = a + b;
//     }
//     console.log (sumaArray(2,5));


// 3 ejercicio
let  edades =[15,18,20,30];
let resultado = 0;
function ComprobarEdad (edades){
    for (let i = 18; i < edades.leght; i++){
        if (edades.leght >= 18){
           resultado = edades [i];
        }
    }
   return resultado;
}
console.log (ComprobarEdad (edades));
