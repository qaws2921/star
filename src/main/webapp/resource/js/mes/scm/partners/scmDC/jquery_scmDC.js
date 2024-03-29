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


function print(dc_no,work_date,supp_code,supp_name) {

    var frmObj = $('<form>', {'id': 'fm_formIO', 'action': 'scmDC/print', 'method':'POST', 'target':'_blank'});
    var inpObj = $('<input>', {'name':'dc_no', 'value':dc_no});
    var inpObj2 = $('<input>', {'name':'work_date', 'value':work_date});
    var inpObj3 = $('<input>', {'name':'supp_code', 'value':supp_code});
    var inpObj4 = $('<input>', {'name':'supp_name', 'value':supp_name});
    frmObj.append(inpObj);
    frmObj.append(inpObj2);
    frmObj.append(inpObj3);
    frmObj.append(inpObj4);
    frmObj.appendTo('body').submit().remove();

}


function jqgrid_au_modal(_this) {



    var grid = $("#jqGrid");
    grid.jqGrid({
        datatype: "json",
        mtype: 'POST',
        colNames:['work_date','납품증번호','업체코드','업체명','납품일','입고구분','비고','등록자'],
        colModel:[
            {name:'work_date',index:'work_date',width:100,sortable: false,width:150,hidden:true},
            {name:'dc_no',index:'dc_no',width:50,key: true,sortable: false,width:150},
            {name:'supp_code',index:'supp_code',width:100 ,sortable: false,width:150},
            {name:'supp_name',index:'supp_name',width:100,sortable: false,width:150},
            {name:'work_date',index:'work_date',width:100,sortable: false,width:150},
            {name:'in_type',index:'in_type',width:100,sortable: false,width:150},
            {name:'remark',index:'remark',width:100,sortable: false,width:150},
            {name:'user_name',index:'user_name',width:100,sortable: false,width:150},

        ],
        autowidth: true,
        shrinkToFit:false,
        height:450,
        pager:'#jqGridPager',
        jsonReader: {cell:""},
        rowNum: 100,
        rowList: [100, 200, 300, 400],
        viewrecords: true,
        multiselect:true,
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
            var data = $('#jqGrid').jqGrid('getRowData', rowid); // 그 셀에 해당되는 데이터
            _this.main_edit(data); // 데이터 가공
            _this.main_update(data); // 수정창 띄어주기

        }

    }).navGrid("#jqGridPager", { search: false, add: false, edit: false, del: false});


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
        ],
       autowidth: true,
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
        ],
        autowidth: true,
        shrinkToFit:false,
        height:200,

        jsonReader: {cell:""},
        rowNum: 100,
        rowList: [100, 200, 300, 400],
        viewrecords: true,
        multiselect:true,


    }).navGrid("#jqGridPager", { search: false, add: false, edit: false, del: false});


}

