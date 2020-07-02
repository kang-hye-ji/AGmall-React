import $ from "jquery";
$(document).ready(function(){
    var scrollBot=$(document).height() - $(window).scrollTop();
    $('.tb_btn1').on('click',function(){
        $('html, body').animate({'scrollTop':'0'},500/* ,'jswing' */);
    })
    $('.tb_btn2').on('click',function(){
        $('html, body').animate({'scrollTop':scrollBot},500/* ,'jswing' */);
    })

    $('.tb_btn1').hide();
    $(window).scroll(function(){
        var scrollTop=$(window).scrollTop();
        var scrollBot=$(document).height() - $(window).height() - 200;
        if(scrollTop>200){
            $('.tb_btn1').fadeIn('fast');
        }else{
            $('.tb_btn1').fadeOut('fast');
        }
        if(scrollTop>=scrollBot){
            $('.tb_btn2').fadeOut('fast');
        }else{
            $('.tb_btn2').fadeIn('fast');
        }
    })
})