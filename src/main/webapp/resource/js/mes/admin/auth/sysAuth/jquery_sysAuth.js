function jquery_sysAuth(_this){

}

function formmatter_date(cellValue) { // 날짜 필터
   if (cellValue == null){
       return '';
   } else {

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
}

function formmatter_auth(cellValue) {
    if (cellValue === 'C'){
        return '당사';
    } else {
        return '전체';
    }

}
function jqGrid(_this) {
    $("#jqGrid").jqGrid({
        datatype: "json",
        mtype: 'POST',
        colNames:['권한그룹코드','권한그룹명','등록자','등록일'],
        colModel:[
            {name:'auth_code',index:'auth_code',key: true ,sortable: false,width:380},
            {name:'auth_name',index:'auth_name',sortable: false,width:380},
            {name:'user_name',index:'user_name',sortable: false,width:380},
            {name:'update_date',index:'update_date',formatter:formmatter_date,sortable: false,width:380},
        ],
        autowidth: true,
        shrinkToFit:false,
        height:500,
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
            _this.modal_edit(data); // 데이터 가공
            _this.main_update_btn();
        },
    }).navGrid("#jqGridPager", { search: false, add: false, edit: false, del: false});


}