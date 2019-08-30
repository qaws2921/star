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

function jqGrid2(_this) {
    $("#jqGrid2").jqGrid({
        url:'sysAuth/auth/cd/get',
        datatype: "json",
        mtype: 'POST',
        colNames:['권한그룹명','권한그룹코드'],
        colModel:[
            {name:'auth_name',index:'auth_name',sortable: false,width:487},
            {name:'auth_code',index:'auth_code',hidden:true,key: true,width:487},
        ],
        page:0,
        rowNum:0,
        autowidth: true,
        shrinkToFit:false,
        height:300,
        jsonReader: {cell:""},
        viewrecords: true,
        onCellSelect: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
            _this.auth_code = $("#jqGrid2").jqGrid('getRowData', rowid).auth_code;
            _this.main_get();
        }
    }).navGrid("#jqGridPager", { search: false, add: false, edit: false, del: false});
}

function jqGrid(_this) {
    $("#jqGrid").jqGrid({
        datatype: "json",
        mtype: 'POST',
        colNames:['code','메뉴','조회','추가','수정','삭제'],
        colModel:[
            {name:'menu_code',index:'menu_code',key: true,hidden:true,sortable: false},
            {name:'menu_name',index:'menu_name',width:500,formatter:cell,sortable: false},
            {name:'check_get',index:'check_get', editable: true, formatter: 'checkbox', edittype:"checkbox", editoptions:{value:'Y:N', defaultValue:'N'}, formatoptions:{disabled:false},sortable: false},
            {name:'check_add',index:'check_add', editable: true,formatter: 'checkbox', edittype:"checkbox", editoptions:{value:'Y:N', defaultValue:'N'}, formatoptions:{disabled:false},sortable: false},
            {name:'check_edit',index:'check_edit', editable: true,formatter: 'checkbox', edittype:"checkbox", editoptions:{value:'Y:N', defaultValue:'N'}, formatoptions:{disabled:false},sortable: false},
            {name:'check_del',index:'check_del', editable: true,formatter: 'checkbox', edittype:"checkbox", editoptions:{value:'Y:N', defaultValue:'N'}, formatoptions:{disabled:false},sortable: false},
        ],
        autowidth: true,
        shrinkToFit:false,
        height:500,
        jsonReader: {cell:""},
        viewrecords: true,
    }).navGrid("#jqGridPager", { search: false, add: false, edit: false, del: false});
}

