function modal() {
    var mixin = {
        data: function () {
            return {
                auth_cd_get:[], // 권한 리스트
                sys_user_supp_cd:{
                    user_code:'',
                    user_name:'',
                    auth_code:'',
                    tel_no:'',
                    email:'',
                    use_yn:'Y',
                    update_user:'',
                    update_user_name:'',
                    create_date:'',
                    update_date:'',
                    login_date:'',
                    keyword:''
                },
            }
        },
        mounted: function(){
            var _this = this;
            _this.modal_selectBox();
            _this._auth_cd_get();
        },
        methods: {
            modal_selectBox:function(){  // select2 실행 메소드
                $("#suc_auth_select").select2();
            },
            _auth_cd_get:function(){
                var _this = this;
                $.ajax({
                    url: "sysAuth/auth/cd/get",
                    data:{page: 0.0,rows:0.0},
                    type: 'POST',
                    async: true,
                    dataType: "json",
                    success: function (data) {
                        _this.auth_cd_get = data.rows;
                    },
                    error: function () {
                        alert("실패");
                    }
                })
            },
            modal_add_update_btn:function (au) { // 저장 수정 ajax
                var _this = this
                var txt ='저장 히겠습니까?';
                if (au === 'U'){
                    var txt ='수정 히겠습니까?';
                }
                if(confirm(txt)){
                    if (_this.effectiveness()) {
                        _this.sys_user_supp_cd.keyword = au;
                        $.ajax({
                            url: "sysUserSupp/user/supp/cd/au",
                            data: _this.sys_user_supp_cd,
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
                _this.sys_user_supp_cd={
                    user_code:'',
                    user_name:'',
                    auth_code:'',
                    tel_no:'',
                    email:'',
                    use_yn:'Y',
                    update_user:'',
                    update_user_name:'',
                    create_date:'',
                    update_date:'',
                    login_date:'',
                    keyword:''
                }
                $("#suc_auth_select").val('').trigger('change');
            },
            modal_edit:function (data) {   // 수정 값을 객체에 저장
                var _this = this;
                _this.reset();
                _this.sys_user_supp_cd=data;
                $("#suc_auth_select").val(_this.sys_user_supp_cd.auth_code).trigger('change');

            },
            effectiveness:function () { // 유효성 검사
                var _this = this;
                if (_this.sys_user_supp_cd.user_code === ''){
                    alert("사용자코드를 입력해주세요");
                    return false;
                } else if (_this.sys_user_supp_cd.user_name === ''){
                    alert("사용자이름을 입력해주세요");
                    return false;
                } else if (_this.sys_user_supp_cd.auth_code === ''){
                    alert("권한을 선택해주세요");
                    return false;
                } else if (_this.sys_user_supp_cd.tel_no === ''){
                    alert("전화번호를 입력해주세요");
                    return false;
                } else if (_this.sys_user_supp_cd.email === ''){
                    alert("메일을 입력해주세요");
                    return false;
                }else {
                    return true;
                }
            }
        }
    }
    return mixin

}