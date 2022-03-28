const btnTrocar = document.getElementById("trocar")
const valorOne = document.getElementById("valor1")
const valortwo = document.getElementById("valor2")

function troca(){
    const c = ""
    c = valorOne.innerHTML
    valorOne.innerHTML = valortwo.innerHTML
    valortwo.innerHTML = c
}

btnTrocar.addEventListener('click',troca)