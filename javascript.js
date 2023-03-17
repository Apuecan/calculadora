 var clickBoton1 = document.getElementById("1");
 var clickBoton2 = document.getElementById("2");
 var clickBoton3 = document.getElementById("3");
 var clickBoton4 = document.getElementById("4");
 var clickBoton5 = document.getElementById("5");
 var clickBoton6 = document.getElementById("6");
 var clickBoton7 = document.getElementById("7");
 var clickBoton8 = document.getElementById("8");
 var clickBoton9 = document.getElementById("9");
 var clickBoton0 = document.getElementById("0");

 var suma = document.getElementById("suma");
 var dividir = document.getElementById("dividir");
 var resta = document.getElementById("resta");
 var multiplicar = document.getElementById("multiplicar");
 var igual = document.getElementById("igual");
 var borrar = document.getElementById("borrar");


 var numero1=0;
 var numero2=0;
 var operador=""; 
 var resultado=0;
 

 function concatenar (num) {
    var numVisor=document.getElementById("visor").textContent;
    numVisor = numVisor + num;
    document.getElementById("visor"). innerHTML=numVisor
 }


 clickBoton1.addEventListener("click", ()=>{
        var numero="1";
        concatenar(numero);
 });

 clickBoton2.addEventListener("click", ()=>{
    var numero="2";
    concatenar(numero);
});

clickBoton3.addEventListener("click", ()=>{
    var numero="3";
    concatenar(numero);
});

clickBoton4.addEventListener("click", ()=>{
    var numero="4";
    concatenar(numero);
});

clickBoton5.addEventListener("click", ()=>{
    var numero="5";
    concatenar(numero);
});

clickBoton6.addEventListener("click", ()=>{
    var numero="6";
    concatenar(numero);
});

clickBoton7.addEventListener("click", ()=>{
    var numero="7";
    concatenar(numero);
});

clickBoton8.addEventListener("click", ()=>{
    var numero="8";
    concatenar(numero);
});

clickBoton9.addEventListener("click", ()=>{
    var numero="9";
    concatenar(numero);
});

clickBoton0.addEventListener("click", ()=>{
    var numero="0";
    concatenar(numero);
});

suma.addEventListener("click", ()=>{
    var numVisor=document.getElementById("visor").textContent;
    numero1=numVisor;
    operador="+";
    document.getElementById("visor").innerHTML=""
});

resta.addEventListener("click", ()=>{
    var numVisor=document.getElementById("visor").textContent;
    numero1=numVisor;
    operador="-";
    document.getElementById("visor").innerHTML=""
});

dividir.addEventListener("click", ()=>{
    var numVisor=document.getElementById("visor").textContent;
    numero1=numVisor;
    operador="/";
    document.getElementById("visor").innerHTML=""
});

multiplicar.addEventListener("click", ()=>{
    var numVisor=document.getElementById("visor").textContent;
    numero1=numVisor;
    operador="*";
    document.getElementById("visor").innerHTML=""
});

igual.addEventListener("click", ()=>{
    var numVisor=document.getElementById("visor").textContent;
    numero2 = parseFloat (numVisor);
    numero1 = parseFloat (numero1);
    if (operador=="+"){
        resultado=numero1+numero2;
    } else {
        if(operador=="-"){
            resultado=numero1-numero2;
        }else{
            if (operador=="*"){
                resultado=numero1*numero2;
            }else{
                resultado=numero1/numero2;
            };
        };
    };
    
    document.getElementById("visor").innerHTML=resultado;
    
});

borrar.addEventListener("click", ()=>{
     numero1=0;
     numero2=0;
     operador=""; 
     resultado=0;
     document.getElementById("visor").innerHTML=""
})