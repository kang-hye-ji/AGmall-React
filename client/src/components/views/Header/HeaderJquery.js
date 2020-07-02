import $ from "jquery";

$(document).ready(function(){
        
    $(window).scroll(function(){
        if($(window).scrollTop()>0){
            $('header').addClass('onH');
        }else{
            $('header').removeClass('onH');
        }
    })
    
    //search
    $('.search input').focus(function(){
        $('.recentSear').show();
    })
    $('.search input').blur(function(){
        $('.recentSear').hide();
    })
    
    //mainMenu
    $('.mainMenu').find('>li>a').on('mouseover',function(){
        $(this).parent().siblings().find('>a').removeClass('onMain');
        $(this).parent().siblings().find('.mainMenuDrop').hide();
        $(this).addClass('onMain').parent().find('.mainMenuDrop').show();
    })
    $('.mainMenu').on('mouseleave',function(){
        $(this).find('>li>a').removeClass('onMain');
        $(this).find('.mainMenuDrop').hide();
    })
    //viewAll
    $('.viewAllCont>ul>li').on('mouseover',function(){
        $(this).siblings().removeClass('onVA');
        $(this).addClass('onVA');
    })
    $('.viewAllCont').on('mouseleave',function(){
        $(this).find('>ul>li').removeClass('onVA');
    })
    $('.viewAll>button').on('mouseover',function(){
        $(this).siblings().show();
    })
    $('.viewAllCont').on('mouseleave',function(){
        $(this).hide();
    })
})   