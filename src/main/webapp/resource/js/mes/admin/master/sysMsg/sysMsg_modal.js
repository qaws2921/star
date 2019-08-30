function modal() {
    var mixin = {
        data: function () {
            return {
                sys_msg:{ // 메세지 코드 객체
                    msg_code:'',
                    msg_name1:'',
                    msg_name2:'',
                    msg_name3:'',
                    msg_name4:'',
                    user_code:'',
                    user_name:'',
                    update_date:'',
                    keyword:''
                },
            }
        },
        methods: {
            modal_add_update:function (au) { // 저장 수정 ajax
                var _this = this
                var txt ='저장 히겠습니까?';
                if (au === 'U'){
                    var txt ='수정 히겠습니까?';
                }
                if(confirm(txt)){
                    if (_this.effectiveness()) {
                        _this.sys_msg.keyword = au;
                        $.ajax({
                            url: "sysMsg/msg/au",
                            data: _this.sys_msg,
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
                _this.sys_msg={
                    msg_code:'',
                    msg_name1:'',
                    msg_name2:'',
                    msg_name3:'',
                    msg_name4:'',
                    user_code:'',
                    user_name:'',
                    update_date:'',
                    keyword:''
                }
            },
            modal_edit:function (data) {   // 수정 값을 객체에 저장
                var _this = this;
                _this.reset();
                _this.sys_msg=data;

            },
            effectiveness:function () { // 유효성 검사
                var _this = this;
                if (_this.sys_msg.msg_code === ''){
                    alert("메세지코드를 입력해주세요");
                    return false;
                }else if (_this.sys_msg.msg_name1 === ''){
                    alert("메세지명1을 입력해주세요");
                    return false;

                }else {
                    return true;
                }
            }
        }
    }
    return mixin

}