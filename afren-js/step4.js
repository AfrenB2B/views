var itm1 = document.querySelector(".item1");
var itm2 = document.querySelector(".item2");
var tik1 = document.querySelector(".tick1");
var tik2 = document.querySelector(".tick2");

tik1.addEventListener("click", () => {
    tik1.classList.toggle("active")
    itm1.classList.toggle("active")
    if(tik1.classList.contains("active")){
        tik2.classList.remove("active")
        itm2.classList.remove("active")
    }
});
tik2.addEventListener("click", () => {
    tik2.classList.toggle("active")
    itm2.classList.toggle("active")
    if(tik2.classList.contains("active")){
        tik1.classList.remove("active")
        itm1.classList.remove("active")
    }
});
