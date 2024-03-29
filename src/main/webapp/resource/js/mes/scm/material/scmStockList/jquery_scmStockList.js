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

    }).navGrid("#jqGridPager", { search: false, add: false, edit: false, del: false});





}

