function jquery_scmECOut(_this){

    $( "#date_input1" ).datepicker(date).on('change', function(e) {
        _this.keyword.start_date = e.target.value;
    });
    $( "#date_input2" ).datepicker(date).on('change', function(e) {
        _this.keyword.end_date = e.target.value;
    });

    $( "#date_input3" ).datepicker(date).on('change', function(e) {
        _this.scm_in.work_date = e.target.value;
    });

    $(document).on("change","#part_group_select",function(){ // select 박스 바뀔때
        _this.keyword_modal.keyword2 = $("#part_group_select").val();
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
        colNames:['출고일자','출고번호','받을업체','등록자','츨고일시','입고구분','입고일자','비고','supp_code_from'],
        colModel:[
            {name:'work_date',index:'work_date',width:50,sortable: false,width:150},
            {name:'ec_no',index:'ec_no',width:100 ,key: true,sortable: false,width:150},
            {name:'supp_name_from',index:'supp_name_from',width:100,sortable: false,width:150},
            {name:'user_name',index:'user_name',width:100,sortable: false,width:150},
            {name:'create_date',index:'create_date',width:100,sortable: false,width:150,formatter:formmatter_date},
            {name:'in_type_desc',index:'in_type_desc',width:100,sortable: false,width:150},
            {name:'in_datetime',index:'in_datetime',width:100,sortable: false,width:150,formatter:formmatter_date},
            {name:'remark',index:'remark',width:100,sortable: false,width:150},
            {name:'supp_code_from',index:'supp_code_from',width:100,sortable: false,width:150,hidden:true},

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


    }).navGrid("#au_modal_page1", { search: false, add: false, edit: false, del: false});

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


    });




}

