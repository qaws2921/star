function jquery_scmStockList(_this){

    $( "#date_input1" ).datepicker(date).on('change', function(e) {
        _this.keyword.keyword = e.target.value;
    });


    $(document).on("change","#part_group_select",function(){ // select 박스 바뀔때
        _this.keyword.keyword3 = $("#part_group_select").val();
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


    $("#jqGrid").jqGrid({
        datatype: "json",
        mtype: 'POST',
        colNames:['품목그룹','품목코드','품목명','규격','단위','공급업체','적정재고(최소)','적정재고(최대)','재고량'],
        colModel:[
            {name:'part_grp_name',index:'part_grp_name',width:50,sortable: false,width:150},
            {name:'part_code',index:'part_code',width:100 ,key: true,sortable: false,width:150},
            {name:'part_name',index:'part_name',width:100,sortable: false,width:150},
            {name:'spec',index:'spec',width:100,sortable: false,width:150},
            {name:'unit_name',index:'unit_name',width:100,sortable: false,width:150},
            {name:'supp_name',index:'supp_name',width:100,sortable: false,width:150},
            {name:'min_qty',index:'min_qty',width:100,sortable: false,width:150},
            {name:'max_qty',index:'max_qty',width:100,sortable: false,width:150},
            {name:'stock_qty',index:'stock_qty',width:100,sortable: false,width:150},

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
            _this.main_update(); // 수정창 띄어주기

        }

    }).navGrid("#jqGridPager", { search: false, add: false, edit: false, del: false});




var lastsel2;
   $("#au_modal1").jqGrid({
        datatype: "json",
        mtype: 'POST',
        colNames:['품목그룹','품번','품명','규격','단위','포장수량'],
        colModel:[
            {name:'part_grp_name',index:'part_grp_name',sortable: false},
            {name:'part_code',index:'part_code',key: true ,sortable: false},
            {name:'part_name',index:'part_name',sortable: false},
            {name:'spec',index:'spec',sortable: false},
            {name:'unit_code',index:'unit_code',sortable: false},
            {name:'pack_qty',index:'pack_qty',sortable: false},
            // {name:'lot_no',index:'lot_no',width:100,sortable: false, formatter: function (cellValue, option) {
            //         return '<input type="text" size="7" name="txtBox" id="txt_' + option.rowId +'"/>';
            //     }},
        ],
       autowidth: true,
       emptyrecords:false,

        shrinkToFit:false,
        height:150,
        pager:'#au_modal_page1',
        jsonReader: {cell:""},
        rowNum: 100,
        rowList: [100, 200, 300, 400],
        viewrecords: true,
        multiselect:true,


    }).navGrid("#jqGridPager", { search: false, add: false, edit: false, del: false});

    $("#au_modal2").focus(function () {
        alert("ss");
    });

    $("#au_modal2").jqGrid({
        datatype: "json",
        mtype: 'POST',
        editurl: 'clientArray',
        colNames:['품목그룹','품번','품명','단위','입고수량'],
        colModel:[
            {name:'part_grp_name',index:'part_grp_name',sortable: false},
            {name:'part_code',index:'part_code',key: true ,sortable: false},
            {name:'part_name',index:'part_name',sortable: false},
            {name:'unit_code',index:'unit_code',sortable: false},
            {name:'in_qty',index:'in_qty',sortable: false,
                editrules: { number: true },
                editable: true,
                editoptions: {

                    dataEvents: [
                        {
                            type: 'focusout',
                            fn: function (e) {

                                if ($("#"+lastsel2+"_in_qty").val()){
                                    if (isNaN($("#"+lastsel2+"_in_qty").val())){
                                        alert("숫자만 가능합니다.");
                                        return false;
                                    }
                                }

                                $("#au_modal2").jqGrid('saveRow', lastsel2);
                            }
                        }

                    ]
                }
                },

        ],
        afterEditCell:function(rowid, cellname, value, iRow, iCol){
            alert("sss");

        },


        onCellSelect: function(rowid,icol,cellcontent,e){

            // rowid : 선택한 셀의 행 번호
            //
            // icol : 선택한 셀의 열 번호
            //
            // cellcontent : 선택한 셀의 값



             if (icol == 5){
               if ($("#"+lastsel2+"_in_qty").val()){
                   if (isNaN($("#"+lastsel2+"_in_qty").val())){
                       alert("숫자만 가능합니다.");
                       return false;
                   }
               }

                 // alert($("#"+lastsel2+"_in_qty").val());
                 $("#au_modal2").jqGrid('saveRow', lastsel2);
                $("#au_modal2").jqGrid('editRow',rowid,{
                     keys: true,
                 });
               lastsel2=rowid;
            }


        },
            beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },
        autowidth: true,
        shrinkToFit:false,
        height:184,

        jsonReader: {cell:""},
        rowNum: 100,
        rowList: [100, 200, 300, 400],
        viewrecords: true,
        multiselect:true,


    }).navGrid("#jqGridPager", { search: false, add: false, edit: false, del: false});




}

