const btn = document.querySelector("button")
const btnAtivado = document.querySelector(".active")
const bg = document.querySelector("#colorCycle")

function ativar(){
    btn.classList.toggle("active")
    btnAtivado.innerHTML = 1
    //bg.classList.toggle("iniciar")
}

btn.addEventListener("click",ativar)

