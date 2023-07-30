const scrollView = ()=>{
    const header = document.getElementById("header");
    
        if(this.scrollY >= 50) {
            header.classList.add("header_scroll");
        }else {
            header.classList.remove("header_scroll")
        }
}

window.addEventListener("scroll", scrollView)



var swiper = new Swiper(".slider", {
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
    },
  });