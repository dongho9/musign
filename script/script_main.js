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

// svg이미지 길이 구하기
$(document).ready(function(){
    $('.svgAni').find('path').each(function(i, path){
        var length = path.getTotalLength();
        // alert(length);
    });
})

// 스크롤 애니메이션
$(document).ready(function(){
    $('.animate').scrolla({
        mobile:true, //모바일 버전시 활성화
        once:false //스크롤시 애니메이션 반복 실행
    })
})

// 배경색 변경
$(window).on('scroll reesize', function(){
    var scrollTop = $(document).scrollTop();
    // console.log(scrollTop);
    bgColor();
    function bgColor(){
        if(scrollTop > 1400){
            $('body').addClass('on');
        }
        else{
            $('body').removeClass('on');
        }
        if(scrollTop > 2700){
            $('body').removeClass('on')
        }
    }
})

//햄버거메뉴
$(document).ready(function(){
    $('.menuOpen button.open').on('click',function(){
        $('.menuOpen .menuWrap').addClass('on');
    });
    $('.close').on('click',function(){
        $('.menuWrap').removeClass('on');
    })
})

