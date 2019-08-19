function jquery_scmDC(_this){

    $( "#date_input1" ).datepicker(date).on('change', function(e) {
        _this.keyword.start_date = e.target.value;
    });
    $( "#date_input2" ).datepicker(date).on('change', function(e) {
        _this.keyword.end_date = e.target.value;
    });

    $( "#date_input3" ).datepicker(date).on('change', function(e) {
        _this.keyword_modal.keyword = e.target.value;
    });

    $(document).on("change","#part_group_select",function(){ // select 박스 바뀔때
        _this.keyword_modal.keyword3 = $("#part_group_select").val();
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


function jqgrid_au_modal(_this) {

   $("#scmDC_au_modal1").jqGrid({
        datatype: "json",
        mtype: 'POST',
        colNames:['품목그룹','품번','품명','수량','부품식별표','LOTNO'],
        colModel:[
            {name:'part_grp_name',index:'part_grp_name',width:50,sortable: false,width:150},
            {name:'part_code',index:'part_code',width:100 ,sortable: false,width:150},
            {name:'part_name',index:'part_name',width:100,sortable: false,width:150},
            {name:'pack_qty',index:'pack_qty',width:100,sortable: false,width:150},
            {name:'box_no',index:'box_no',width:100,key: true,sortable: false,width:150},
            {name:'lot_no',index:'lot_no',width:100,sortable: false,width:150},
            // {name:'lot_no',index:'lot_no',width:100,sortable: false,width:150, formatter: function (cellValue, option) {
            //         return '<input type="text" size="7" name="txtBox" id="txt_' + option.rowId +'"/>';
            //     }},
        ],
       width:926,
        shrinkToFit:false,
        height:150,
        pager:'#scmDC_au_modal_page1',
        jsonReader: {cell:""},
        rowNum: 100,
        rowList: [100, 200, 300, 400],
        viewrecords: true,
        multiselect:true,


    }).navGrid("#jqGridPager", { search: false, add: false, edit: false, del: false});



    $("#scmDC_au_modal2").jqGrid({


        colNames:['품목그룹','품번','품명','수량','부품식별표','LOTNO'],
        colModel:[
            {name:'part_grp_name',index:'part_grp_name',width:50,sortable: false,width:150},
            {name:'part_code',index:'part_code',width:100 ,sortable: false,width:150},
            {name:'part_name',index:'part_name',width:100,sortable: false,width:150},
            {name:'pack_qty',index:'pack_qty',width:100,sortable: false,width:150},
            {name:'box_no',index:'box_no',width:100,key: true,sortable: false,width:150},
            {name:'lot_no',index:'lot_no',width:100,sortable: false,width:150},
            // {name:'lot_no',index:'lot_no',width:100,sortable: false,width:150, formatter: function (cellValue, option) {
            //         return '<input type="text" size="7" name="txtBox" id="txt_' + option.rowId +'"/>';
            //     }},
        ],
        width:926,
        shrinkToFit:false,
        height:150,

        jsonReader: {cell:""},
        rowNum: 100,
        rowList: [100, 200, 300, 400],
        viewrecords: true,
        multiselect:true,


    }).navGrid("#jqGridPager", { search: false, add: false, edit: false, del: false});

}
