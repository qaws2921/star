// vue에서 시작하면 실행시킴.
function jquery_scmDCBox(_this){
    $("#date_input").datepicker(date);
    $(document).on("change","#part_group_select",function(){ // select 박스 바뀔때
        _this.sys_bPart_cd.part_grp_code = $("#part_group_select").val();
    });
    $( "#date" ).datepicker(date).on('change', function(e) {
        _this.keyword.date = e.target.value;
    });
}


var date={
    dateFormat: 'yy-mm-dd',
    prevText: '이전 달',
    nextText: '다음 달',
    monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    dayNames: ['일','월','화','수','목','금','토'],
    dayNamesShort: ['일','월','화','수','목','금','토'],
    dayNamesMin: ['일','월','화','수','목','금','토'],
    showMonthAfterYear: true,
    changeMonth: true,
    changeYear: true,
    yearSuffix: '년'
}


function formmatter_date(cellValue) { // 날짜 필터
    var y = cellValue.substring(0,4);
    var m = cellValue.substring(4,6);
    var d = cellValue.substring(6,8);
    var h = cellValue.substring(8,10);
    var mm = cellValue.substring(10,12);
    var s = cellValue.substring(12,14);
    // 20190718092501
    var date = y+"-"+m+"-"+d+" "+h+":"+mm+":"+s;
    return date;
}
function callback(cb) {
    cb();
}
