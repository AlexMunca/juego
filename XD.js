//I
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let targeta2 = null;
let primerResutado = null;
let segundoResutado = null;
let movimientos = 0;
//Html
let mostrarMovimientos = document.getElementById('movimientos');
//G
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);
//F
function destapar(id){
    tarjetasDestapadas++;
    console.log(tarjetasDestapadas);

    if(tarjetasDestapadas == 1){
        tarjeta1 = document.getElementById(id);
        primerResutado = numeros[id]
        tarjeta1.innerHTML = primerResutado;
        tarjeta1.disabled = true;

    }else if(tarjetasDestapadas == 2){
        targeta2 = document.getElementById(id);
        segundoResutado = numeros[id];
        targeta2.innerHTML = segundoResutado;
        targeta2.disabled = true;
        //I.M
        movimientos++; 
        mostrarMovimientos.innerHTML = 'movimientos: ${movimientos}';
    }

}