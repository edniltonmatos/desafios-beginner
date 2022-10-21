let inp = document.getElementById("bin-string")
let resp = document.getElementById("res")
let inf = document.getElementById("inf")

inp.addEventListener("keyup", valicao)

function valicao(){
    if(inp.value.match(/^[0-1]+$/g) === null){
        inf.innerHTML = "Insira apenas 0 e/ou 1"
        inf.style.color = "red"
    }else{
        inf.innerHTML = "Esta é a conversão do número binário"
        inf.style.color = "green"
        Bin2Dec()
    }
}
function Bin2Dec(){
    let num = inp.value
    let numArray = Array.from(num)
    let som = 0
    numArray.reverse()
    numArray.forEach(myFunction)
    
    function myFunction(item,index){
        som += Number((item) * 2**index)
    }
    resp.innerHTML = som
}