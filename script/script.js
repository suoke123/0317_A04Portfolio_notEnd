$(function(){

///////////////////////////////////* GNB 서브메뉴 애니메이션 *///////////////////////////////////

    $("#gnb li").mouseover(function(){
        $("#gnb ul.subMenu").stop().fadeIn(1000);
        $("#subMenuBG").stop().fadeIn(1000);
    });

    $("#gnb li").mouseout(function(){
        $("#gnb ul.subMenu").stop().fadeOut(600);
        $("#subMenuBG").stop().fadeOut(600);
    });

///////////////////////////////////* GNB 서브메뉴 애니메이션 *///////////////////////////////////


///////////////////////////////////* 슬라이드쇼 애니메이션 *///////////////////////////////////

    setInterval(fnSlide, 3000);

    function fnSlide() {

        $("#slide a:first-child").fadeOut(500);
        $("#slide a:nth-child(2)").fadeIn(
            1000,
            function() {
                $("#slide a:first-child").insertAfter("#slide a:last-child");
            }
        );

    }

///////////////////////////////////* 슬라이드쇼 애니메이션 *///////////////////////////////////


///////////////////////////////////* 레이어 팝업창 *///////////////////////////////////

    $("div#contents span.layerPopupPoint").click(function(){

        $("#layerPopupBG").css({"display": "block"});

    });

    $("#layerPopupBG button#closeBtn").click(function(){

        $("#layerPopupBG").css({"display": "none"});

    });

///////////////////////////////////* 레이어 팝업창 *///////////////////////////////////
});
