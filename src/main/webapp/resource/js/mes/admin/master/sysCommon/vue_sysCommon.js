window.onload = function () {

var mixin = modal();

    new Vue({
        el:"#app",
        mixins: [mixin],
        data: function () {
            return{
                common_group_list:[], // 코드그룹 리스트
                common_group_code:'', // 코드그룹 코드
                common_group_code_post:'', // 코드그룹 코드 조회 데이터
                add_update_check:'I'    // 저장인지 수정인지 체크 I , U
            }
        },
        mounted: function(){ // 맨 처음 시작 함수

            var _this = this;
            jqgrid(_this); // jqGrid 실행
            jquery_sysCommon(_this); // vue 에서 실행 못하는 jquery
            _this.common_group_get(); // 코드그룹 가져오기
            _this.selectBox(); // select2 실행
        },
        methods:{ // var _this = this;  설정하고 시작함 function  마다 this 가 다르게 때문에 데이터 바인딩을 할때는 필수
            common_group_change:function(code,name){ // select 박스 바뀔때 (jquery_sysCommon에서 확인)
                var _this = this;
                _this.common_group_code = code;  // select 박스가 바뀔때 common_group_code에 코드를 넣어줌 (조회할때 사용)
                _this.sys_common.code_type=code; // select 박스가 바뀔때 sys_common 객체에 code_type 에 넣어줌 (저장 수정 할때 사용)
            },
            main_get:function (page) { // 조회 버튼
                var _this = this;
                _this.common_group_code_post =_this.common_group_code; // 조회버튼을 누를때 common_group_code 코드를 common_group_code_post 코드에 넣는다 (수정, 삭제 할때 새로 조회 내용이 바뀌지 않게 유지)
                $('#jqGrid').setGridParam({ url: 'sysCommon/common/get',postData: { code_type: _this.common_group_code_post} ,datatype: "json", page: page}).trigger("reloadGrid");
                // #jqGrid 의 데이터들을 조회한다.
            },
            main_get2:function (page) { // 조회 버튼
                var _this = this;
                $('#jqGrid').setGridParam({ url: 'sysCommon/common/get',postData: { code_type: _this.common_group_code_post} ,datatype: "json", page: page}).trigger("reloadGrid");
                // #jqGrid 의 데이터들을 조회한다.
            },
            main_add_btn:function () {    // 추가를 누를때 작동되는 함수
                var _this = this;
                _this.add_update_check="I"; // add_update_check I, U 값들을 넣어 저장인지 수정인지 판별한다(I 저장,U 수정)
                _this.reset(); // 공통코드 객체 리셋
            },
            main_update_btn:function () { // 데이터를 더블 클릭시 발동되는 함수
                var _this = this;
                _this.add_update_check="U"; // add_update_check I, U 값들을 넣어 저장인지 수정인지 판별한다(I 저장,U 수정)
                $('#myModal').modal("show"); // 모달창 오픈.
            },

            main_delete:function () { //삭제를 누를시
                var _this = this;
                var ids = jQuery("#jqGrid").getGridParam('selarrrow'); //체크된 row id들을 배열로 반환
                var code_value = ids.join(",");
                if (code_value === ''){
                    alert("삭제하는 데이터를 선택해주세요");
                } else {
                    if (confirm("삭제하겠습니까?")){
                        _this.main_delete_ajax(_this.common_group_code_post,code_value);
                    }
                }
            },
            main_delete_ajax:function (type,value) {  // 삭제 ajax
                wrapWindowByMask();
                var _this = this;
                $.ajax({
                    url:"sysCommon/common/delete",
                    data:{code_type:type , code_value:value},
                    type : 'DELETE',
                    async: true,
                    dataType : "json",
                    success : function(data){
                        if (data.result === 'NG'){
                            closeWindowByMask();
                            alert(data.message);
                        } else {
                            closeWindowByMask();
                            _this.main_get2($("#jqGrid").getGridParam('page'));
                        }
                    },
                    error: function () {
                        closeWindowByMask();
                        alert("삭제실패")
                    }
                });
            },
            selectBox:function(){  // select2 실행 메소드
                $("#common_group_select").select2();
            },
            common_group_get:function(){ // 코드그룹 가져오는 메소드
                var _this =this;
                $.ajax({
                    url: "sysCommon/common/group/get",
                    type: 'POST',
                    async: true,
                    dataType: "json",
                    success: function (data) {
                        _this.common_group_list = data;
                        _this.common_group_code = data[0].code_value;
                        _this.sys_common.code_type =data[0].code_value;
                    }
                });
            }

        }
    });
}
