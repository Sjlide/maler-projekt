const DIV = document.querySelector(".animatedDiv")
const BUTTON = document.querySelector(".button")

BUTTON.addEventListener("click", mover)

function mover(event){
    if (DIV.classList.contains("animatedDiv--moved")){
        DIV.classList.remove("animatedDiv--moved")
    } else{
    DIV.classList.add("animatedDiv--moved")
}}