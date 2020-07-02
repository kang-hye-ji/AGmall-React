import $ from "jquery";
$(document).ready(function(){
    $('.visualSl .slick-dots').find('>li').eq(0).find('button').text('카카오톡 이벤트');
    $('.visualSl .slick-dots').find('>li').eq(1).find('button').text('친구추천 이벤트');
    $('.visualSl .slick-dots').find('>li').eq(2).find('button').text('4월 회원가입');
    $('.visualSl .slick-dots').find('>li').eq(3).find('button').text('4월 회원혜택');
})