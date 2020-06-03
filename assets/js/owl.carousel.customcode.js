$('.custom1').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'flipInX',
    items:1,
    loop:true,
    nav:false,
    dots:false,
    margin:30,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    stagePadding:30,
    smartSpeed:450,
});

//owl-brand-area
$('#owl-brand').owlCarousel({
    margin:10,
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoWidth:true,
    items:4,
})

//SingleBlog page
$('#SingleBlog').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
});

//SingleBlog2 page
$('#SingleBlog2').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
})