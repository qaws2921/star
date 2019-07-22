function jquery_sysAuthProgram(_this){
    $(document).on("change","#menu_group_select",function(){ // select 박스 바뀔때

        if (_this.auth_code === ''){
            alert("권한그룹을 선택해주세요");
            _this.menu_group_code = $("#menu_group_select").val();
        } else {
            _this.menu_group_change($("#menu_group_select").val(),$("#menu_group_select option:checked").text());

        }
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

function cell(cellvalue, options, rowObject) {
    console.log(rowObject.menu_name);
    if(rowObject.menu_name === '게시판'){
        if(rowObject.level === 1) {
            return '<img src="resource/img/icon/folder.png" style="max-width: 17px;" />'+cellvalue;
        }else if(rowObject.level === 2){
            return "           "+ '<img src="resource/img/icon/File.png" style="max-width: 17px;" />'+cellvalue;
        }

    }else {
        if(rowObject.level === 1) {
            return '<img src="resource/img/icon/folder.png" style="max-width: 17px;" />'+cellvalue;
        }else if(rowObject.level === 2){
            return "      "+'<img src="resource/img/icon/folder.png" style="max-width: 17px;" />'+ cellvalue;
        }else if(rowObject.level === 3){
            return "           "+ '<img src="resource/img/icon/File.png" style="max-width: 17px;" />'+cellvalue;
        }

    }


}
function check(cellvalue, options, rowObject) {
    if (cellvalue === 'Y'){
        return '<input type="checkbox" checked >'
    }else {
        return '<input type="checkbox">'

    }
}
