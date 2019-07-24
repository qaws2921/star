function jquery_sysUser(_this){
    $(document).on("change","#common_dept_select",function(){ // select 박스 바뀔때
        _this.common_dept_change($("#common_dept_select").val(),$("#common_dept_select option:checked").text());
    });
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
