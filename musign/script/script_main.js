// gnb 마우스오버, 포커스시 밑줄 span.bar
$(document).ready(function(){
    $('.gnb li a').on('mouseenter focus', function(){
        var bar = $(this).position().left;
        // 마우스 올린요소가 왼쪽으로 얼마 떨어졌는지 구하는 변수
        var widNum = $(this).width();
        // 마우스 올린요소의 width값 구하는 변수
        $('span.bar').css({'left' : bar + 'px', 'width' : widNum +'px'})
        $('.gnb li a').on('mouseleave', function(){
            $('span.bar').css({'width':'0px'});
        })
    })
})