//getting element from html
let sw = document.getElementById("off")
let bg = document.getElementById("con")

//creating switch
let state = false

sw.addEventListener("click", toggleBulb);


function toggleBulb() {
    state = !state;

    if (state) {
        sw.style.background = "yellow"
        bg.style.background = "white"
    }
    else {
        sw.style.background = "white"
        bg.style.background = "green"


    }
}




