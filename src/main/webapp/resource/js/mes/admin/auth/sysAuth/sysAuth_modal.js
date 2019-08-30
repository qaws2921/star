function modal() {
    var mixin = {
        data: function () {
            return {
                sys_auth_cd:{
                    auth_code:'',
                    auth_name:'',
                    create_date:'',
                    update_date:'',
                    keyword:'',
                    user_name:'',
                    user_code:''
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
                        _this.sys_auth_cd.keyword = au;
                        $.ajax({
                            url: "sysAuth/auth/cd/au",
                            data: _this.sys_auth_cd,
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
                _this.sys_auth_cd={
                    auth_code:'',
                    auth_name:'',
                    create_date:'',
                    update_date:'',
                    keyword:'',
                    user_name:'',
                    user_code:''
                }
            },
            modal_edit:function (data) {   // 수정 값을 객체에 저장
                var _this = this;
                _this.reset();
                _this.sys_auth_cd.auth_code=data.auth_code;
                _this.sys_auth_cd.auth_name=data.auth_name;
            },
            effectiveness:function () { // 유효성 검사
                var _this = this;
                var pattern_num = /[0-9]/;	// 숫자

                var pattern_eng = /[a-zA-Z]/;	// 문자

                var pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자

                var pattern_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글체크



                if (_this.sys_auth_cd.auth_code === ''){
                    alert("권한그룹코드를 입력해주세요");
                    return false;
                }else if (_this.sys_auth_cd.auth_name === ''){
                    alert("권한그룹명을 입력해주세요");
                    return false;

                } else {
                    return true;
                }


            }
        }
    }
    return mixin

}