$(document).ready(function(){

    $('.assign_object').click(function(e) {
        event.preventDefault();
        $('.assign_object').removeClass('active');
        $(this).toggleClass('active');
    })

    $('.sidebar_li').click(function(e) {
        event.preventDefault();
        $('.sidebar_li').removeClass('active');
        $(this).toggleClass('active');
    })

    $('.green_reply').click(function(e) {
        $('.reply_section').show();
    })

    $('.white_cancel').click(function(e) {
        $('.reply_section').hide();
    })
  
});