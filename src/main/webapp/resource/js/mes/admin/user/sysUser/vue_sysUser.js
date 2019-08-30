window.onload = function () {
    var mixin = modal();

    new Vue({
        el:"#app",
        mixins: [mixin],
        data: function () {
            return{
                common_dept_get:[], // 부서 리스트
                common_dept_code:'', // 부서 코드
                common_dept_name:'', // 부서 이름
                common_dept_code_post:'', // 부서코드 포스트 보낼거


                add_update_check:'I'    // 저장인지 수정인지 체크
            }
        },
        mounted: function(){
            var _this = this;
            _this._common_dept_get();
            jqGrid(_this); // jqGrid 실행
            jquery_sysUser(_this); // vue 에서 실행 못하는 jquery
            _this.selectBox();
        },
        methods:{
            selectBox:function(){  // select2 실행 메소드
                $("#common_dept_select").select2();
            },
            _common_dept_get:function(){ // 부서리스트 ajax
                var _this = this;
                $.ajax({
                    url: "sysUser/common/dept/get",
                    type: 'POST',
                    async: true,
                    dataType: "json",
                    success: function (data) {
                        _this.common_dept_get = data;
                        _this.common_dept_code = data[0].code_value;
                        _this.common_dept_name = data[0].code_name1;

                    },
                    error: function () {
                        alert("실패");

                    }
                })
            },
            common_dept_change:function(code,name){ // select 박스 바뀔때
                var _this = this;
                 _this.common_dept_code = code;
                 _this.common_dept_name = name;
            },
            main_get_btn:function (page) { // 조회 버튼
                var _this = this;
                _this.common_dept_code_post =_this.common_dept_code;
                $('#jqGrid').setGridParam({ url: 'sysUser/user/get',postData: { dept_code: _this.common_dept_code_post} ,datatype: "json", page: page}).trigger("reloadGrid");
            },
            main_get_btn2:function (page) { // 조회 버튼
                var _this = this;
                $('#jqGrid').setGridParam({ url: 'sysUser/user/get',postData: { dept_code: _this.common_dept_code_post} ,datatype: "json", page: page}).trigger("reloadGrid");
            },
            main_update_btn:function () { // 업데이트 모달창
                var _this = this;
                _this.add_update_check="U";
                $('#myModal').modal("show");
            },
            main_add_btn:function () {    // 추가를 누를때
                var _this = this;
                _this.add_update_check="I";
                _this.reset();
            },
            main_delete_btn:function () { //삭제를 누를시
                var _this = this;
                 var ids = jQuery("#jqGrid").getGridParam('selarrrow'); //체크된 row id들을 배열로 반환
                var code = ids.join(",");
                if (code === ''){
                    alert("삭제하는 데이터를 선택해주세요");
                } else {
                    if (confirm("삭제하겠습니까?")){
                        _this.main_delete_btn_ajax(code);
                    }
                }
            },
            main_delete_btn_ajax:function (code) {  // 삭제 ajax
                wrapWindowByMask();
                 var _this = this;
                 $.ajax({
                    url:"sysUser/user/cd/delete",
                    data:{user_code:code},
                    type : 'DELETE',
                    async: true,
                    dataType : "json",
                    success : function(data){
                        if (data.result === 'NG'){
                            closeWindowByMask();
                            alert(data.message);
                        } else {
                            closeWindowByMask();
                            _this.main_get_btn2($("#jqGrid").getGridParam('page'));
                        }
                        },
                     error: function () {
                         closeWindowByMask();
                         alert("삭제실패");
                     }

                });
            },
        }
    });
}
