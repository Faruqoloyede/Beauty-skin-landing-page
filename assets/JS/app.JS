const menu_bar = document.querySelector(".hamburger");
const nav = document.querySelector(".menu_nav");
const close = document.querySelector(".close");
const link = document.querySelectorAll(".nav_link");
const search_bar = document.querySelector(".search_input");
const search_icon = document.querySelector(".search");

menu_bar.addEventListener("click", ()=>{
    nav.classList.add("show");
});

close.addEventListener("click", ()=>{
    nav.classList.remove("show");
});

for(let links of link) {
    links.addEventListener("click", ()=>{
        document.querySelector(".nav_link.active").classList.remove("active");
        links.classList.add("active");
    });
};

search_icon.addEventListener("click", ()=>{
    search_bar.classList.add("show");
});

const scrollView = ()=>{
    const header = document.getElementById("header");
    
        if(this.scrollY >= 50) {
            header.classList.add("header_scroll");
        }else {
            header.classList.remove("header_scroll")
        }
}

window.addEventListener("scroll", scrollView);



var swiper = new Swiper(".slider", {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    
    pagination: {
      el: ".swiper-pagination",
    },
});