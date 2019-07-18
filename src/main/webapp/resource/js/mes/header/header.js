$(function () {
    $(document).on("click",".nav-link",function () {
        $(".file-tree").css("display","none");
        $(this).parent().children(".file-tree").css("display","block");
    });
    var params = getUrlParams();

    $("."+params.check).parent().children(".file-tree").css("display","block");

});

function getUrlParams() {
    var params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) { params[key] = value; });
    return params;
}
