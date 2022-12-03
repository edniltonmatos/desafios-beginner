let topLeft1 = document.getElementById("top-left1")
let topRight1 = document.getElementById("top-right1")
let bottomRight1 = document.getElementById("bottom-right1")
let bottomLeft1 = document.getElementById("bottom-left1")

let topLeft2 = document.getElementById("top-left2")
let topRight2 = document.getElementById("top-right2")
let bottomRight2 = document.getElementById("bottom-right2")
let bottomLeft2 = document.getElementById("bottom-left2")

let slideres = document.querySelectorAll("input[type]")

let checbox = document.getElementById("checkbox")

let box = document.getElementById("box")

let input = document.getElementById("input")

const btn = document.getElementById("btn")

box.style.borderRadius = topLeft1.value + "%" + topRight1.value + "%" + bottomRight1.value + "%" + bottomLeft1.value + "%"

slideres.forEach(function(item){
    item.oninput = function(){
        box.style.borderRadius = topLeft1.value + "%" + topRight1.value + "%" + bottomRight1.value + "%" + bottomLeft1.value + "%"
        input.innerHTML = "border radius: " + box.style.borderRadius + ";"
    }
})

checbox.addEventListener("click", () =>{
    if (checbox.checked == true) {
        topLeft2.style.display = "block"
        topRight2.style.display = "block"
        bottomRight2.style.display = "block"
        bottomLeft2.style.display = "block"

        box.style.borderRadius = topLeft1.value + "%" + topRight1.value + "%" +  bottomRight1.value + "%" + bottomLeft1.value + "%" + "/" + topLeft2.value + "%" + topRight2.value + "%" + bottomRight2.value + "%" + bottomLeft2.value + "%"

        slideres.forEach(function(item){
            item.oninput = function(){
                box.style.borderRadius = topLeft1.value + "%" + topRight1.value + "%" +  bottomRight1.value + "%" + bottomLeft1.value + "%" + "/" + topLeft2.value + "%" + topRight2.value + "%" + bottomRight2.value + "%" + bottomLeft2.value + "%"
                input.innerHTML = "border radius: " + box.style.borderRadius + ";"
            }
        })
    }else{
        topLeft2.style.display = "none"
        topRight2.style.display = "none"
        bottomRight2.style.display = "none"
        bottomLeft2.style.display = "none"
        
        box.style.borderRadius = topLeft1.value + "%" + topRight1.value + "%" + bottomRight1.value + "%" + bottomLeft1.value + "%"

        slideres.forEach(function(item){
            item.oninput = function(){
                box.style.borderRadius = topLeft1.value + "%" + topRight1.value + "%" + bottomRight1.value + "%" + bottomLeft1.value + "%"
                input.innerHTML = "border radius: " + box.style.borderRadius + ";"
            }
        })
    }
})

btn.addEventListener("click", () => {
    navigator.clipboard.writeText(input.innerHTML);
    alert("Texto copiado")
})