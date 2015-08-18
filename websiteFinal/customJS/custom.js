/**
 * Created by jrbenny35 on 8/18/15.
 */



$(function (){

     $('#whatIDoTrig').on('click', function () {
         $('#whatIDo').find('.col-xs-12').slideToggle(1000);
         $("html, body").animate({
             scrollTop: $('html, body').get(0).scrollHeight}, 1000);

     });


    });//End document ready