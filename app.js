alert("bem vindo a essa calculadora");
console.log("estou vinculado ao index.html")

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let button = document.getElementById("botao1");


function somarNumeros(n1, n2){
    return n1+n2
}

button.addEventListener('click', () =>{
    console.log(somarNumeros(input1, input2));
})  


//alert(somarNumeros(input1, input2));