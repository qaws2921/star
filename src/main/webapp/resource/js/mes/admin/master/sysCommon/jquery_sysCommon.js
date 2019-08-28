function jquery_sysCommon(_this){
    $(document).on("change","#common_group_select",function(){ // select 박스 바뀔때
        _this.common_group_change($("#common_group_select").val(),$("#common_group_select option:checked").text());
    });


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

function jqgrid(_this) {
    $("#jqGrid").jqGrid({
        datatype: "json",
        mtype: 'POST',
        colNames:['공용그룹','코드','명칭1','명칭2','명칭3','명칭4','명칭5','명칭6','명칭7','명칭8','사용유무','등록자','등록일'],
        colModel:[
            {name:'code_type',index:'code_type',sortable: false},
            {name:'code_value',index:'code_value',key: true ,sortable: false},
            {name:'code_name1',index:'code_name1',sortable: false},
            {name:'code_name2',index:'code_name2',sortable: false},
            {name:'code_name3',index:'code_name3',sortable: false},
            {name:'code_name4',index:'code_name4',sortable: false},
            {name:'code_name5',index:'code_name5',sortable: false},
            {name:'code_name6',index:'code_name6',sortable: false},
            {name:'code_name7',index:'code_name7',sortable: false},
            {name:'code_name8',index:'code_name8',sortable: false},
            {name:'use_yn',index:'use_yn',sortable: false},
            {name:'user_name',index:'user_name',sortable: false},
            {name:'update_date',index:'update_date',formatter:formmatter_date,sortable: false},
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
            _this.main_update_btn(); // 수정창 띄어주기

        }

    }).navGrid("#jqGridPager", { search: false, add: false, edit: false, del: false});



}