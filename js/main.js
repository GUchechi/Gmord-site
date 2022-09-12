jQuery(document).ready(function() {

    "use strict";

    $('.slider').ripples({
        dropRadius: 20,
        perturbance: 0.02,
      });

      $(".text").typed({
        strings:["<strong>I love</strong><strong class='primary'> coding.</strong>","<strong>and to</strong><strong class='primary'> share !!.</strong>"],
         typespeed: 0,
         loop:true
         
     });

     
});