const button = document.getElementById("change-eye");
const lock = document.getElementById("lock");
const eye = document.getElementById("eye");
const background = document.getElementById("background");
const input = document.getElementById("password");


button.addEventListener( "click", () => {
    
    if (eye.className == "open") {
        lock.src = "./lock.svg";
        eye.src = "./closed-eye.svg";
        eye.className = "closed";
        input.type = "text";
        background.className = "full"
    }
    else {
        lock.src = "./blue-lock.svg";
        eye.src = "eye.svg";
        eye.className = "open";
        input.type = "password";
        background.className = "round";
    }
})

