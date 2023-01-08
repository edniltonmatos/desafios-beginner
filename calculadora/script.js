input = document.getElementById("input")
numbers = document.querySelectorAll(".numbers")
let calc = 0


numbers.forEach((item,index,arr) => {
    arr[index].value = index + 1
    item.addEventListener("click", () => {
        input.innerHTML = this.value
    })
});
