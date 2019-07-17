function jquery_index(_this){
    $(document).on("change","#common_group_select",function(){
        _this.common_group_change($("#common_group_select").val());
    });

}
