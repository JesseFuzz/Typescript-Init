//alert("bem vindo a essa calculadora");

//console.log("estou vinculado ao index.html")

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let button = document.getElementById("botao1");


function somarNumeros(n1, n2){
    if(typeof n1 ===  'number' && typeof n2 ===  'number'){
        return (n1+n2)
    }else{
        let result = Number(n1)+Number(n2)
        return alert(result)
    }
    
}

button.addEventListener('click', () =>{
    console.log(somarNumeros(input1.value, input2.value));
})  


//alert(somarNumeros(input1, input2));