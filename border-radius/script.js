const input1 = document.getElementById("input-p1")
const topLeft = document.getElementById("top-left")
const container = document.getElementById("container-border-radius")

input1.addEventListener("focus",add)
function add (){
    topLeft.innerHTML = input1.value
}
