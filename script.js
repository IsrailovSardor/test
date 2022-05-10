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

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// alert("Подключение прошло успешно")