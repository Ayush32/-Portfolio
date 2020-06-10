/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    });

    $('.sub-btn').click(function(){
        window.alert('Message Sent!!!!!')
    });

    

});

 mybutton = document.getElementById("mybtn");

 window.onscroll = function () {
   scrollFunction();
 };
 function scrollFunction() {
   if (
     document.body.scrollTop > 20 ||
     document.documentElement.scrollTop > 20
   ) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }

 function topfunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }