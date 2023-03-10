document.querySelector("#link").addEventListener("click",function(){
    alert("Hej der");
});

document.querySelector(".bg-farve").addEventListener("mouseover", function(){
    document.querySelector(".bg-farve").style.backgroundColor="orange"
})

document.querySelector(".bg-farve").addEventListener("mouseout", function(){
    document.querySelector(".bg-farve").style.backgroundColor="transparent"
})

document.querySelector(".bg-farve").addEventListener("mouseover", function(){
    document.querySelector(".bg-farve").style.color ="yellow";
})

document.querySelector(".bg-farve").addEventListener("mouseout", function(){
    document.querySelector(".bg-farve").style.color ="black"
})

document.querySelector(".tryk1").addEventListener("click", function(){
    document.querySelector("#tekst").style.color="blue"
})

document.querySelector(".tryk2").addEventListener("click", function(){
    document.querySelector("#tekst").style.color="black"
})

document.querySelector("#box").addEventListener("mouseover", function(){
    document.querySelector("#box").classList.toggle("box");
});

document.querySelector("#box").addEventListener("mouseout", function(){
    document.querySelector("#box").classList.toggle("box");
});

// function farve(color){
//     document.querySelector("#trykfarve").style.color=color;
//     console.log(color);
// }

// document.querySelector(".trykfarve1").addEventListener("click", farve("red"));

// document.querySelector(".trykfarve2").addEventListener("click", farve("green"));

// document.querySelector(".trykfarve3").addEventListener("click", farve("blue"));

// document.querySelector(".trykfarve4").addEventListener("click", farve("white"));


function farve(color) {
    document.querySelector("#trykfarve").style.color=color;
    console.log(color);
}
    document.querySelector(".trykfarve1").addEventListener("click", function(){
        farve("red");
    });

    document.querySelector(".trykfarve2").addEventListener("click", function(){
        farve("green");
    });

    document.querySelector(".trykfarve3").addEventListener("click", function(){
        farve("blue");
    });

    document.querySelector(".trykfarve4").addEventListener("click", function(){
        farve("white");
    });

