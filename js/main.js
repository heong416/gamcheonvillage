$(document).ready(function(){
    //슬라이더

    $('.con01ListWrap').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:'<div class="slideBtn slidePrev"><img src="images/common/prevBtn.png"></div>',
        nextArrow:'<div class="slideBtn slideNext"><img src="images/common/nextBtn.png"></div>',
    });

    $('.mCon01ListWrap').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'<div class="slideBtn slidePrev"><img src="images/common/mPrevBtn.png"></div>',
        nextArrow:'<div class="slideBtn slideNext"><img src="images/common/mNextBtn.png"></div>',
    });

    
    $('.con02').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots:true,
        prevArrow:'<div class="slideBtn slidePrev"><img src="images/common/prevBtnWhite.png"></div>',
        nextArrow:'<div class="slideBtn slideNext"><img src="images/common/nextBtnWhite.png"></div>',
	});
    
    //맵 아이콘 클릭시 지도 변경
    $(".googleIcon").click(function() {
        $(".googleMap").addClass("googleMap02")
        $(".kakaoMap").removeClass("kakaoMap02")
        $(".naverMap").removeClass("naverMap02")
    }) 

    $(".kakaoIcon").click(function() {
        $(".kakaoMap").addClass("kakaoMap02")
        $(".googleMap").removeClass("googleMap02")
        $(".naverMap").removeClass("naverMap02")
    }) 

    $(".naverIcon").click(function() {
        $(".naverMap").addClass("naverMap02")
        $(".googleMap").removeClass("googleMap02")
        $(".kakaoMap").removeClass("kakaoMap02")
    }) 

    
    
    
    
    
    
    
    
})