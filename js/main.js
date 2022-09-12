jQuery(document).ready(function() {

    "use strict";

    $('.slider').ripples({
        dropRadius: 20,
        perturbance: 0.02,
      });

      $(".text").typed({
        strings:["<strong>i love</strong><strong class='primary'> codings.</strong>","<strong>and to</strong><strong class='primary'> share !!.</strong>"],
         typespeed:0,
         loop:true
         
     });

     
});