const li = document.querySelectorAll("li")
const init = document.querySelector("#btn-init")
const parar = document.querySelector("#btn-parar")


function pararun(){
    for (let i = 0; i < li.length; i++){
        li[i].style.animationDuration = "0s"
    }
}

function initrun(){
    for (let i = 0; i < li.length; i++){
        li[i].style.animationDuration = "5s"
    }
}

parar.addEventListener("click", pararun)
init.addEventListener("click", initrun)