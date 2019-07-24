window.onload = function () {
    new Vue({
        el:"#app",
        data: function () {
            return{

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
                add_update_check:'I'    // 저장인지 수정인지 체크
            }
        },
        mounted: function(){
            var _this = this;
            _this.jqGrid(); // jqGrid 실행
            jquery_sysBoard(_this); // vue 에서 실행 못하는 jquery
        },
        methods:{
             jqGrid:function(){ // jqGrid 메소드
                 var _this = this;
            var grid = $("#jqGrid");
                grid.jqGrid({


                    datatype: "json",
                    mtype: 'POST',
                    colNames:['게시판코드','영문명','한글','권한','최대파일','파일크기(MB)','사용유무','등록자','등록일'],
                    colModel:[
                        {name:'board_code',index:'board_code',key: true ,sortable: false},
                        {name:'board_en',index:'board_en',sortable: false},
                        {name:'board_kr',index:'board_kr',sortable: false},
                        {name:'board_auth',index:'board_auth',formatter:formmatter_auth,sortable: false},
                        {name:'files',index:'files',sortable: false},
                        {name:'file_size',index:'file_size',sortable: false},
                        {name:'use_yn',index:'use_yn',sortable: false},
                        {name:'user_name',index:'user_name',sortable: false},
                        {name:'update_date',index:'update_date',formatter:formmatter_date,sortable: false},


                    ],
                    width:1500,
                    height:500,
                    caption: "메세지관리",
                    pager:'#jqGridPager',
                    jsonReader: {cell:""},
                    rowNum: 100,
                    rowList: [100, 200, 300, 400],
                    viewrecords: true,
                    multiselect:true,
                    beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
                        var $myGrid = $(this),
                            i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                            cm = $myGrid.jqGrid('getGridParam', 'colModel');
                        return (cm[i].name === 'cb');
                    },
                    ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
                        var data = $('#jqGrid').jqGrid('getRowData', rowid); // 그 셀에 해당되는 데이터
                        _this.board_cd_edit(data); // 데이터 가공
                        _this.board_cd_update();
                    }

                }).navGrid("#jqGridPager", { search: false, add: false, edit: false, del: false});


             },

            board_cd_get_btn:function (page) { // 조회 버튼
                var _this = this;

                $('#jqGrid').setGridParam({ url: 'sysBoard/board/cd/get' ,datatype: "json", page: page}).trigger("reloadGrid");

            },
            board_cd_au:function (au) { // 저장 수정 ajax
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
                                    _this.board_cd_get_btn($("#jqGrid").getGridParam('page'));
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
            _sys_board_cd_reset:function(){ //코드 객체 리셋
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
            board_cd_update:function () { // 업데이트 모달창
                var _this = this;
                _this.add_update_check="U";

                $('#myModal').modal("show");
            },
            board_cd_add:function () {    // 추가를 누를때
                var _this = this;
                _this.add_update_check="I";
                _this._sys_board_cd_reset();

            },
            board_cd_edit:function (data) {   // 수정 값을 객체에 저장
                var _this = this;
                _this._sys_board_cd_reset();
                _this.sys_board_cd.board_code=data.board_code;
                _this.sys_board_cd.board_en=data.board_en;
                _this.sys_board_cd.board_kr=data.board_kr;
                if (data.board_auth === '당사'){
                    _this.sys_board_cd.board_auth='C';
                }else {
                    _this.sys_board_cd.board_auth='A';

                }
                _this.sys_board_cd.files=data.files;
                _this.sys_board_cd.file_size=data.file_size;
                _this.sys_board_cd.use_yn=data.use_yn;


            },
            board_cd_delete:function () { //삭제를 누를시
                var _this = this;
                 var ids = jQuery("#jqGrid").getGridParam('selarrrow'); //체크된 row id들을 배열로 반환
                var code = ids.join(",");


                    if (code === ''){
                        alert("삭제하는 데이터를 선택해주세요");
                    } else {
                        if (confirm("삭제하겠습니까?")){

                            // _this.board_cd_delete_ajax(code);

                        }

                    }

            },
            board_cd_delete_ajax:function (code) {  // 삭제 ajax
                var _this = this;
                 $.ajax({
                    url:"sysMsg/msg/delete",
                    data:{msg_code:code },
                    type : 'DELETE',
                    async: true,
                    dataType : "json",
                    success : function(data){
                        _this.board_cd_get_btn($("#jqGrid").getGridParam('page'));
                    },
                     error: function () {
                         alert("삭제실패")
                     }

                });
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
    });
}


function callback(cb) {
    cb();
}
