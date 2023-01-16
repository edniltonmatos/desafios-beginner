let input = document.getElementById("input")
const numbers = document.querySelectorAll(".numbers")
const operadores = document.querySelectorAll(".operadores")
const outros = document.querySelectorAll(".outros")
const igual = document.querySelector("#igual")

let text = ""
let calc = 0
let res = 0


numbers.forEach((number) =>{
    number.addEventListener("click",(e) =>{
        text += e.target.innerText
        input.innerText = text
        //calc = Number(String(calc) + e.target.innerText)
        //console.log(calc)
    })
})

operadores.forEach((operador) =>{
    operador.addEventListener("click", (e) =>{
        text += e.target.innerText
        let textarr = text.split("")
        switch (textarr[0]){
            case "+":
                input.innerText = "err";
                break
            default:
                input.innerText = text
        }
        
    })
})

AC.addEventListener("click", () =>{
    text.innerText = ""
})
