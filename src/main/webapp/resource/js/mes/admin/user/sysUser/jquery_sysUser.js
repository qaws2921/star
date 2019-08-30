function jquery_sysUser(_this){

    // main
    $(document).on("change","#common_dept_select",function(){ // select 박스 바뀔때
        _this.common_dept_change($("#common_dept_select").val(),$("#common_dept_select option:checked").text());
    });


    // modal
    $(document).on("change","#suc_dept_select",function(){ // select 박스 바뀔때
        _this.sys_user_cd.dept_code = $("#suc_dept_select").val();
    });
    $(document).on("change","#suc_duty_select",function(){ // select 박스 바뀔때
        _this.sys_user_cd.duty_code = $("#suc_duty_select").val();
    });
    $(document).on("change","#suc_auth_select",function(){ // select 박스 바뀔때
        _this.sys_user_cd.auth_code = $("#suc_auth_select").val();
    });



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

function jqGrid(_this) {

    $("#jqGrid").jqGrid({
        datatype: "json",
        mtype: 'POST',
        colNames:['사용자코드','사용자명','부서','직책','권한','전화번호','이메일','사용유무','최근로그인','수정일'],
        colModel:[
            {name:'user_code',index:'user_code',key: true,sortable: false},
            {name:'user_name',index:'user_name' ,sortable: false},
            {name:'dept_code',index:'dept_code',sortable: false},
            {name:'duty_code',index:'duty_code',sortable: false},
            {name:'auth_code',index:'auth_code',sortable: false},
            {name:'tel_no',index:'tel_no',sortable: false},
            {name:'email',index:'email',sortable: false},
            {name:'use_yn',index:'use_yn',sortable: false},
            {name:'login_date',index:'login_date',formatter:formmatter_date,sortable: false},
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
            _this.modal_edit(data); // 데이터 가공
            _this.main_update_btn(); // 수정창 띄어주기

        }
    }).navGrid("#jqGridPager", { search: false, add: false, edit: false, del: false});
}
