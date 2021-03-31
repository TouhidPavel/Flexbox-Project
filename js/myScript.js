$(document).ready(function(){

    //Website Preloading Screen
    $(window).on('load', function(){
        $('.preloader__wrapper').fadeOut('slow');
    });

    //Navigation Link Activate and Deactivate
    $('.nav__link a').click(function(){
        $('.nav__link a').removeClass('active');
        $(this).addClass('active');
    });

    $('.nav__logo, #footer a, .top__btn').click(function(){
        $('.nav__link a').removeClass('active');
    });

    //Navbar Toggler Icon
    $('.navbar__toggler').click(function(){
        $('.navbar__toggler').toggleClass('navbar-toggler-icon');
        $('.nav__list').slideToggle(200).toggleClass('navbar-toggler-icon');
    });

    //Read More...
    $('#about__btn').click(function(){
        $('#read__more').show();
    });
    
    //Scroll To Top
    $(window).scroll(function(){
        if($(this).scrollTop() > 300){
            $('.top__btn').fadeIn('slow');
        }
        else{
            $('.top__btn').fadeOut('slow');
        }
    });

    $('.top__btn').click(function(){
        $('html, body').animate({scrollTop: 0}, 100);
    });

    //Disable Context Menu Right Click, Cut, Copy and Paste
    $(window).on('contextmenu', function(event){
        event.preventDefault();
    });
    
    $(window).on('cut copy paste', function(event){
        event.preventDefault();
    });
});