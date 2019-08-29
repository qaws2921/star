function modal() {
    var mixin = {
        data: function () {
            return {
                sys_common:{        // 공통코드 객체
                    code_type:"",
                    code_value:"",
                    code_name1:"",
                    code_name2:"",
                    code_name3:"",
                    code_name4:"",
                    code_name5:"",
                    code_name6:"",
                    code_name7:"",
                    code_name8:"",
                    use_yn:"Y",
                    user_name:"",
                    update_date:"",
                    keyword:""
                },
            }
        },
        methods: {
            reset:function(){ //공통코드 객체 리셋(추가 버튼이나 수정을 할때 먼저 안에 있는 데이터들을 없앤다.)
                var _this = this;
                _this.sys_common.code_value="";
                _this.sys_common.code_name1="";
                _this.sys_common.code_name2="";
                _this.sys_common.code_name3="";
                _this.sys_common.code_name4="";
                _this.sys_common.code_name5="";
                _this.sys_common.code_name6="";
                _this.sys_common.code_name6="";
                _this.sys_common.code_name8="";
                _this.sys_common.use_yn="Y";
            },
            modal_edit:function (data) {   // 데이터를 더블 클릭시 발동되는 함수(데이트의 값들을 객체에 저장한다)
                var _this = this;
                _this.reset();
                _this.sys_common=data;

            },

            modal_add_update:function (au) { // 저장 수정 함수 (버튼에서 au값 I 나 U를 넣어줘서 실행)
                var _this = this
                var txt ='저장 히겠습니까?';   // confirm 안에 텍스트 내용이 I, U 일때 달라진다.
                if (au === 'U'){
                    var txt ='수정 히겠습니까?';
                }
                if(confirm(txt)){
                    if (_this.effectiveness()) {
                        _this.sys_common.keyword = au; // 저장인지 수정인지 sys_common.keyword 값을 저장 I,U
                        $.ajax({
                            url: "sysCommon/common/au",
                            data: _this.sys_common, // 객체의 데이터를 보냄
                            type: 'POST',
                            async: true,
                            dataType: "json",
                            success: function (data) {
                                if (data.result === 'NG'){ // 결과 값인 NG 로 넘어오면 실행
                                    alert(data.message);
                                } else {
                                    $('#myModal').modal("hide"); //모달창을 닫는다
                                    if (au === 'I') { // 저장일때 저장한 코드그룹으로 다시 새롭게 조회한다
                                        _this.main_get($("#jqGrid").getGridParam(1));
                                    } else {  // 수정일때 데이터를 바꾼 코드그룹으로 다시 새롭게 조회한다
                                        _this.main_get2($("#jqGrid").getGridParam('page'));
                                    }
                                }
                            },
                            error: function () { // 에러일때 표시
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
            effectiveness:function () { // 유효성 검사
                var _this = this;
                if (_this.sys_common.code_value === ''){
                    alert("코드를 입력해주세요");
                    return false;
                }else if (_this.sys_common.code_name1 === ''){
                    alert("명칭1을 입력해주세요");
                    return false;
                }else {
                    return true;
                }
            },
        }
    }
    return mixin

}