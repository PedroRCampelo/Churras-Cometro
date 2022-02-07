// Carne - 400g por pessoa / Caso dure + de 6 horas - 650g
// Cerveja - 1200ml por pessoa / Caso dure + de 6 horas - 2000l
// Refrigerante / água - 1000ml por pessoa / Caso dure + de 6 horas - 1500ml
// Crianças valem por 0,5

let mouseOver = function(){

    let header = document.getElementsByTagName ("header")[0];
    header.style.backgroundColor = "#9D1616";

    let menu = document.querySelectorAll ("a");

    let logoHeader = document.getElementById("logoHeader")
    logoHeader.setAttribute ("src", "assests/logo.png")

    for (i in menu){
        
        menu[i].style.color = "#fff"
    }
    
}

let mouseOut = function(){

    let header = document.getElementsByTagName ("header")[0];
    header.style.backgroundColor = "white"

    let menu = document.getElementsByTagName ("a")

    let logoHeader = document.getElementById("logoHeader")
    logoHeader.setAttribute ("src", "assests/logoV.png")

    for (i in menu){
    
        menu[i].style.color = "#9D1616"
    }

    
}



let inputAdult = document.getElementById ("adults");
let inputKids = document.getElementById ("kids");
let inputTime = document.getElementById ("time");

let resultado = document.getElementById("resultado")


let calcular = function(){
    
    let adultos = inputAdult.value
    let criancas = inputKids.value
    let duracao = inputTime.value
    
    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);

    let carneTotalKG = qtdTotalCarne / 1000 
    let cervejaTotalKG = qtdTotalCerveja / 1000
    let bebidaTotalKG = qtdTotalBebidas / 1000


    resultado.innerHTML = "Você precisará de: "
    resultado.innerHTML += `<p> ${carneTotalKG}kg de carne </p>`
    resultado.innerHTML += `<p> ${cervejaTotalKG}L de cerveja </p>`
    resultado.innerHTML += `<p> ${bebidaTotalKG}L de bebidas </p>`

}

    let carnePP = function(duracao){

    if (duracao >= 6){

        return 650
    }
    else{

        return 400
    }

}

let cervejaPP = function(duracao){

    if (duracao >= 6){

        return 2000
    }
    else{

        return 1200
    }

}

let bebidasPP = function(duracao){

    if (duracao >= 6){

        return 1500
    }
    else{

        return 1000
    }

}




