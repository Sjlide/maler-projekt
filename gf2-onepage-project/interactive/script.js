const rateButtons = document.querySelectorAll(".rate")

    rateButtons.forEach(function(knap){
        knap.addEventListener("click", rateos);
    })

function rateos(event){
event.preventDefault();
    let y = this.dataset.rating;
    skiftFarve(event.target);
}

function skiftFarve(element){
    rateButtons.forEach(function(button){
        button.classList.remove("active");
    })
    element.classList.add("active");
}

//LOCAL STORAGE

function sendRating(event){
    event.preventDefault();

    rateButtons.forEach(function(button){
        button.classList.remove("active");
    })
    givRating(z);
}

function sendRating() {
    localStorage.rateButtons;
    location.reload();
}
