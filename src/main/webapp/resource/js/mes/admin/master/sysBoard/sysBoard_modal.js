function modal() {
    var mixin = {
        data: function () {
            return {
                sys_board_cd:{
                    board_code:'',
                    board_en:'',
                    board_kr:'',
                    board_auth:'C',
                    files:'',
                    file_size:'',
                    use_yn:'Y',
                    user_code:'',
                    create_date:'',
                    update_date:'',
                    user_name:'',
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
                        _this.sys_board_cd.keyword = au;
                        $.ajax({
                            url: "sysBoard/board/cd/au",
                            data: _this.sys_board_cd,
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
                _this.sys_board_cd={
                    board_code:'',
                    board_en:'',
                    board_kr:'',
                    board_auth:'C',
                    files:'',
                    file_size:'',
                    use_yn:'Y',
                    user_code:'',
                    create_date:'',
                    update_date:'',
                    user_name:'',
                    keyword:''
                }

            },
            modal_edit:function (data) {   // 수정 값을 객체에 저장
                var _this = this;
                _this.reset();
                _this.sys_board_cd=data;
                if (data.board_auth === '당사'){
                    _this.sys_board_cd.board_auth='C';
                }else {
                    _this.sys_board_cd.board_auth='A';
                }
            },
            effectiveness:function () { // 유효성 검사
                var _this = this;
                var pattern_num = /[0-9]/;	// 숫자

                var pattern_eng = /[a-zA-Z]/;	// 문자

                var pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자

                var pattern_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글체크



                if (_this.sys_board_cd.board_code === ''){
                    alert("게시판코드를 입력해주세요");
                    return false;
                }else if (_this.sys_board_cd.board_en === '' || pattern_kor.test(_this.sys_board_cd.board_en)){
                    alert("영어명을 다시 입력해주세요");
                    _this.sys_board_cd.board_en = '';
                    return false;

                }else if (_this.sys_board_cd.board_kr === '' || pattern_eng.test(_this.sys_board_cd.board_kr)){
                    alert("한글명을 다시 입력해주세요");
                    _this.sys_board_cd.board_kr = '';
                    return false;

                } else if (_this.sys_board_cd.files === ''){
                    alert("최대파일수를 다시 입력해주세요");
                    _this.sys_board_cd.files = '';
                    return false;

                } else if (_this.sys_board_cd.file_size === ''){
                    alert("최대파일크기를 다시 입력해주세요");
                    _this.sys_board_cd.file_size = '';
                    return false;

                } else {
                    return true;
                }

            }
        }
    }
    return mixin

}