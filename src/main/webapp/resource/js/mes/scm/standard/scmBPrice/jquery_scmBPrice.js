function jquery_scmBPrice(_this){
    $(document).on("change","#common_group_select",function(){ // select 박스 바뀔때
        _this.common_group_change($("#common_group_select").val(),$("#common_group_select option:checked").text());
    });

    $("#date_input1").datepicker(date);
    $("#date_input2").datepicker(date);

    $(document).on("click","#scmBPrice_excel_download",function () {

        // $.ajax({
        //     url:"scmBPrice/excel/download",
        //
        //     type : 'POST',
        //     async: true,
        //     dataType : "json",
        //     success : function(data){
        //         console.log(data);
        //         var blob=new Blob([data], {type: "application/vnd.ms-excel"});
        //         var link=document.createElement('a');
        //         link.href=window.URL.createObjectURL(blob);
        //         link.download="myFileName.xlsx";
        //         link.click();
        //         closeWindowByMask();
        //
        //     },
        //     error: function (data) {
        //         closeWindowByMask();
        //         console.log(data);
        //         alert("삭제실패")
        //     }
        //
        // });
        // wrapWindowByMask();
        // $("<form action='scmBPrice/excel/download2'method='post'></form>").appendTo('body').submit().remove();
        // callback(function () {
        //     closeWindowByMask();
        // });


        wrapWindowByMask();
        $.fileDownload('scmBPrice/excel/download', {
            httpMethod: "POST",
            data: $("#searchMainForm").serialize(),
            successCallback: function(url){
                closeWindowByMask();
            },
            failCallback: function(){
                alert('엑셀 파일 생성에 실패 했습니다.\n잠시 후 다시 시도해 주시기 바랍니다. ');
            }
        });

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

function jqgrid2() {
    var grid = $("#jqGrid2");
    grid.jqGrid({
        datatype: "json",
        mtype: 'POST',
        colNames:['업체코드','업체명','단가구분','시작일','종료일','품번','품명','단위','단가','사용유무'],
        colModel:[

            {name:'code_value',index:'code_value',width:100,key: true ,sortable: false, width:150},
            {name:'code_name1',index:'code_name1',width:100,sortable: false, width:150},
            {name:'code_name2',index:'code_name2',width:100,sortable: false, width:150},
            {name:'code_name8',index:'code_name8',width:100,sortable: false, width:150},
            {name:'code_name8',index:'code_name8',width:100,sortable: false, width:150},
            {name:'code_name8',index:'code_name8',width:100,sortable: false, width:150},
            {name:'code_name8',index:'code_name8',width:100,sortable: false, width:150},
            {name:'use_yn',index:'use_yn',width:100,sortable: false, width:150},
            {name:'user_name',index:'user_name',width:100,sortable: false, width:150},
            {name:'update_date',index:'update_date',width:100,formatter:formmatter_date,sortable: false, width:150},
        ],
        // autowidth: true,
        width:860,
        shrinkToFit:false,
        height:200,

        jsonReader: {cell:""},
        rowNum: 100,
        rowList: [100, 200, 300, 400],
        viewrecords: true,

        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창


        }

    }).navGrid("#jqGridPager", { search: false, add: false, edit: false, del: false});

}
