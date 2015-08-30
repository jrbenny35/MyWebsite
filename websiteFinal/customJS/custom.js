/**
 * Created by jrbenny35 on 8/18/15.
 */



$(document).ready(function(){

    $('.navbar .nav .nav-item .nav-link').on('click', function(){

        var whereToScroll = $(this).attr('data-scroll');
        var windowSize = $(window).width();


        if(windowSize < 800) {
            $.scrollTo(document.getElementById(whereToScroll), 700, {offset: -125});
        } else{$.scrollTo(document.getElementById(whereToScroll), 700, {offset: -80});}//end if

    });//End function



});