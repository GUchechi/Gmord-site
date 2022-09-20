jQuery(document).ready(function() {
    // Ripple effect
    "use strict";

    $('.slider').ripples({
        dropRadius: 15,
        perturbance: 0.01,
      });
      // End of Ripple effect


      // Animated Typed.js
      $(".text").typed({
        strings:["<strong>I love</strong><strong class='primary'> coding.</strong>","<strong>and to</strong><strong class='primary'> share !!.</strong>"],
         typespeed: 0,
         loop:true         
     });
    //  End of Typed.js

    // Sticky navbar
    $(window).scroll(function(){
        
      var top = $(window).scrollTop();
       if(top>=60){
         $("nav").addClass('secondary'); 
       }
       
       else 
           if($("nav").hasClass('secondary')){
               $("nav").removeClass('secondary'); 
           }
   });

   $("#team-members").owlCarousel({
    items:3,
    autoplay:true,
    smartSpeed:700,
    loop:true,
    autoplayHoverPause:true,
      responsive:{
        0:{
    
           items:1
        }, 
       480:{
    
           items:2
        }, 
                               
       768:{
    
           items:3
        } 
      }    
    
});
    $('.counter').counterUp({
      delay: 10,
      time: 5000
    });

});