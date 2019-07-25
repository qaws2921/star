window.onload = function () {
    new Vue({
        el:"#app",
        data: function () {
            return{
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

                add_update_check:'I'    // 저장인지 수정인지 체크
            }
        },
        mounted: function(){
            var _this = this;
            _this.jqGrid(); // jqGrid 실행

            _this._auth_cd_get();
            _this.selectBox();

            jquery_sysUserSupp(_this); // vue 에서 실행 못하는 jquery
        },
        methods:{
             jqGrid:function(){ // jqGrid 메소드
                 var _this = this;
            var grid = $("#jqGrid");
                grid.jqGrid({


                    datatype: "json",
                    mtype: 'POST',
                    colNames:['사용자코드','사용자명','권한','전화번호','이메일','사용유무','최근로그인','수정일'],
                    colModel:[
                        {name:'user_code',index:'user_code',key: true,sortable: false},
                        {name:'user_name',index:'user_name',sortable: false },
                        {name:'auth_code',index:'auth_code',sortable: false},
                        {name:'tel_no',index:'tel_no',sortable: false},
                        {name:'email',index:'email',sortable: false},
                        {name:'use_yn',index:'use_yn',sortable: false},
                        {name:'login_date',index:'login_date',formatter:formmatter_date,sortable: false},
                        {name:'update_date',index:'update_date',formatter:formmatter_date,sortable: false},


                    ],
                    width:1500,
                    height:500,
                    caption: "사용자관리",
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
                        _this.user_supp_cd_edit(data); // 데이터 가공
                        _this.user_supp_cd_update(); // 수정창 띄어주기

                    }

                }).navGrid("#jqGridPager", { search: false, add: false, edit: false, del: false});


             },
            selectBox:function(){  // select2 실행 메소드
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
            user_supp_get_btn:function (page) { // 조회 버튼
                var _this = this;

                $('#jqGrid').setGridParam({ url: 'sysUserSupp/user/supp/get' ,datatype: "json", page: page}).trigger("reloadGrid");

            },
            user_supp_cd_au:function (au) { // 저장 수정 ajax
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
                                    _this.user_supp_get_btn($("#jqGrid").getGridParam('page'));
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
           _sys_user_supp_cd_reset:function(){ //코드 객체 리셋
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

            },
            user_supp_cd_update:function () { // 업데이트 모달창
                var _this = this;
                _this.add_update_check="U";
                $("#suc_auth_select").val(_this.sys_user_supp_cd.auth_code).trigger('change');
                $('#myModal').modal("show");
            },
            user_supp_cd_add:function () {    // 추가를 누를때
                var _this = this;
                $("#suc_auth_select").val('').trigger('change');
                _this.add_update_check="I";
                _this._sys_user_supp_cd_reset();

            },
            user_supp_cd_edit:function (data) {   // 수정 값을 객체에 저장
                var _this = this;
                _this._sys_user_supp_cd_reset();
                _this.sys_user_supp_cd.user_code=data.user_code;
                _this.sys_user_supp_cd.user_name=data.user_name;
                _this.sys_user_supp_cd.auth_code=data.auth_code;
                _this.sys_user_supp_cd.tel_no=data.tel_no;
                _this.sys_user_supp_cd.email=data.email;
                _this.sys_user_supp_cd.use_yn=data.use_yn;

            },
            user_supp_cd_delete:function () { //삭제를 누를시
                var _this = this;
                 var ids = jQuery("#jqGrid").getGridParam('selarrrow'); //체크된 row id들을 배열로 반환
                var code = ids.join(",");


                    if (code === ''){
                        alert("삭제하는 데이터를 선택해주세요");
                    } else {
                        if (confirm("삭제하겠습니까?")){
                            _this.user_supp_cd_delete_ajax(code);

                        }

                    }

            },
            user_supp_cd_delete_ajax:function (code) {  // 삭제 ajax
                wrapWindowByMask();
                 var _this = this;
                 $.ajax({
                    url:"sysUserSupp/user/supp/cd/delete",
                    data:{user_code:code },
                    type : 'DELETE',
                    async: true,
                    dataType : "json",
                    success : function(data){
                        if (data.result === 'NG'){
                            closeWindowByMask();
                            alert(data.message);
                        } else {
                            closeWindowByMask();
                            _this.user_supp_get_btn($("#jqGrid").getGridParam('page'));
                        }
                        },
                     error: function () {
                         closeWindowByMask();
                        alert("삭제실패")
                     }

                });
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
    });
}


function callback(cb) {
    cb();
}
