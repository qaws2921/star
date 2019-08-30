function modal() {
    var mixin = {
        data: function () {
            return {
                sys_part_group:{ // 품목그룹관리 객체
                    part_grp_code:'',
                    part_grp_name:'',
                    remark:'',
                    user_code:'',
                    user_name:'',
                    create_date:'',
                    update_date:'',
                    keyword:'',
                },
            }
        },
        methods: {
            modal_add_update_btn:function (au) { // 저장 수정 ajax
                var _this = this
                var txt ='저장 히겠습니까?';
                if (au === 'U'){
                    var txt ='수정 히겠습니까?';
                }
                if(confirm(txt)){
                    if (_this.effectiveness()) {
                        _this.sys_part_group.keyword = au;
                        $.ajax({
                            url: "sysPartGroup/part/group/au",
                            data: _this.sys_part_group,
                            type: 'POST',
                            async: true,
                            dataType: "json",
                            success: function (data) {
                                if (data.result === 'NG'){
                                    alert(data.message);
                                } else {
                                    $('#myModal').modal("hide");
                                    _this.main_get_btn($("#jqGrid").getGridParam('page'));
                                }
                            },
                            error: function () {
                                if (au === 'I') {
                                    alert("저장실패");

                                } else {

                                    alert("수정실패");
                                }
                            }
                        });
                    }
                }
            },
            reset:function(){ //코드 객체 리셋
                var _this = this;
                _this.sys_part_group={
                    part_grp_code:'',
                    part_grp_name:'',
                    remark:'',
                    user_code:'',
                    user_name:'',
                    create_date:'',
                    update_date:'',
                    keyword:'',
                }
            },
            modal_edit:function (data) {   // 수정 값을 객체에 저장
                var _this = this;
                _this.reset();
                _this.sys_part_group.part_grp_code=data.part_grp_code;
                _this.sys_part_group.part_grp_name=data.part_grp_name;
                _this.sys_part_group.remark=data.remark;
            },
            effectiveness:function () { // 유효성 검사
                var _this = this;
                if (_this.sys_part_group.part_grp_code === ''){
                    alert("품목그룹코드를 입력해주세요");
                    return false;
                }else if (_this.sys_part_group.part_grp_name === ''){
                    alert("품목그룹명을 입력해주세요");
                    return false;

                }else {
                    return true;
                }
            }
        }
    }
    return mixin

}