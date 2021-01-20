const ham = document.querySelector(".ham-cont");
const menu = document.querySelector(".menu");

let body = document.querySelector("body")

let modalOpen = false;

ham.addEventListener("click", ()=> {
    menu.classList.toggle("men")
    if(!modalOpen){
        ham.classList.add("open")
        body.style.overflow = "hidden"
        modalOpen = true;
    }else {
        ham.classList.remove("open")
        body.style.overflow = "auto"
        modalOpen = false
    }
})
