$('.works-carousel').owlCarousel({
    loop:true,  //бесконечная//
    margin:10,
    nav:true, //стрелки
    dots:false, //точки
    responsive:{
        0:{
            items:1
        },
        600:{
            item:1
        },
        1000:{
            items:1
        }
    }
})
$('.mobile-carousel').owlCarousel({
    loop:true,  //бесконечная//
    margin:10,
    nav:true, //стрелки
    dots:false, //точки
    responsive:{
        0:{
            items:1
        },
        600:{
            item:1
        },
        1000:{
            items:1
        }
    }
})

// alert("Подключение прошло успешно")