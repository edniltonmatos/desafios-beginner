const flipBox = document.querySelector(".flip-box").style.transform
const flipBoxInner = document.querySelector(".flip-box-inner").style.transform

function girarLeft(){
    flipBox.style.transform = "rotateY(180deg)"
    flipBoxInner.style.transform = "rotateY(180deg)"
}
function girarRight(){
    flipBox.style.transform = "rotateY(-180deg)"
    flipBoxInner.style.transform = "rotateY(-180deg)"
}
function girarTop(){
    flipBox.style.transform = "rotateX(180deg)"
    flipBoxInner.style.transform = "rotateX(180deg)"
}
function girarBotton(){
    if 
    flipBox.style.transform = "rotateX(-180deg)"
    flipBoxInner.style.transform = "rotateX(-180deg)"

}