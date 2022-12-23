/*===== ACTIVE AND REMOVE MENU =====*/

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

for(var i=0; i<navLinks.length; i++){
    navLinks[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active");
        this.classList.toggle("active");
    });
}

// ===== SET PLAYBACK SPEED OF VIDEO ====

document.querySelector('video').playbackRate = 0.6;