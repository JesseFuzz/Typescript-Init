//alert("bem vindo a essa calculadora");
//alert(somarNumeros(input1, input2));

console.log("estou vinculado ao index.html")

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let soma = document.getElementById("botao1");
let sub = document.getElementById("botao2");
let mult = document.getElementById("botao3");
let div = document.getElementById("botao4");


function somarNumeros(n1, n2){
    if(typeof n1 ===  'number' && typeof n2 ===  'number'){
        return (n1+n2)
    }else{
        let result = Number(n1)+Number(n2)
        return alert('a soma é: '+ result)
    }
    
}

soma.addEventListener('click', () =>{
    console.log(somarNumeros(input1.value, input2.value));
})

function subtrairNumeros(n1, n2){
    if(typeof n1 ===  'number' && typeof n2 ===  'number'){
        return (n1-n2)
    }else{
        let result = Number(n1)-Number(n2)
        return alert('a subtração é: '+ result)
    }
    
}

sub.addEventListener('click', () =>{
    console.log(subtrairNumeros(input1.value, input2.value));
})

function multiplicarNumeros(n1, n2){
    if(typeof n1 ===  'number' && typeof n2 ===  'number'){
        return (n1*n2)
    }else{
        let result = Number(n1)*Number(n2)
        return alert('o produto é: '+ result)
    }
    
}

mult.addEventListener('click', () =>{
    console.log(multiplicarNumeros(input1.value, input2.value));
})

function dividirNumeros(n1, n2){
    if(typeof n1 ===  'number' && typeof n2 ===  'number'){
        return (n1/n2)
    }else{
        let result = Number(n1)/Number(n2)
        return alert('a divisão é: '+ result)
    }
    
}

div.addEventListener('click', () =>{
    console.log(dividirNumeros(input1.value, input2.value));
})