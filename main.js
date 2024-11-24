// show menu
let line = document.querySelector('.navbar .ri-menu-line');
let menu = document.querySelector('.navbar ul');
line.addEventListener('click',() =>{
    menu.classList.toggle('showmenu');
})

window.addEventListener('scroll',() =>{
    let nav = document.querySelector('.navbar');
    if(scrollY > 50){
        nav.classList.add('navbarSticky');
    }else{
        nav.classList.remove('navbarSticky');
    };
})

// SERVICE SLIDER
var swiper = new Swiper('.Services-swiper',{
    loop:true,
    autoplay:{
        delay:3000,
    },
    breakpoints:{
        0:{
            slidesPerView:1,

            spaceBetween:10,
        },
        640:{
            slidesPerView:2,

            spaceBetween:10,
        },
        1024:{
            slidesPerView:2,

            spaceBetween:10,
        },
        1400:{
            slidesPerView:4,

            spaceBetween:10,
        },
    },
});

var swiper = new Swiper('.projectSwiper',{
    slidesPerView:3,
    spaceBetween:10,
    loop:true,
    autoplay:{
        delay:2000,
    },
});
