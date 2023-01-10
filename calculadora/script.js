let input = document.getElementById("input")
let numbers = document.querySelectorAll(".numbers")
const operadores = document.querySelectorAll(".operadores")

let calc = 0
let res = 0


numbers.forEach((number) =>{
    number.addEventListener("click",(e) =>{
        input.innerText += e.target.innerText
        calc = Number(String(calc) + e.target.innerText)
        console.log(calc)
    })
})

operadores.forEach((operador) =>{
    operador.addEventListener("click", (e) =>{
        input.innerText += e.target.innerText
        
    })
})

AC.addEventListener("click", () =>{
    input.innerHTML = "0"
})
