function jquery_supp_modal(_this) {
    $(document).on("change","#supp_select",function(){ // select 박스 바뀔때
        _this.supp_select_change($("#supp_select").val());
    });

    $(document).on("click","#supp_check",function(){ // select 박스 바뀔때
        if ($( "#jqGrid3" ).getGridParam( "selrow" )) {
        var ids = $( "#jqGrid3" ).getGridParam( "selrow" );
        var data = $('#jqGrid3').jqGrid('getRowData', ids);
        _this.supp_bus(data.supp_code,data.supp_name);
            $('#myModal3').modal("hide");
        }else {
            alert("선택하십시오");
        }
    });



}





