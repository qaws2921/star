window.onload = function () {
    new Vue({
        el:"#app",
        data: function () {
            return{

                sys_auth_cd:{
                     auth_code:'',
                     auth_name:'',
                     create_date:'',
                     update_date:'',
                     keyword:'',
                    user_name:'',
                    user_code:''
                },
                add_update_check:'I'    // 저장인지 수정인지 체크
            }
        },
        mounted: function(){
            var _this = this;
            _this.jqGrid(); // jqGrid 실행
            jquery_sysAuth(_this); // vue 에서 실행 못하는 jquery
        },
        methods:{
             jqGrid:function(){ // jqGrid 메소드
                 var _this = this;
            var grid = $("#jqGrid");
                grid.jqGrid({


                    datatype: "json",
                    mtype: 'POST',
                    colNames:['권한그룹코드','권한그룹명','등록자','등록일'],
                    colModel:[
                        {name:'auth_code',index:'auth_code',key: true },
                        {name:'auth_name',index:'auth_name'},
                        {name:'user_name',index:'user_name'},
                        {name:'update_date',index:'update_date',formatter:formmatter_date},


                    ],
                    width:1500,
                    height:500,
                    caption: "권한그룹관리",
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
                        _this.auth_cd_edit(data); // 데이터 가공
                        _this.auth_cd_update();
                    },



                }).navGrid("#jqGridPager", { search: false, add: false, edit: false, del: false});


             },

            auth_cd_get_btn:function () { // 조회 버튼
                var _this = this;

                $('#jqGrid').setGridParam({ url: 'sysAuth/auth/cd/get' ,datatype: "json", page: 1}).trigger("reloadGrid");

                // alert($('#jqGrid').getGridParam('page'));
            },
            auth_cd_au:function (au) { // 저장 수정 ajax
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

                                $('#myModal').modal("hide");
                                _this.auth_cd_get_btn();

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
            _sys_auth_cd_reset:function(){ //코드 객체 리셋
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
            auth_cd_update:function () { // 업데이트 모달창
                var _this = this;
                _this.add_update_check="U";

                $('#myModal').modal("show");
            },
            auth_cd_add:function () {    // 추가를 누를때
                var _this = this;
                _this.add_update_check="I";
                _this._sys_auth_cd_reset();

            },
            auth_cd_edit:function (data) {   // 수정 값을 객체에 저장
                var _this = this;
                _this._sys_auth_cd_reset();
                _this.sys_auth_cd.auth_code=data.auth_code;
                _this.sys_auth_cd.auth_name=data.auth_name;



            },
            auth_cd_delete:function () { //삭제를 누를시
                var _this = this;
                 var ids = jQuery("#jqGrid").getGridParam('selarrrow'); //체크된 row id들을 배열로 반환
                var code = ids.join(",");


                    if (code === ''){
                        alert("삭제하는 데이터를 선택해주세요");
                    } else {
                        if (confirm("삭제하겠습니까?")){

                            _this.auth_cd_delete_ajax(code);

                        }

                    }

            },
            auth_cd_delete_ajax:function (code) {  // 삭제 ajax
                var _this = this;
                 $.ajax({
                    url:"sysAuth/auth/cd/delete",
                    data:{auth_code:code },
                    type : 'DELETE',
                    async: true,
                    dataType : "json",
                    success : function(data){
                        _this.auth_cd_get_btn();
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
    });
}


function callback(cb) {
    cb();
}
