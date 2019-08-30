window.onload = function () {
    var mixin = modal();

    new Vue({
        el:"#app",
        mixins: [mixin],
        data: function () {
            return{
                add_update_check:'I'    // 저장인지 수정인지 체크
            }
        },
        mounted: function(){
            var _this = this;
            jqGrid(_this); // jqGrid 실행
            jquery_sysAuth(_this); // vue 에서 실행 못하는 jquery
        },
        methods:{
            main_get_btn:function (page) { // 조회 버튼
                var _this = this;
                $('#jqGrid').setGridParam({ url: 'sysAuth/auth/cd/get' ,datatype: "json", page: page}).trigger("reloadGrid");
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
                    url:"sysAuth/auth/cd/delete",
                    data:{auth_code:code },
                    type : 'DELETE',
                    async: true,
                    dataType : "json",
                    success : function(data){
                        if (data.result === 'NG'){
                            closeWindowByMask();
                            alert(data.message);
                        } else {
                            closeWindowByMask();
                            _this.main_get_btn($("#jqGrid").getGridParam('page'));
                        }
                        },
                     error: function () {
                         closeWindowByMask();
                         alert("삭제실패")
                     }
                });
            },
        }
    });
}


function callback(cb) {
    cb();
}
