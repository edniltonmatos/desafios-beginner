const num = "111"
const numArray = Array.from(num)
let som = 0
numArray.forEach(myFunction)

function myFunction(item){
    som += parseInt(item)
}

console.log(som)