const floof = (function(){

  const CAROUSEL_IMG = document.querySelector(".carousel__image")
  const CAROUSEL_FORWARD = document.querySelector(".carousel__forwardButton")
  const CAROUSEL_BACK = document.querySelector(".carousel__backButton")
  const BUTTONS = document.querySelector("#contain-button")
  
  let IMAGES = ["https://placeimg.com/1220/580",
  "https://www.colorbook.io/imagecreator.php?width=1220&height=580",
  "https://placekitten.com/1220/580", 
  "https://picsum.photos/1220/580", 
  "https://dummyimage.com/1220x580/fff/aaa"
  ]
  
  var index = 0
  CAROUSEL_IMG.src = IMAGES[index]
  
  CAROUSEL_FORWARD.addEventListener("click", shuffleForward)
  CAROUSEL_BACK.addEventListener("click", shuffleBack)
  BUTTONS.addEventListener("click", pageSwitch)
  
  function shuffleForward(event){
      index++
  if (IMAGES.length === index) {
      index = 0
  }
      CAROUSEL_IMG.src = IMAGES[index]
  }
  
  function shuffleBack(event){
      index--
  if (index < 0) {
      index = IMAGES.length - 1
  }
      CAROUSEL_IMG.src = IMAGES[index]
  }
  
  function pageSwitch(event){
    index
    if (IMAGES.length === index){
      index = length
    }
    CAROUSEL_IMG.src = IMAGES[index]
  }
  
  const DIV = document.querySelector(".carousel__image")
  const BUTTONBACK = document.querySelector(".carousel__backButton")
  const BUTTONFORWARD = document.querySelector(".carousel__forwardButton")
  const DOTS = document.querySelector("#contain-button")
  
  
  BUTTONBACK.addEventListener("click", mover, false);
  BUTTONFORWARD.addEventListener("click", mover2, false);
  
  function mover() {
    DIV.style.animationName = "none";
  
    requestAnimationFrame(() => {
      setTimeout(() => {
        DIV.style.animationName = ""
      },0);
    });
  }
  
  function mover2() {
      DIV.style.animationName = "none";
    
      requestAnimationFrame(() => {
        setTimeout(() => {
          DIV.style.animationName = ""
        },0);
      });
    }
  
  IMAGES.forEach(function(image, i) {
    const radioButton = document.createElement("ion-icon")
    radioButton.name = "radio-button-on"
    radioButton.className = "button"
    radioButton.dataset.index = i
    radioButton.onclick = buttonClick
    document.querySelector("#contain-button").append(radioButton)
  
  })
  
  function buttonClick(event) {
    index = event.target.dataset.index
    DIV.style.animationName = "none";
    
    requestAnimationFrame(() => {
      setTimeout(() => {
        DIV.style.animationName = ""
      },0);
    });

    }
})()

