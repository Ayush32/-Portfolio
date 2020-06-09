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
    })

    $('.sub-btn').click(function(){
        window.alert('Message Sent!!!!!')
    })

});