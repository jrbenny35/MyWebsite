/**
 * Created by jrbenny35 on 8/18/15.
 */



$(document).ready(function(){

    $('.navbar .nav .nav-item .nav-link').on('click', function(){

        var whereToScroll = $(this).attr('data-scroll');

        $.scrollTo(document.getElementById(whereToScroll), 700, {offset:-80});


    });//End function



});