let slider1 = document.getElementById("myRange-1")
let box = document.getElementById("box")

box.style.borderRadius = slider1.value + "%"

slider1.oninput = function(){
    box.style.borderRadius = this.value + "%"
}
