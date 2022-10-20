let inp = document.getElementById("bin-string")
let resp = document.getElementById("res")

inp.addEventListener("keyup", Bin2Dec)

function valicao(){
    if(inp.value){

    }else{

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