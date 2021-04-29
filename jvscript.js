const burguer = document.querySelector(".burguer");
const nav = document.querySelector(".navLinks");
const nav_links = document.querySelectorAll(".navLinks li");


function navSlides (){

    burguer.addEventListener("click", () => {

        nav.classList.toggle("navActive");

        //burger x animation
        burguer.classList.toggle("x");
    });
    
    
        

}

navSlides();