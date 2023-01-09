let input = document.getElementById("input")

let zero = document.getElementById("0")
let um = document.getElementById("1")
let dois = document.getElementById("2")
let tres = document.getElementById("3")
let quatro = document.getElementById("4")
let cinco = document.getElementById("5")
let seis = document.getElementById("6")
let sete = document.getElementById("7")
let oito = document.getElementById("8")
let nove = document.getElementById("9")

let igual = document.getElementById("igual")
let maisOuMenos = document.getElementById("+/-")
let AC = document.getElementById("AC")
let C = document.getElementById("C")
let mais = document.getElementById("+")
let menos = document.getElementById("-")
let dividido = document.getElementById("/")
let vezes = document.getElementById("x")
let ponto = document.getElementById(".")

AC.addEventListener("click", () =>{
    input.innerHTML = "0"
})
vezes.addEventListener("click", () =>{
    input.innerHTML += "x"
})
dividido.addEventListener("click", () =>{
    input.innerHTML += "/"
})
menos.addEventListener("click", () =>{
    input.innerHTML += "-"
})
mais.addEventListener("click", () =>{
    input.innerHTML += "+"
})
zero.addEventListener("click", () =>{
    input.innerHTML += "0"
})
um.addEventListener("click", () =>{
    input.innerHTML += "1"
})
dois.addEventListener("click", () =>{
    input.innerHTML += "2"
})
tres.addEventListener("click", () =>{
    input.innerHTML += "3"
})
quatro.addEventListener("click", () =>{
    input.innerHTML += "4"
})
cinco.addEventListener("click", () =>{
    input.innerHTML += "5"
})
seis.addEventListener("click", () =>{
    input.innerHTML += "6"
})
sete.addEventListener("click", () =>{
    input.innerHTML += "7"
})
oito.addEventListener("click", () =>{
    input.innerHTML += "8"
})
nove.addEventListener("click", () =>{
    input.innerHTML += "9"
})
