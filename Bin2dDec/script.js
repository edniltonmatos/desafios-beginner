const num = document.querySelector("input")
number = 0
let result = 0
let resp = document.querySelector("#res")

num.addEventListener("input",updateValue)
numArray = String(number).split("").map((number) => {
    return Number(number)
  })
  
arrayInvert = numArray.reverse()

function bin2dec(item, index, arr){
  result += item * 2**index
}

arrayInvert.forEach(bin2dec)

function updateValue(e){
  number = e.target.value
}
resp.innerHTML = result


