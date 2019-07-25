$(function () {
    $(".file-tree").filetree();
    var params = getUrlParams();
    $("."+params.check).css("background-color","#1453a1").css("color","#FFF");
    // $(".file-tree").slideDown();

    var link = document.location.href.split("/");
    var link2 = link[3].split("?");
    $("."+link2[0]).css("color","#1453a1").css("font-weight",700);
    $("."+link2[0]).parent().parent().parent().children(".menuMainA").addClass("menuMainA_down");
    $("."+link2[0]).parent().parent(".file-tree").slideDown(100);

    $(document).on("click",".menuMainA",function () {
        if (!$(this).hasClass("menuMainA_down")){
            $(".menuMainA").removeClass("menuMainA_down");
            $(".file-tree").slideUp(100);
        }


        if ($(this).hasClass("menuMainA_down")){
            $(this).removeClass('menuMainA_down');
            $(this).parent().children(".file-tree").slideUp(100);
        }else {
            $(this).addClass('menuMainA_down');
            $(this).parent().children(".file-tree").slideDown(100);
        }

    });

    wrapWindowByMask();

    setTimeout("closeWindowByMask()", 400);





});

function wrapWindowByMask() {
    //화면의 높이와 너비를 구한다.
    var maskHeight = $(document).height();
//      var maskWidth = $(document).width();
    var maskWidth = window.document.body.clientWidth;

    var mask = "<div id='mask' style='position:absolute; z-index:9000; background-color:#000000; display:none; left:0; top:0;'></div>";
    var loadingImg = '';

    loadingImg += "<div id='loadingImg' style='position:absolute; left:50%; top:40%; display:none; z-index:10000;'>";
    loadingImg += " <img src='resource/img/loading/loading.gif'/>";
    loadingImg += "</div>";

    //화면에 레이어 추가
    $('body')
        .append(mask)
        .append(loadingImg)

    //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
    $('#mask').css({
        'width' : maskWidth
        , 'height': maskHeight
        , 'opacity' : '0.3'
    });

    //마스크 표시
    $('#mask').show();

    //로딩중 이미지 표시
    $('#loadingImg').show();
}

function closeWindowByMask() {
    $('#mask, #loadingImg').hide();
    $('#mask, #loadingImg').remove();
}






function getUrlParams() {
    var params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) { params[key] = value; });
    return params;
}
