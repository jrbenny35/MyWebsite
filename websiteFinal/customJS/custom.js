/**
 * Created by jrbenny35 on 8/18/15.
 */



$(function (){

     $('#whatIDoTrig').on('click', function () {
         var slideIt = $('#whatIDo').find('.col-xs-12');
         $(slideIt).first().slideDown(500);
         $(slideIt).first().next().slideDown(750);
         $(slideIt).first().next().next().slideDown(1000);

            $("html, body").animate({
                scrollTop: $("footer").offset().top
            }, 1500);

         $(this).fadeOut(1000);

     });


    });//End document ready