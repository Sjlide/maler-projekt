
// DOM REFERENCER -

const pointBox = document.querySelector("#score"); //pooint tavle
const dragFoodBox = document.querySelectorAll(".food div"); //mad
const targetAnimal = document.querySelectorAll("#animals div"); //dyrene
const foodBox = document.querySelector(".food"); //madkassen
countPoints("X")

// EVENTS på elemterne -

dragFoodBox.forEach(function(element){
  element.addEventListener("dragstart", startDrag);
})



targetAnimal.forEach(function(element){
  element.addEventListener("dragover", cancelDefault);
  element.addEventListener("drop", dropMad);
})



// FUNKTIONER
function startDrag(event){
  console.log("Du har taget fat i et element.");
  console.log(this.dataset.food);
  event.dataTransfer.setData("foodId", this.id);
  event.dataTransfer.setData("foodName", this.dataset.food);
}

function cancelDefault(event) {
  event.preventDefault();
  //Kan bruges til at "aflyse" eventet -
}

function dropMad(event){
  console.log("Du har påsat dit gæt med maden til et dyr.")

  let madId = event.dataTransfer.getData("foodId");
  let madType = event.dataTransfer.getData("foodName");

  if (madType  == this.dataset.food) {
    let heart = document.createTextNode("❤️")
    this.appendChild(heart);
    //pointBox.innerHTML = parseInt(pointBox.innerHTML) + 100;
    countPoints("plus");
    foodBox.removeChild(document.querySelector("#" + madId));
    alert("Dit svar er rigtigt og vil derfor få plusset dine point med 100.")
  } else {
    alert("Dit svar er forkert og vil derfor få frataget 100 af dine point, næste er 100% den rigtige!")
    //pointBox.innerHTML = parseInt(pointBox.innerHTML) - 100;
    countPoints("minus");
  }
}

// POPUP -

let popup = document.getElementById("popup");

function openPopup(){
  popup.classList.add("open-popup");
}

function closePopup(){
  popup.classList.remove("open-popup")
}

// TÆLLE POINT -

function countPoints(x) {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.point) {
        if (x == "plus") {
            localStorage.point = parseInt(localStorage.point) + 100;
        } 
        if(x == "minus"){
            localStorage.point = parseInt(localStorage.point) - 100;
        }
    } else {
      localStorage.point = 100;
    }
    // jeg har lavet et nyt score element    
    document.querySelector("#score").innerHTML = "Point : " + localStorage.point;
  } else {
    document.querySelector("#score").innerHTML = "Ingen point i localStorage";
  }
}

document.querySelector(".emptyPoints").addEventListener("click",emptyScore);

function emptyScore() {
    // localStorage.clear();
    localStorage.point = 0;
    // console.log("tester");
    location.reload();
}
