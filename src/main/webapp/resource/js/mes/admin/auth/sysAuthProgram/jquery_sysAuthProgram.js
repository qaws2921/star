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

function cell(cellvalue, options, rowObject) {
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
            return "              "+ '<img src="resource/img/icon/File.png" style="max-width: 17px;" />'+cellvalue;
        }

    }


}

