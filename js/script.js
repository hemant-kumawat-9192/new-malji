function showsearchbar(){
    $('#serachbar').toggleClass('serachbar');
   
}
/////////////////////////////
$('.owl-carousel').owlCarousel({
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
