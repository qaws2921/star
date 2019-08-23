function jquery_scmInFromDC(_this){

    $( "#date_input1" ).datepicker(date).on('change', function(e) {
        _this.keyword_post.keyword3 = e.target.value;
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

function callback(cb) {
    cb();
}


function jqgrid_au_modal(_this) {
    var lastsel2;

    $("#jqGrid").jqGrid({
        datatype: "json",
        mtype: 'POST',
        colNames:['품목그룹','품번','품명','규격','창고','위치','납품수량','불량수량','입고수량'],
        colModel:[
            {name:'part_grp_name',index:'part_grp_name',width:50,sortable: false,width:150},
            {name:'part_code',index:'part_code',width:100 ,key: true,sortable: false,width:150},
            {name:'part_name',index:'part_name',width:100,sortable: false,width:150},
            {name:'spec',index:'spec',width:100,sortable: false,width:150},
            {name:'cargo_name',index:'cargo_name',width:100,sortable: false,width:150},
            {name:'loc_name',index:'loc_name',width:100,sortable: false,width:150},
            {name:'order_qty',index:'order_qty',width:100,sortable: false,width:150},
            {name:'bad_qty',index:'bad_qty',width:100,sortable: false,width:150},
            {name:'in_qty',index:'in_qty',width:100,sortable: false,width:150,
                editrules: { number: true },
                editable: true,
                editoptions: {
                    dataEvents: [
                        {
                            type: 'focusout',
                            fn: function (e) {
                                if ($("#"+lastsel2+"_in_qty").val()){
                                    var data = $('#jqGrid').jqGrid('getRowData', lastsel2);
                                    if (isNaN($("#"+lastsel2+"_in_qty").val())){
                                        alert("숫자만 가능합니다.");
                                        return false;
                                    }else if($("#"+lastsel2+"_in_qty").val()>data.order_qty){
                                        alert("입고수량이 초과했습니다.");
                                        return false;
                                    }
                                }
                                $("#jqGrid").jqGrid('saveRow', lastsel2);
                            }
                        }

                    ]
                }},
        ],
        autowidth: true,
        shrinkToFit:false,
        height:450,
        jsonReader: {cell:""},
        viewrecords: true,
        loadComplete:function (data) {
            if (data.length){
                _this.keyword_post.keyword2 = data[0].supp_code;
                _this.supp_name = data[0].supp_name;
            }else {
                alert("해당 전표는 입고완료 되었거나, 존재하지 않습니다.");

            }
        },
        onCellSelect: function(rowid,icol,cellcontent,e){

            // rowid : 선택한 셀의 행 번호
            //
            // icol : 선택한 셀의 열 번호
            //
            // cellcontent : 선택한 셀의 값



            if (icol == 8){
                if ($("#"+lastsel2+"_in_qty").val()){
                    var data = $('#jqGrid').jqGrid('getRowData', lastsel2);
                    if (isNaN($("#"+lastsel2+"_in_qty").val())){
                        alert("숫자만 가능합니다.");
                        return false;
                    } else if($("#"+lastsel2+"_in_qty").val()>data.order_qty){
                        alert("입고수량이 초과했습니다.");
                        return false;
                    }
                }

                // alert($("#"+lastsel2+"_in_qty").val());
                $("#jqGrid").jqGrid('saveRow', lastsel2);
                $("#jqGrid").jqGrid('editRow',rowid,{
                    keys: false,
                });
                lastsel2=rowid;
                _this.lastsel2 = lastsel2;
            }


        },
    });






}

